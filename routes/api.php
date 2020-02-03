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

use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\LinksController;
use App\Http\Controllers\Api\ProjectsController;
use App\Http\Controllers\Api\TagsController;

Route::name('api.')->group(function () {
    Route::post('contact/send', 'ContactController@send')->name('contact.send');

    Route::post('login', 'LoginController@login')->name('login');
    Route::post('register', 'RegisterController@register')->name('register');
    Route::get('details', 'UserController@details')->name('user.details');
    Route::get('logout', 'UserController@logout')->name('user.logout');

    Route::prefix('categories')->name('categories.')->group(function () {
        Route::get('/', [CategoriesController::class, 'index'])->name('index');
        Route::get('{category}', [CategoriesController::class, 'show'])->name('show');
        Route::post('/', [CategoriesController::class, 'store'])->name('store');
        Route::put('{category}', [CategoriesController::class, 'update'])->name('update');
        Route::delete('{category}', [CategoriesController::class, 'destroy'])->name('destroy');
        Route::put('{category}/restore', [CategoriesController::class, 'restore'])->name('restore');
        Route::put('{category}/delete', [CategoriesController::class, 'delete'])->name('delete-permanently');
    });

    Route::prefix('projects')->name('projects.')->group(function () {
        Route::get('/', [ProjectsController::class, 'index'])->name('index');
        Route::get('{project}', [ProjectsController::class, 'show'])->name('show');
        Route::post('/', [ProjectsController::class, 'store'])->name('store');
        Route::put('{project}', [ProjectsController::class, 'update'])->name('update');
        Route::delete('{project}', [ProjectsController::class, 'destroy'])->name('destroy');
        Route::put('{project}/restore', [ProjectsController::class, 'restore'])->name('restore');
        Route::put('{project}/delete', [ProjectsController::class, 'delete'])->name('delete-permanently');
    });

    Route::prefix('tags')->name('tags.')->group(function () {
        Route::get('/', [TagsController::class, 'index'])->name('index');
        Route::get('{tag}', [TagsController::class, 'show'])->name('show');
        Route::post('/', [TagsController::class, 'store'])->name('store');
        Route::put('{tag}', [TagsController::class, 'update'])->name('update');
        Route::delete('{tag}', [TagsController::class, 'destroy'])->name('destroy');
        Route::put('{tag}/restore', [TagsController::class, 'restore'])->name('restore');
        Route::put('{tag}/delete', [TagsController::class, 'delete'])->name('delete-permanently');
    });

    Route::prefix('links')->name('links.')->group(function () {
        Route::get('/', [LinksController::class, 'index'])->name('index');
        Route::get('{link}', [LinksController::class, 'show'])->name('show');
        Route::post('/', [LinksController::class, 'store'])->name('store');
        Route::put('{link}', [LinksController::class, 'update'])->name('update');
        Route::delete('{link}', [LinksController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('education')->name('education.')->group(function () {
        Route::get('/', [EducationController::class, 'index'])->name('index');
        Route::get('{education}', [EducationController::class, 'show'])->name('show');
        Route::post('/', [EducationController::class, 'store'])->name('store');
        Route::put('{education}', [EducationController::class, 'update'])->name('update');
        Route::delete('{education}', [EducationController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('experience')->name('experience.')->group(function () {
        Route::get('/', [ExperienceController::class, 'index'])->name('index');
        Route::get('{experience}', [ExperienceController::class, 'show'])->name('show');
        Route::post('/', [ExperienceController::class, 'store'])->name('store');
        Route::put('{experience}', [ExperienceController::class, 'update'])->name('update');
        Route::delete('{experience}', [ExperienceController::class, 'destroy'])->name('destroy');
    });

    Route::apiResource('settings', 'SettingController')->only([
        'index', 'show',
    ]);
});
