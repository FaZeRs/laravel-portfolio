<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Project;
use Database\Factories\Traits\SoftDeleted;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    use SoftDeleted;

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
            'order'       => $this->faker->randomDigit,
            'status'      => $this->faker->numberBetween(0, 5),
            'active' => $this->faker->boolean(80),
        ];
    }
}
