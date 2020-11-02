<?php

namespace Database\Factories;

use App\Models\Experience;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExperienceFactory extends Factory
{
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
        return [
            'position' => $this->faker->jobTitle,
            'employer' => $this->faker->company,
            'website' => $this->faker->domainName,
            'from' => $this->faker->date,
            'to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
            'logo' => 'experience/'.$this->faker->image(storage_path('app/public/experience'), 640, 480, 'business', false),
        ];
    }
}
