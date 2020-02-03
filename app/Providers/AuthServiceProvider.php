<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Link;
use App\Models\Project;
use App\Models\Setting;
use App\Models\Tag;
use App\Policies\CategoryPolicy;
use App\Policies\EducationPolicy;
use App\Policies\ExperiencePolicy;
use App\Policies\LinkPolicy;
use App\Policies\ProjectPolicy;
use App\Policies\SettingPolicy;
use App\Policies\TagPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Category::class => CategoryPolicy::class,
        Education::class => EducationPolicy::class,
        Experience::class => ExperiencePolicy::class,
        Project::class => ProjectPolicy::class,
        Setting::class => SettingPolicy::class,
        Tag::class => TagPolicy::class,
        Link::class => LinkPolicy::class,
    ];

    /**
     * Boot the authentication services for the application.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
}
