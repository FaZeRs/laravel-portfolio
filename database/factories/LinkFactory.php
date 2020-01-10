<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Models\Link;
use App\Models\Project;
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
$factory->define(Link::class, function (Faker $faker) {
    return [
        'title'      => $faker->sentence,
        'project_id' => function () {
            return factory(Project::class)->create()->id;
        },
        'url'        => $faker->url,
        'icon'       => $faker->randomElement(['open_in_browser', 'mdi-github-circle', 'mdi-gitlab', 'mdi-bitbucket']),
    ];
});
