<?php

use Illuminate\Mail\MailServiceProvider;
use Illuminate\Cookie\CookieServiceProvider;

require_once __DIR__.'/../vendor/autoload.php';

try {
    (new Dotenv\Dotenv(__DIR__.'/../'))->load();
} catch (Dotenv\Exception\InvalidPathException $e) {
    //
}

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| Here we will load the environment and create the application instance
| that serves as the central piece of this framework. We'll use this
| application as an "IoC" container and router for this framework.
|
*/

$app = new Laravel\Lumen\Application(
    dirname(__DIR__).'/'
);

require_once __DIR__.'/helpers.php';

$app->instance('path.config', app()->basePath().DIRECTORY_SEPARATOR.'config');
$app->instance('path.storage', app()->basePath().DIRECTORY_SEPARATOR.'storage');
$app->instance('path.public', app()->basePath().DIRECTORY_SEPARATOR.'public');

$app->withFacades();
$app->withEloquent();

$app->make('queue');

$app->configure('app');
$app->configure('auth');
$app->configure('cache');
$app->configure('database');
$app->configure('mail');
$app->configure('session');

/*
|--------------------------------------------------------------------------
| Register Container Bindings
|--------------------------------------------------------------------------
|
| Now we will register a few bindings in the service container. We will
| register the exception handler and the console kernel. You may add
| your own bindings here if you like or you can make another file.
|
*/

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    App\Console\Kernel::class
);

$app->singleton('mailer', function ($app) {
    return $app->loadComponent('mail', MailServiceProvider::class, 'mailer');
});
$app->alias('mailer', Illuminate\Contracts\Mail\Mailer::class);

$app->bind(\Illuminate\Session\SessionManager::class, function () use ($app) {
    return new \Illuminate\Session\SessionManager($app);
});

$app->singleton('cookie', function () use ($app) {
    return $app->loadComponent('session', CookieServiceProvider::class, 'cookie');
});

$app->bind(\Illuminate\Contracts\Cookie\QueueingFactory::class, 'cookie');

/*
|--------------------------------------------------------------------------
| Register Middleware
|--------------------------------------------------------------------------
|
| Next, we will register the middleware with the application. These can
| be global middleware that run before and after each request into a
| route or middleware that'll be assigned to some specific routes.
|
*/

$app->middleware([
    \Illuminate\Cookie\Middleware\EncryptCookies::class,
    \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
    \Illuminate\Session\Middleware\StartSession::class,
    \Illuminate\View\Middleware\ShareErrorsFromSession::class,
    \Laravel\Passport\Http\Middleware\CreateFreshApiToken::class,
]);

$app->routeMiddleware([
    'auth'  => App\Http\Middleware\Authenticate::class,
    'admin' => App\Http\Middleware\AdminMiddleware::class,
]);

/*
|--------------------------------------------------------------------------
| Register Service Providers
|--------------------------------------------------------------------------
|
| Here we will register all of the application's service providers which
| are used to bind services into the container. Service providers are
| totally optional, so you are not required to uncomment this line.
|
*/

$app->register(App\Providers\AppServiceProvider::class);
$app->register(App\Providers\AuthServiceProvider::class);
$app->register(\Illuminate\Session\SessionServiceProvider::class);
$app->register(\Illuminate\Queue\QueueServiceProvider::class);
$app->register(\Illuminate\Mail\MailServiceProvider::class);
$app->register(\Illuminate\Redis\RedisServiceProvider::class);
$app->register(Laravel\Passport\PassportServiceProvider::class);
$app->register(Dusterio\LumenPassport\PassportServiceProvider::class);

/*
|--------------------------------------------------------------------------
| Load The Application Routes
|--------------------------------------------------------------------------
|
| Next we will include the routes file so that they can all be added to
| the application. This will provide all of the URLs the application
| can respond to, as well as the controllers that may handle them.
|
*/

$app->router->group([
    'prefix'    => 'api',
    'namespace' => 'App\Http\Controllers\Api',
], function ($router) {
    require __DIR__.'/../routes/api.php';
});

$app->router->group([
    'namespace' => 'App\Http\Controllers',
], function ($router) {
    require __DIR__.'/../routes/web.php';
});

return $app;
