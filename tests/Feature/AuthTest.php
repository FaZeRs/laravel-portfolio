<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function testUserGetDetails()
    {
        $user = $this->loginAsUser();

        $response = $this->json('GET', '/api/details');

        $response->assertStatus(200);
        $response->assertJson([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'created_at' => $user->created_at->toDateTimeString(),
            'updated_at' => $user->updated_at->toDateTimeString(),
        ]);
    }

    public function testLogout()
    {
        $this->loginAsUser();

        $response = $this->json('GET', '/api/logout');

        $response->assertStatus(200);
        $response->assertJson([
            'success' => 'You have successfully logged out',
        ]);
    }

    public function testGuest()
    {
        $response = $this->json('GET', '/api/details');
        $response->assertStatus(401);
    }
}
