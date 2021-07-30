<?php

namespace Database\Seeders;

use App\Models\Experience;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Database\Seeders\Traits\TruncateTable;

class ExperienceTableSeeder extends Seeder
{
    use TruncateTable;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncate('experience');
        $faker = Factory::create();
        Experience::factory()->count(4)->create()->each(function ($job) use ($faker) {
            $job->addMediaFromUrl($faker->imageUrl())->toMediaCollection('logo');
        });
    }
}
