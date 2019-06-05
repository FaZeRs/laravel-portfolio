<?php

use App\Models\Tag;
use App\Models\Link;
use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Project::class, 6)->create()->each(function ($project) {
            $project->tags()->saveMany(Tag::inRandomOrder()->take(3)->get());
            $project->links()->saveMany(factory(Link::class, 2)->make([
                'project_id' => $project->id,
            ]));
        });
    }
}
