<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Link;
use Illuminate\Auth\Access\HandlesAuthorization;

class LinkPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any link.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function viewAny(?User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the link.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Link $link
     * @return bool
     */
    public function view(?User $user, Link $link)
    {
        return true;
    }

    /**
     * Determine whether the user can create link.
     *
     * @param  \App\Models\User $user
     * @return bool
     */
    public function create(?User $user)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can update the link.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Link $link
     * @return bool
     */
    public function update(?User $user, Link $link)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the link.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Link $link
     * @return bool
     */
    public function delete(?User $user, Link $link)
    {
        return $user->isAdmin();
    }
}
