<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Experience;
use Illuminate\Auth\Access\HandlesAuthorization;

class ExperiencePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any experience.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function viewAny(?User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the experience.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Experience $experience
     * @return bool
     */
    public function view(?User $user, Experience $experience)
    {
        return true;
    }

    /**
     * Determine whether the user can create experience.
     *
     * @param  \App\Models\User $user
     * @return bool
     */
    public function create(?User $user)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can update the experience.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Experience $experience
     * @return bool
     */
    public function update(?User $user, Experience $experience)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the experience.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Experience $experience
     * @return bool
     */
    public function delete(?User $user, Experience $experience)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the experience.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Experience $experience
     * @return bool
     */
    public function restore(?User $user, Experience $experience)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the experience.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Experience $experience
     * @return bool
     */
    public function forceDelete(?User $user, Experience $experience)
    {
        return $user->isAdmin();
    }
}
