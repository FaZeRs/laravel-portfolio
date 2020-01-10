<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::name('api.')->group(function () {
    Route::post('contact/send', 'ContactController@send')->name('contact.send');

    Route::post('login', 'LoginController@login')->name('login');
    Route::post('register', 'RegisterController@register')->name('register');
    Route::get('details', 'UserController@details')->name('user.details');
    Route::get('logout', 'UserController@logout')->name('user.logout');
    Route::apiResource('categories', 'CategoryController');
    Route::apiResource('projects', 'ProjectController');
    Route::apiResource('tags', 'TagController');
    Route::apiResource('links', 'LinkController');
    Route::apiResource('education', 'EducationController');
    Route::apiResource('experience', 'ExperienceController');
    Route::apiResource('settings', 'SettingController')->only([
        'index', 'show',
    ]);
});
