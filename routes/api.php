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

Route::post('contact/send', 'ContactController@send');

Route::post('login', 'LoginController@login');
Route::post('register', 'RegisterController@register');
Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
Route::post('password/reset', 'ResetPasswordController@reset');
Route::middleware('auth:api')->group(function () {
    Route::post('details', 'UserController@details');
    Route::post('logout', 'UserController@logout');
});
