<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Laravel\Sanctum\Sanctum;

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

        Sanctum::actingAs(
            $admin,
            ['*']
        );

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

        Sanctum::actingAs(
            $user,
            ['*']
        );

        return $user;
    }
}
