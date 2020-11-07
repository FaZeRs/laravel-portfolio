<?php

namespace App\Providers;

use App\Settings;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(Settings::class, function () {
            return Cache::remember('settings', 15, function () {
                $default = collect(config('settings.default'))->map(function ($setting) {
                    return $setting->value;
                })->all();
                return Settings::make(config('settings.path'), $default);
            });
        });
        if ($this->app->isLocal()) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

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

        JsonResource::withoutWrapping();
    }
}
