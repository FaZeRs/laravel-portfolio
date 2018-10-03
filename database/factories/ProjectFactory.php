<?php

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
$factory->define(App\Models\Project::class, function (Faker $faker) {
    return [
        'title'       => $faker->sentence,
        'category_id' => $faker->randomDigit,
        'description' => $faker->paragraph,
        'visible'     => $faker->boolean($chanceOfGettingTrue = 80),
        'order'       => $faker->randomDigit,
        'status'      => $faker->randomElement([
            'unknown',
            'open',
            'scheduled',
            'in_development',
            'completed',
            'cancelled',
        ]),
    ];
});
