<?php

namespace Database\Factories;

use App\Models\Category;
use Database\Factories\Traits\SoftDeleted;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    use SoftDeleted;

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(2),
            'active' => $this->faker->boolean(80),
        ];
    }
}
