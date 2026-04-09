<?php

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

uses(TestCase::class);

it('renders the welcome page with cv data from laravel', function () {
    config()->set('services.github.token', null);

    $this->get('/')
        ->assertSuccessful()
        ->assertInertia(fn (Assert $page) => $page
            ->component('welcome')
            ->where('cvData.hero.greeting', 'Hej! jag är Monika Engström')
            ->where('cvData.profile.name', 'Monika Engström')
            ->has('cvData.education', 2)
            ->has('cvData.repositories', 4)
            ->where('cvData.repositories.3.name', 'CVMonika')
            ->where('cvData.repositories.3.url', 'https://github.com/Monika-feg/CVMonika')
            ->has('cvData.languages', 2));
});
