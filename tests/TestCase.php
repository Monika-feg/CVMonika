<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Laravel\Fortify\Features;

abstract class TestCase extends BaseTestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        // Ignorera Vite under tester (för att slippa manifest-fel)
        $this->withoutVite();

        // Stäng av Inertia's kontroll av att sida-komponenter finns
        // Detta är nödvändigt när man har tagit bort Fortify/Breeze-sidor
        config(['inertia.testing.ensure_pages_exist' => false]);
    }

    protected function skipUnlessFortifyFeature(string $feature, ?string $message = null): void
    {
        if (! Features::enabled($feature)) {
            $this->markTestSkipped($message ?? "Fortify feature [{$feature}] is not enabled.");
        }
    }
}