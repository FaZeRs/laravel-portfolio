# The source code of [naurislinde.com](https://naurislinde.com)

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

Lumen project dependencies are managed through the [PHP Composer tool](https://getcomposer.org/). The first step is to install the depencencies by navigating into your project in terminal and typing this command:
```
composer install
```

This repository ships with a .env.example file in the root of the project. You must rename this file to just .env

The first thing we are going to so is set the key that Lumen will use when doing encryption.
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
php artisan migrate
```

In order to install the Javascript packages for frontend development, you will need the [Node Package Manager](https://www.npmjs.com/), and optionally the [Yarn Package Manager](https://yarnpkg.com/lang/en/) by Facebook (Recommended)

If you only have NPM installed you have to run this command from the root of the project:
```
npm install
```
If you have Yarn installed, run this instead from the root of the project:
```
yarn
```

Compile assets:
```
# NPM
npm run dev

# Watch to update automatically while developing
npm run watch

# Yarn
yarn dev

# Watch to update automatically while developing
yarn watch
```

## Running the tests

```
composer test
```


## Built With

* [Lumen](https://lumen.laravel.com) - The backend framework used
* [Vue](https://vuejs.org) - The frontend framework used
* [Vuetify](https://vuetifyjs.com) - Vue component framework used

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Nauris Linde** - *Initial work* - [FaZeRs](https://github.com/FaZeRs)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
