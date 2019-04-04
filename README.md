# The source code of [naurislinde.com](https://naurislinde.com)

[![Build Status](https://img.shields.io/travis/FaZeRs/naurislinde.com/master.svg?style=flat-square)](https://travis-ci.org/FaZeRs/naurislinde.com)
[![StyleCI](https://styleci.io/repos/130983433/shield)](https://styleci.io/repos/130983433)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

This repository contains source code of my personal portfolio at [naurislinde.com](https://naurislinde.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Requirements

- PHP >= 7.1.3
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Redis server (optional)

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository
```
git clone git@github.com:FaZeRs/naurislinde.com.git
```

#### With Docker

Build containers
```
docker-compose up -d --build
```

Access docker environment
```
docker container exec -it portfolio sh
```

Run this command inside terminal to create .env file, install dependencies, generate key, run migrations and tests. 
```
composer start
```

To install javascript dependencies and compile assets run this command
```
npm run start
```

The application will be available on http://localhost:8000, the phpMyAdmin on http://localhost:8080, the mailhog on http://localhost:8025

#### Common way

Laravel project dependencies are managed through the [PHP Composer tool](https://getcomposer.org/). The first step is to install the dependencies by navigating into your project in terminal and typing this command:
```
composer install
```

This repository ships with a .env.example file in the root of the project. You must rename this file to just .env

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

We are going to run the built in migrations to create the database tables
```
php artisan migrate --seed
```

Now we need to create the encryption keys needed to generate secure access tokens.
```
php artisan passport:install
```

In order to install the Javascript packages for frontend development, you will need the [Node Package Manager](https://www.npmjs.com/), and optionally the [Yarn Package Manager](https://yarnpkg.com/lang/en/) by Facebook (Recommended)

If you only have NPM installed you have to run this command from the root of the project:
```
npm install
```

Compile assets:
```
# NPM
npm run dev

# Watch to update automatically while developing
npm run watch
```

## REST API

We use [Laravel Passport](https://laravel.com/docs/master/passport). It is an OAuth2 server and API authentication package.

#### API Links

Verb | Path | NamedRoute | Controller | Action | Middleware
--- | --- | --- | --- | --- | ---
POST      | /api/login                  | api.login              | \App\Http\Controllers\Api\LoginController    | login      | -
POST      | /api/register               | api.register           | \App\Http\Controllers\Api\RegisterController | register   | -
GET       | /api/details                | api.user.details       | \App\Http\Controllers\Api\UserController     | details    | auth:api
GET       | /api/logout                 | api.user.logout        | \App\Http\Controllers\Api\UserController     | logout     | auth:api
GET       | /api/categories             | api.categories.index   | \App\Http\Controllers\Api\CategoryController | index      | -
GET       | /api/categories/{category}  | api.categories.show    | \App\Http\Controllers\Api\CategoryController | show       | -
POST      | /api/categories             | api.categories.store   | \App\Http\Controllers\Api\CategoryController | store      | api_admin
PUT/PATCH | /api/categories/{category}  | api.categories.update  | \App\Http\Controllers\Api\CategoryController | update     | api_admin
DELETE    | /api/categories/{category}  | api.categories.destroy | \App\Http\Controllers\Api\CategoryController | destroy    | api_admin
GET       | /api/projects               | api.projects.index     | \App\Http\Controllers\Api\ProjectController  | index      | -
GET       | /api/projects/{project}     | api.projects.show      | \App\Http\Controllers\Api\ProjectController  | show       | -
POST      | /api/projects               | api.projects.store     | \App\Http\Controllers\Api\ProjectController  | store      | api_admin
PUT/PATCH | /api/projects/{project}     | api.projects.update    | \App\Http\Controllers\Api\ProjectController  | update     | api_admin
DELETE    | /api/projects/{project}     | api.projects.destroy   | \App\Http\Controllers\Api\ProjectController  | destroy    | api_admin
GET       | /api/tags                   | api.tags.index         | \App\Http\Controllers\Api\TagController      | index      | -
GET       | /api/tags/{tag}             | api.tags.show          | \App\Http\Controllers\Api\TagController      | show       | -
POST      | /api/tags                   | api.tags.store         | \App\Http\Controllers\Api\TagController      | store      | api_admin
PUT/PATCH | /api/tags/{project}         | api.tags.update        | \App\Http\Controllers\Api\TagController      | update     | api_admin
DELETE    | /api/tags/{project}         | api.tags.destroy       | \App\Http\Controllers\Api\TagController      | destroy    | api_admin
GET       | /api/links                  | api.links.index        | \App\Http\Controllers\Api\LinkController     | index      | -
GET       | /api/links/{link}           | api.links.show         | \App\Http\Controllers\Api\LinkController     | show       | -
POST      | /api/links                  | api.links.store        | \App\Http\Controllers\Api\LinkController     | store      | api_admin
PUT/PATCH | /api/links/{link}           | api.links.update       | \App\Http\Controllers\Api\LinkController     | update     | api_admin
DELETE    | /api/links/{link}           | api.links.destroy      | \App\Http\Controllers\Api\LinkController     | destroy    | api_admin
POST      | /api/contact/send           | api.contact.send       | \App\Http\Controllers\Api\ContactController  | send       | -

## Running the tests

```
composer test
```


## Built With

* [Laravel](https://laravel.com/) - The backend framework used
* [Vue](https://vuejs.org) - The frontend framework used
* [Vuetify](https://vuetifyjs.com) - Vue component framework used
* [Docker](https://www.docker.com/) - PHP development environment
* [Laravel Backpack](https://backpackforlaravel.com/) - Laravel admin panel

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/FaZeRs/naurislinde.com/tags). 

## Authors

* **Nauris Linde** - *Initial work* - [FaZeRs](https://github.com/FaZeRs)

See also the list of [contributors](https://github.com/FaZeRs/naurislinde.com/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
