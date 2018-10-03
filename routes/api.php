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
Route::get('details', 'UserController@details');
Route::get('logout', 'UserController@logout');
Route::apiResource('categories', 'CategoryController');
Route::apiResource('projects', 'ProjectController');
Route::apiResource('tags', 'TagController');
Route::apiResource('links', 'LinkController');