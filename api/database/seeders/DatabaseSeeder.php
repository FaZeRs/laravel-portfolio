<?php

namespace Database\Seeders;

use Database\Seeders\Traits\DisableForeignKeys;
use Database\Seeders\Traits\TruncateTable;
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
        $this->truncate('media');
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
