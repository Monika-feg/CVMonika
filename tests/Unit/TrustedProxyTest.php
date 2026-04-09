<?php

use Illuminate\Support\Facades\Route;
use Tests\TestCase;

uses(TestCase::class);

test('forwarded https headers are trusted for url generation', function () {
    Route::get('/test/proxy-url', function () {
        return response()->json([
            'secure' => request()->isSecure(),
            'url' => url('/build/assets/app.js'),
        ]);
    });

    $response = $this
        ->withServerVariables([
            'REMOTE_ADDR' => '10.0.0.1',
            'HTTP_X_FORWARDED_FOR' => '203.0.113.10',
            'HTTP_X_FORWARDED_HOST' => 'cvmonika.onrender.com',
            'HTTP_X_FORWARDED_PORT' => '443',
            'HTTP_X_FORWARDED_PROTO' => 'https',
        ])
        ->get('/test/proxy-url');

    $response
        ->assertOk()
        ->assertJson([
            'secure' => true,
            'url' => 'https://cvmonika.onrender.com/build/assets/app.js',
        ]);
});
