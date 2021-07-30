<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;
use Database\Seeders\Traits\TruncateTable;

class TagsTableSeeder extends Seeder
{
    use TruncateTable;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncate('tags');
        Tag::factory()->count(10)->create();
    }
}
