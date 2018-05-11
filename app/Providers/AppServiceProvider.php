<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Contracts\View\Factory;
use Illuminate\Routing\Redirector;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (config('database.connections.mysql.charset') === 'utf8mb4') {
            Schema::defaultStringLength(191);
        }

        if (app()->environment('production')) {
            URL::forceScheme('https');
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(ResponseFactory::class, function ($app) {
            return new \Illuminate\Routing\ResponseFactory(
                $app[Factory::class],
                $app[Redirector::class]
            );
        });
    }
}
