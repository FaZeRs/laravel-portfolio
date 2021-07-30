# The api code of [naurislinde.com](https://naurislinde.com)

### Requirements

- PHP 8.0
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- BCMath PHP Extension
- Redis server (optional)
- Exif PHP Extension
- GD/Imagick PHP Extension

#### Setup

Laravel project dependencies are managed through the [PHP Composer tool](https://getcomposer.org/). The first step is to install the dependencies by navigating into your project in terminal and typing this command:
```
composer install
```

This repository ships with a .env.example file in the root of the project. You must rename this file to just .env or run
```
composer env:copy
```

The first thing we are going to so is set the key that Laravel will use when doing encryption.
```
php artisan key:generate
```

You must create your database on your server and on your .env file update the following lines:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

We are going to run the built in migrations to create the database tables and seed database with data
```
php artisan migrate --seed
```

Now we need to create the encryption keys needed to generate secure access tokens.
```
php artisan jwt:secret
```

We need to publish horizon assets
```
php artisan horizon:install
```

We need to publish telescope assets
```
php artisan telescope:install
```

For detailed explanation on how things work, check out [Laravel docs](https://laravel.com/docs).
