<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Laravel\Passport\Passport;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PassportTest extends TestCase
{
    use RefreshDatabase;

    public function testUserGetDetails()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);

        $response = $this->json('POST', '/api/details');

        $response->assertStatus(200);
        $response->assertJson([
            'details' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at->toDateTimeString(),
                'updated_at' => $user->updated_at->toDateTimeString(),
            ],
        ]);
    }

    public function testLogout()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);

        $response = $this->json('POST', '/api/logout');

        $response->assertStatus(200);
        $response->assertJson([
            'success' => 'You have successfully logged out',
        ]);
    }

    public function testGuest()
    {
        $response = $this->json('POST', '/api/details');
        $response->assertStatus(401);
    }
}
