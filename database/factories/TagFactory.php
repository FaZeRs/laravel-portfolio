<?php

namespace Database\Factories;

use App\Models\Tag;
use Database\Factories\Traits\SoftDeleted;
use Illuminate\Database\Eloquent\Factories\Factory;

class TagFactory extends Factory
{
    use SoftDeleted;

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tag::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word,
            'color' => $this->faker->colorName,
        ];
    }
}
