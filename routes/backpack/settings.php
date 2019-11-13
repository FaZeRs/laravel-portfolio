<?php
/*
|--------------------------------------------------------------------------
| Backpack\Settings Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are
| handled by the Backpack\Settings package.
|
*/
Route::group([
    'prefix'     => config('backpack.base.route_prefix', 'admin'),
    'middleware' => ['web', backpack_middleware()],
    'namespace'  => 'App\Http\Controllers\Admin',
], function () {
    Route::crud('setting', 'SettingCrudController');
});
