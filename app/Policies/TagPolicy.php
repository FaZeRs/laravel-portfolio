<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Tag;
use Illuminate\Auth\Access\HandlesAuthorization;

class TagPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any tag.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function viewAny(?User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the tag.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Tag $tag
     * @return bool
     */
    public function view(?User $user, Tag $tag)
    {
        return true;
    }

    /**
     * Determine whether the user can create tags.
     *
     * @param  \App\Models\User $user
     * @return bool
     */
    public function create(?User $user)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can update the tag.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Tag $tag
     * @return bool
     */
    public function update(?User $user, Tag $tag)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the tag.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Tag $tag
     * @return bool
     */
    public function delete(?User $user, Tag $tag)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the tag.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Tag $tag
     * @return bool
     */
    public function restore(?User $user, Tag $tag)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the tag.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Tag $tag
     * @return bool
     */
    public function forceDelete(?User $user, Tag $tag)
    {
        return $user->isAdmin();
    }
}
