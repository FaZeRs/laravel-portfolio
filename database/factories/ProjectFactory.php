<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $category = Category::inRandomOrder()->first();
        return [
            'title'       => $this->faker->sentence,
            'category_id' => function () use ($category) {
                return optional($category)->id ?? Category::factory()->create()->id;
            },
            'description' => $this->faker->paragraph,
            'image'       => 'projects/'.$this->faker->image(storage_path('app/public/projects'), 640, 480, null, false),
            'visible'     => $this->faker->boolean($chanceOfGettingTrue = 80),
            'order'       => $this->faker->randomDigit,
            'status'      => $this->faker->randomElement([
                'unknown',
                'open',
                'scheduled',
                'in_development',
                'completed',
                'cancelled',
            ]),
        ];
    }
}
