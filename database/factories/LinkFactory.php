<?php

namespace Database\Factories;

use App\Models\Link;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

class LinkFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Link::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'      => $this->faker->sentence,
            'project_id' => function () {
                return Project::factory()->create()->id;
            },
            'url'        => $this->faker->url,
            'icon'       => $this->faker->randomElement(['open_in_browser', 'mdi-github-circle', 'mdi-gitlab', 'mdi-bitbucket']),
        ];
    }
}
