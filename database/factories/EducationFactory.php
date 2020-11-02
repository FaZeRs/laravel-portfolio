<?php

namespace Database\Factories;

use App\Models\Education;
use Illuminate\Database\Eloquent\Factories\Factory;

class EducationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Education::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'qualification' => $this->faker->sentence(4),
            'organisation' => $this->faker->sentence(2),
            'from' => $this->faker->date,
            'to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];
    }
}
