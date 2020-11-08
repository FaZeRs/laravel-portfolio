<?php

use App\Models\Experience;
use Illuminate\Database\Seeder;

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
        $faker = Faker\Factory::create();
        Experience::factory()->count(4)->create()->each(function ($job) use ($faker) {
            $job->addMediaFromUrl($faker->imageUrl())->toMediaCollection('logo');
        });
    }
}
