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

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\LinkController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SettingController;
use App\Http\Controllers\Api\TagController;

Route::name('api.')->group(function () {
    Route::post('contact/send', [ContactController::class, 'send'])->name('contact.send');

    Route::prefix('auth')->name('auth.')->group(function () {
        Route::post('login', [AuthController::class, 'login'])->name('login');
        Route::post('register', [AuthController::class, 'register'])->name('register');
        Route::post('logout', [AuthController::class, 'logout'])->name('logout');
        Route::post('refresh', [AuthController::class, 'refresh'])->name('refresh');
        Route::post('user', [AuthController::class, 'user'])->name('user');
    });

    Route::get('settings', [SettingController::class, 'index']);
    Route::get('settings/{name}', [SettingController::class, 'show']);

    Route::prefix('categories')->name('category.')->group(function () {
        Route::get('/', [CategoryController::class, 'index'])->name('index');
        Route::get('{category}', [CategoryController::class, 'show'])->name('show');
        Route::post('/', [CategoryController::class, 'store'])->name('store');
        Route::put('{category}', [CategoryController::class, 'update'])->name('update');
        Route::delete('{category}', [CategoryController::class, 'destroy'])->name('destroy');
        Route::put('{category}/restore', [CategoryController::class, 'restore'])->name('restore');
        Route::put('{category}/delete', [CategoryController::class, 'delete'])->name('delete-permanently');
    });

    Route::prefix('projects')->name('project.')->group(function () {
        Route::get('/', [ProjectController::class, 'index'])->name('index');
        Route::get('{project}', [ProjectController::class, 'show'])->name('show');
        Route::post('/', [ProjectController::class, 'store'])->name('store');
        Route::put('{project}', [ProjectController::class, 'update'])->name('update');
        Route::delete('{project}', [ProjectController::class, 'destroy'])->name('destroy');
        Route::put('{project}/restore', [ProjectController::class, 'restore'])->name('restore');
        Route::put('{project}/delete', [ProjectController::class, 'delete'])->name('delete-permanently');
    });

    Route::prefix('tags')->name('tag.')->group(function () {
        Route::get('/', [TagController::class, 'index'])->name('index');
        Route::get('{tag}', [TagController::class, 'show'])->name('show');
        Route::post('/', [TagController::class, 'store'])->name('store');
        Route::put('{tag}', [TagController::class, 'update'])->name('update');
        Route::delete('{tag}', [TagController::class, 'destroy'])->name('destroy');
        Route::put('{tag}/restore', [TagController::class, 'restore'])->name('restore');
        Route::put('{tag}/delete', [TagController::class, 'delete'])->name('delete-permanently');
    });

    Route::prefix('links')->name('link.')->group(function () {
        Route::get('/', [LinkController::class, 'index'])->name('index');
        Route::get('{link}', [LinkController::class, 'show'])->name('show');
        Route::post('/', [LinkController::class, 'store'])->name('store');
        Route::put('{link}', [LinkController::class, 'update'])->name('update');
        Route::delete('{link}', [LinkController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('education')->name('education.')->group(function () {
        Route::get('/', [EducationController::class, 'index'])->name('index');
        Route::get('{education}', [EducationController::class, 'show'])->name('show');
        Route::post('/', [EducationController::class, 'store'])->name('store');
        Route::put('{education}', [EducationController::class, 'update'])->name('update');
        Route::delete('{education}', [EducationController::class, 'destroy'])->name('destroy');
        Route::put('{education}/restore', [EducationController::class, 'restore'])->name('restore');
        Route::put('{education}/delete', [EducationController::class, 'delete'])->name('delete-permanently');
    });

    Route::prefix('experience')->name('experience.')->group(function () {
        Route::get('/', [ExperienceController::class, 'index'])->name('index');
        Route::get('{experience}', [ExperienceController::class, 'show'])->name('show');
        Route::post('/', [ExperienceController::class, 'store'])->name('store');
        Route::put('{experience}', [ExperienceController::class, 'update'])->name('update');
        Route::delete('{experience}', [ExperienceController::class, 'destroy'])->name('destroy');
        Route::put('{experience}/restore', [ExperienceController::class, 'restore'])->name('restore');
        Route::put('{experience}/delete', [ExperienceController::class, 'delete'])->name('delete-permanently');
    });
});
