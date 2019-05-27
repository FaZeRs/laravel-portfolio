<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserTableSeeder::class,
            CategoriesTableSeeder::class,
            TagsTableSeeder::class,
            ProjectsTableSeeder::class,
            EducationTableSeeder::class,
            ExperienceTableSeeder::class,
            SettingsTableSeeder::class,
        ]);
    }
}
