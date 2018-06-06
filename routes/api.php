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

$router->post('contact/send', 'ContactController@send');

$router->post('login', 'LoginController@login');
$router->post('register', 'RegisterController@register');
$router->post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
$router->post('password/reset', 'ResetPasswordController@reset');
$router->group(['middleware' => 'auth:api'], function () use ($router) {
    $router->post('details', 'UserController@details');
    $router->post('logout', 'UserController@logout');
});
