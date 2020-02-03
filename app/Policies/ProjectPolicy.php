<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Project;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProjectPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any project.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function viewAny(?User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the project.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Project $project
     * @return bool
     */
    public function view(?User $user, Project $project)
    {
        return true;
    }

    /**
     * Determine whether the user can create proejcts.
     *
     * @param  \App\Models\User $user
     * @return bool
     */
    public function create(?User $user)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can update the project.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Project $project
     * @return bool
     */
    public function update(?User $user, Project $project)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the project.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Project $project
     * @return bool
     */
    public function delete(?User $user, Project $project)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the project.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Project $project
     * @return bool
     */
    public function restore(?User $user, Project $project)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the project.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Project $project
     * @return bool
     */
    public function forceDelete(?User $user, Project $project)
    {
        return $user->isAdmin();
    }
}
