<?php

use Illuminate\Database\Eloquent\Model;
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
        Model::unguard();

        $this->disableForeignKeys();
        $this->truncateMultiple([
            'users',
            'categories',
            'tags',
            'projects',
            'project_tag',
            'links',
            'education',
            'experience',
            'settings',
        ]);
        $this->enableForeignKeys();

        $this->call([
            UserTableSeeder::class,
            CategoriesTableSeeder::class,
            TagsTableSeeder::class,
            ProjectsTableSeeder::class,
            EducationTableSeeder::class,
            ExperienceTableSeeder::class,
            SettingsTableSeeder::class,
        ]);

        Model::reguard();
    }
}
