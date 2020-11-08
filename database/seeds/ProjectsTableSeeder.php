<?php

use App\Models\Link;
use App\Models\Project;
use App\Models\Tag;
use Illuminate\Database\Seeder;

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
        $this->truncateMultiple(['projects', 'links']);
        $faker = Faker\Factory::create();
        Project::factory()->count(20)->create()->each(function ($project) use ($faker) {
            $project->tags()->saveMany(Tag::inRandomOrder()->take(3)->get());
            $project->links()->saveMany(Link::factory()->count(2)->make([
                'project_id' => $project->id,
            ]));

            $project->addMediaFromUrl($faker->imageUrl(640, 480))->toMediaCollection('photos');
        });
    }
}
