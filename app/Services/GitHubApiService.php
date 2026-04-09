<?php

namespace App\Services;

use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use RuntimeException;

class GitHubApiService
{
    public function getOrgRepos(string $org, array $params = []): array
    {
        return Cache::remember(
            $this->cacheKey('org-repos', [$org, $params]),
            now()->addMinutes(15),
            fn (): array => $this->request("https://api.github.com/orgs/{$org}/repos", $params),
        );
    }

    public function getRepository(string $owner, string $repo): array
    {
        return Cache::remember(
            $this->cacheKey('repository', [$owner, $repo]),
            now()->addMinutes(15),
            fn (): array => $this->request("https://api.github.com/repos/{$owner}/{$repo}"),
        );
    }

    public function getRepoLanguages(string $owner, string $repo): array
    {
        return Cache::remember(
            $this->cacheKey('repository-languages', [$owner, $repo]),
            now()->addMinutes(15),
            fn (): array => $this->request("https://api.github.com/repos/{$owner}/{$repo}/languages"),
        );
    }

    public function getRepositoryLanguagesFromUrl(?string $githubUrl): array
    {
        if ($githubUrl === null || trim($githubUrl) === '') {
            return [];
        }

        // Accept full GitHub URLs from config so the CV can stay easy to edit.
        $path = (string) parse_url($githubUrl, PHP_URL_PATH);
        $parts = array_values(array_filter(explode('/', trim($path, '/'))));

        if (count($parts) < 2) {
            return [];
        }

        $owner = $parts[0];
        // Strip a possible .git suffix to support copied clone URLs as well.
        $repo = preg_replace('/\.git$/', '', $parts[1]) ?: $parts[1];

        return $this->getRepoLanguages($owner, $repo);
    }

    public function getContributors(string $owner, string $repo): array
    {
        return Cache::remember(
            $this->cacheKey('repository-contributors', [$owner, $repo]),
            now()->addMinutes(15),
            fn (): array => $this->request("https://api.github.com/repos/{$owner}/{$repo}/contributors"),
        );
    }

    public function getRepoName(string $owner, string $repo): string
    {
        return $this->getRepository($owner, $repo)['name'] ?? '';
    }

    private function github(): PendingRequest
    {
        // Use one shared client setup so all GitHub calls get the same auth,
        // timeout and retry behavior.
        return Http::acceptJson()
            ->withToken($this->token())
            ->timeout(10)
            ->connectTimeout(5)
            ->retry(3, 200);
    }

    private function request(string $url, array $params = []): array
    {
        $data = $this->github()
            ->get($url, $params)
            ->throw()
            ->json();

        return is_array($data) ? $data : [];
    }

    private function token(): string
    {
        $token = (string) config('services.github.token', '');

        if ($token === '') {
            throw new RuntimeException('GitHub token is not configured.');
        }

        return $token;
    }

    private function cacheKey(string $prefix, array $parts): string
    {
        return 'github:'.md5($prefix.'|'.json_encode($parts));
    }
}
