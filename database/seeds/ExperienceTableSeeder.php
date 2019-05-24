<?php

use App\Models\Experience;
use Illuminate\Database\Seeder;

class ExperienceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Experience::class, 4)->create();
    }
}
