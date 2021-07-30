<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Database\Seeders\Traits\TruncateTable;

class CategoriesTableSeeder extends Seeder
{
    use TruncateTable;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncate('categories');

        Category::factory()->count(3)->create();
    }
}
