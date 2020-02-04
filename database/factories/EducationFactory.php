<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Models\Education;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/
$factory->define(Education::class, function (Faker $faker) {
    return [
        'qualification' => $faker->sentence(4),
        'organisation' => $faker->sentence(2),
        'from' => $faker->date,
        'to' => $faker->date,
        'ongoing' => $faker->boolean(25),
    ];
});

$factory->state(Education::class, 'softDeleted', function () {
    return [
        'deleted_at' => now(),
    ];
});
