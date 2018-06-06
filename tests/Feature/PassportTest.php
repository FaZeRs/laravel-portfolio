<?php

namespace Tests\Feature;

use App\Models\User;
use Laravel\Passport\Passport;
use Tests\TestCase;
use Laravel\Lumen\Testing\DatabaseMigrations;

class PassportTest extends TestCase
{
    use DatabaseMigrations;

    public function testUserGetDetails()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);

        $this->json('POST', '/api/details');

        $this->assertResponseStatus(200);
        $this->seeJsonContains([
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

        $this->json('POST', '/api/logout');

        $this->assertResponseStatus(200);
        $this->seeJsonContains([
            'success' => 'You have successfully logged out',
        ]);
    }

    public function testGuest()
    {
        $this->json('POST', '/api/details');
        $this->assertResponseStatus(401);
    }
}
