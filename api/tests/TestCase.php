<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Tymon\JWTAuth\Facades\JWTAuth;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Create an user.
     *
     * @param bool $admin
     *
     * @return mixed
     */
    protected function createUser($admin = false)
    {
        $admin = User::factory()->create(['is_admin' => $admin]);

        return $admin;
    }

    /**
     * Login the given administrator or create the first if none supplied.
     *
     * @return bool|mixed
     */
    protected function loginAsAdmin()
    {
        $admin = $this->createUser(true);

        $token = JWTAuth::fromUser($admin);
        $this->withHeader('Authorization', "Bearer {$token}");
        parent::actingAs($admin);

        return $admin;
    }

    /**
     * Login the given user or create the first if none supplied.
     *
     * @return bool|mixed
     */
    protected function loginAsUser()
    {
        $user = $this->createUser();

        $token = JWTAuth::fromUser($user);
        $this->withHeader('Authorization', "Bearer {$token}");
        parent::actingAs($user);

        return $user;
    }
}
