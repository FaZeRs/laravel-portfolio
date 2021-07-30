<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Tag;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * @var string
     */
    public const HOME = '/';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
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

        $this->configureRateLimiting();

        $this->routes(function () {
            Route::middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api.php'));
        });
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by(optional($request->user())->id ?: $request->ip());
        });
    }
}
