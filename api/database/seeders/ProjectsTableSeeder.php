<?php

namespace Database\Seeders;

use App\Models\Link;
use App\Models\Project;
use App\Models\Tag;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Database\Seeders\Traits\TruncateTable;

class ProjectsTableSeeder extends Seeder
{
    use TruncateTable;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncateMultiple(['projects', 'links', 'project_tag']);
        $faker = Factory::create();
        Project::factory()->count(20)->create()->each(function ($project) use ($faker) {
            $project->tags()->saveMany(Tag::inRandomOrder()->take(3)->get());
            $project->links()->saveMany(Link::factory()->count(2)->make([
                'project_id' => $project->id,
            ]));

            $project->addMediaFromUrl($faker->imageUrl(640, 480))->toMediaCollection('photos');
        });
    }
}
