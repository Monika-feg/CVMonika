<?php

namespace App\Http\Controllers;

use App\Services\GitHubApiService;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class WelcomeController extends Controller
{
    public function __construct(private readonly GitHubApiService $gitHubApiService) {}

    public function __invoke(): Response
    {
        $cvData = config('cv');

        // Keep the CV config as the source of truth, but enrich each repo with live
        // GitHub language data when a token is available.
        $repositories = collect(Arr::get($cvData, 'repositories', []))
            ->map(fn (array $repository): array => [
                ...$repository,
                'stack' => $this->resolveRepositoryStack($repository),
            ])
            ->values()
            ->all();

        return Inertia::render('welcome', [
            'cvData' => [
                ...$cvData,
                'repositories' => $repositories,
            ],
        ]);
    }

    private function resolveRepositoryStack(array $repository): array
    {
        $fallback = Arr::wrap($repository['stack'] ?? []);
        $url = $repository['url'] ?? null;

        if (! is_string($url) || $url === '' || ! config('services.github.token')) {
            return $fallback;
        }

        try {
            // GitHub returns languages as a key/value map, but the UI only needs the
            // ordered language names for display badges.
            $languages = array_keys($this->gitHubApiService->getRepositoryLanguagesFromUrl($url));

            return $languages !== [] ? $languages : $fallback;
        } catch (Throwable $throwable) {
            report($throwable);

            return $fallback;
        }
    }
}
