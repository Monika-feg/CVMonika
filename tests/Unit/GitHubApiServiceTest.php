<?php

use App\Services\GitHubApiService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

uses(TestCase::class);

it('fetches repository languages from a github url', function () {
    config()->set('services.github.token', 'test-token');
    Cache::flush();

    Http::fake([
        'https://api.github.com/repos/monika/cvmonika/languages' => Http::response([
            'PHP' => 1200,
            'TypeScript' => 800,
        ]),
    ]);

    $languages = app(GitHubApiService::class)
        ->getRepositoryLanguagesFromUrl('https://github.com/monika/cvmonika.git');

    expect($languages)->toBe([
        'PHP' => 1200,
        'TypeScript' => 800,
    ]);

    Http::assertSent(function ($request) {
        return $request->url() === 'https://api.github.com/repos/monika/cvmonika/languages'
            && $request->hasHeader('Authorization', 'Bearer test-token');
    });
});

it('reuses repository data when reading the repository name', function () {
    config()->set('services.github.token', 'test-token');
    Cache::flush();

    Http::fake([
        'https://api.github.com/repos/monika/cvmonika' => Http::response([
            'name' => 'cvmonika',
        ]),
    ]);

    $service = app(GitHubApiService::class);

    expect($service->getRepoName('monika', 'cvmonika'))->toBe('cvmonika');
    expect($service->getRepoName('monika', 'cvmonika'))->toBe('cvmonika');

    Http::assertSentCount(1);
});
