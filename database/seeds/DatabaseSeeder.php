<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use DisableForeignKeys, TruncateTable;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->disableForeignKeys();

        $this->call([
            UserTableSeeder::class,
            CategoriesTableSeeder::class,
            TagsTableSeeder::class,
            ProjectsTableSeeder::class,
            EducationTableSeeder::class,
            ExperienceTableSeeder::class,
        ]);

        $this->enableForeignKeys();
    }
}
