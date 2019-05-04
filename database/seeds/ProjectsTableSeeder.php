<?php

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
        factory(App\Models\Project::class, 6)->create()->each(function ($project) {
            $project->tags()->saveMany(App\Models\Tag::inRandomOrder()->take(3)->get());
            $project->links()->saveMany(factory(App\Models\Link::class, 2)->make([
                'project_id' => $project->id,
            ]));
        });
    }
}
