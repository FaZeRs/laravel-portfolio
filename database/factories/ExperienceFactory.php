<?php

namespace Database\Factories;

use App\Models\Experience;
use Database\Factories\Traits\SoftDeleted;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExperienceFactory extends Factory
{
    use SoftDeleted;

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Experience::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $from = $this->faker->dateTimeThisDecade;

        return [
            'position' => $this->faker->jobTitle,
            'employer' => $this->faker->company,
            'website' => $this->faker->domainName,
            'from' => $from,
            'to' => $this->faker->dateTimeBetween($from, 'now'),
            'ongoing' => $this->faker->boolean(25),
            'active' => $this->faker->boolean(80),
        ];
    }
}
