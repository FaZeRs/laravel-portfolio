<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Education;
use Illuminate\Auth\Access\HandlesAuthorization;

class EducationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any education.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function viewAny(?User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the education.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Education $education
     * @return bool
     */
    public function view(?User $user, Education $education)
    {
        return true;
    }

    /**
     * Determine whether the user can create education.
     *
     * @param  \App\Models\User $user
     * @return bool
     */
    public function create(?User $user)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can update the education.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Education $education
     * @return bool
     */
    public function update(?User $user, Education $education)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the education.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Education $education
     * @return bool
     */
    public function delete(?User $user, Education $education)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the education.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Education $education
     * @return bool
     */
    public function restore(?User $user, Education $education)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the education.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Education $education
     * @return bool
     */
    public function forceDelete(?User $user, Education $education)
    {
        return $user->isAdmin();
    }
}
