<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Tag;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * The path to the "home" route for your application.
     *
     * @var string
     */
    public const HOME = '/admin';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();

        Route::bind('category', function ($value) {
            if (Route::currentRouteName() === 'api.category.restore' || Route::currentRouteName() === 'api.category.delete-permanently') {
                return Category::onlyTrashed()->find($value);
            }

            return Category::find($value);
        });

        Route::bind('education', function ($value) {
            if (Route::currentRouteName() === 'api.education.restore' || Route::currentRouteName() === 'api.education.delete-permanently') {
                return Education::onlyTrashed()->find($value);
            }

            return Education::find($value);
        });

        Route::bind('experience', function ($value) {
            if (Route::currentRouteName() === 'api.experience.restore' || Route::currentRouteName() === 'api.experience.delete-permanently') {
                return Experience::onlyTrashed()->find($value);
            }

            return Experience::find($value);
        });

        Route::bind('project', function ($value) {
            if (Route::currentRouteName() === 'api.project.restore' || Route::currentRouteName() === 'api.project.delete-permanently') {
                return Project::onlyTrashed()->find($value);
            }

            return Project::find($value);
        });

        Route::bind('tag', function ($value) {
            if (Route::currentRouteName() === 'api.tag.restore' || Route::currentRouteName() === 'api.tag.delete-permanently') {
                return Tag::onlyTrashed()->find($value);
            }

            return Tag::find($value);
        });
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        Route::namespace($this->namespace)->group(function () {
            $this->mapApiRoutes();
            $this->mapWebRoutes();
        });
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
            ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
            ->middleware('api')
            ->namespace('Api')
            ->group(base_path('routes/api.php'));
    }
}
