<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function testUserRegisterValidation()
    {
        $response = $this->json('POST', '/api/auth/register', []);
        $response->assertStatus(422);
    }

    public function testUserCanRegister()
    {
        $data = [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => 'secret',
            'password_confirmation' => 'secret',
        ];
        $response = $this->json('POST', '/api/auth/register', $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'access_token' ,
            'token_type',
            'expires_in',
            'user',
        ]);
    }

    public function testUserRegisterUniqueEmail()
    {
        User::factory()->create(['email' => 'john@doe.com']);
        $data = [
            'name' => $this->faker->name,
            'email' => 'john@doe.com',
            'password' => 'secret',
            'password_confirmation' => 'secret',
        ];
        $response = $this->json('POST', '/api/auth/register', $data);
        $response->assertStatus(422);
    }

    public function testUserLoginValidation()
    {
        $response = $this->json('POST', '/api/auth/login', []);
        $response->assertStatus(422);
    }

    public function testUserLoginWrongPassword()
    {
        User::factory()->create([
            'email' => 'john@doe.com',
            'password' => 'secret',
        ]);
        $response = $this->json('POST', '/api/auth/login', [
            'email' => 'john@doe.com',
            'password' => 'password',
        ]);
        $response->assertStatus(422);
    }

    public function testUserCanLogin()
    {
        User::factory()->create([
            'email' => 'john@doe.com',
            'password' => 'secret',
        ]);
        $response = $this->json('POST', '/api/auth/login', [
            'email' => 'john@doe.com',
            'password' => 'secret',
        ]);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'access_token' ,
            'token_type',
            'expires_in',
            'user',
        ]);
    }

    public function testUserGetDetails()
    {
        $user = $this->loginAsUser();
        $response = $this->json('POST', '/api/auth/user');
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
        $response = $this->json('POST', '/api/auth/logout');
        $response->assertStatus(200);
        $response->assertJson([
            'message' => 'You have successfully logged out',
        ]);
    }

    public function testGuest()
    {
        $response = $this->json('POST', '/api/auth/user');
        $response->assertUnauthorized();
    }
}
