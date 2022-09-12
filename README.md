# The source code of [naurislinde.dev](https://naurislinde.com)

[![Build Status](https://img.shields.io/github/workflow/status/FaZeRs/naurislinde.com/Backend-CI/master.svg?style=flat-square&label=Backend-CI%20)](https://travis-ci.org/FaZeRs/naurislinde.com)
[![StyleCI](https://styleci.io/repos/130983433/shield)](https://styleci.io/repos/130983433)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

This repository contains source code of my personal portfolio at [naurislinde.com](https://naurislinde.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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
docker container exec -it php-fpm sh
```

Run this command inside terminal to create .env file, install dependencies, generate key, run migrations and tests. 
```
composer start
```

The application will be available on http://localhost:3000, the mailhog on http://localhost:8025

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
php artisan jwt:secret
```

In order to install the Javascript packages for frontend development, you will need the [Node Package Manager](https://www.npmjs.com/), and optionally the [Yarn Package Manager](https://yarnpkg.com/lang/en/) by Facebook (Recommended)

If you only have NPM installed you have to run this command from the root of the project:
```
npm install
```

Compile assets:
```
npm run build
```

## REST API

We use [Laravel Passport](https://laravel.com/docs/master/passport). It is an OAuth2 server and API authentication package.

## Running the tests

```
composer test
```


## Built With

* [Laravel](https://laravel.com/) - The backend framework used
* [Vue](https://vuejs.org) - The frontend framework used
* [Vuetify](https://vuetifyjs.com) - Vue component framework used
* [Docker](https://www.docker.com/) - PHP development environment
* [Nuxt](https://nuxtjs.org/) - The Intuitive Vue Framework

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/FaZeRs/naurislinde.com/tags). 

## Authors

* **Nauris Linde** - *Initial work* - [FaZeRs](https://github.com/FaZeRs)

See also the list of [contributors](https://github.com/FaZeRs/naurislinde.com/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
