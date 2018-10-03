<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Laravel\Passport\Passport;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Create an user.
     *
     * @param boolean $admin
     *
     * @return mixed
     */
    protected function createUser($admin = false)
    {
        $admin = factory(User::class)->create(['is_admin' => $admin]);

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

        Passport::actingAs($admin);

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

        Passport::actingAs($user);

        return $user;
    }
}
