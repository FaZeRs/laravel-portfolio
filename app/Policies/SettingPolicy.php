<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Setting;
use Illuminate\Auth\Access\HandlesAuthorization;

class SettingPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any setting.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function viewAny(?User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the setting.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Setting $setting
     * @return bool
     */
    public function view(?User $user, Setting $setting)
    {
        return true;
    }

    /**
     * Determine whether the user can create settings.
     *
     * @param  \App\Models\User $user
     * @return bool
     */
    public function create(?User $user)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can update the setting.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Setting $setting
     * @return bool
     */
    public function update(?User $user, Setting $setting)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the setting.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Setting $setting
     * @return bool
     */
    public function delete(?User $user, Setting $setting)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the setting.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Setting $setting
     * @return bool
     */
    public function restore(?User $user, Setting $setting)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the setting.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Setting $setting
     * @return bool
     */
    public function forceDelete(?User $user, Setting $setting)
    {
        return $user->isAdmin();
    }
}
