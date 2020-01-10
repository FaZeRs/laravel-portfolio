<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Models\Experience;
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
$factory->define(Experience::class, function (Faker $faker) {
    return [
        'position' => $faker->jobTitle,
        'employer' => $faker->company,
        'website' => $faker->domainName,
        'from' => $faker->date,
        'to' => $faker->date,
        'ongoing' => $faker->boolean(25),
        'logo' => 'experience/'.$faker->image(storage_path('app/public/experience'), 640, 480, 'business', false),
    ];
});
