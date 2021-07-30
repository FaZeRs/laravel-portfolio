<?php

namespace Database\Factories;

use App\Models\Education;
use Database\Factories\Traits\SoftDeleted;
use Illuminate\Database\Eloquent\Factories\Factory;

class EducationFactory extends Factory
{
    use SoftDeleted;

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
            'date_from' => $this->faker->date,
            'date_to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
            'active' => $this->faker->boolean(80),
        ];
    }
}
