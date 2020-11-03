<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except('index', 'show');
    }

    public function index()
    {
        $projects = QueryBuilder::for(Project::class)
            ->allowedIncludes('tags', 'links')
            ->allowedFilters([
                AllowedFilter::exact('category_id'),
            ])
            ->get();

        return ProjectResource::collection($projects);
    }

    public function show(Project $project)
    {
        return new ProjectResource($project);
    }

    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();
        $project = Project::create($data);

        if ($request->has('tags')) {
            $project->tags()->sync($request->get('tags'));
        }

        if ($request->has('photos')) {
            $photos = $request['photos'];
            $photo_keys = array_map(function ($k) {
                return 'photos.'.$k;
            }, array_keys($photos));
            $project->addMultipleMediaFromRequest($photo_keys)->each(function ($fileAdder) {
                $fileAdder->toMediaCollection('photos');
            });
        }

        return new ProjectResource($project);
    }

    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();
        $project->update($data);

        if ($request->has('tags')) {
            $project->tags()->sync($request->get('tags'));
        }

        return new ProjectResource($project);
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return new ProjectResource($project);
    }

    public function restore(Project $project)
    {
        $project->restore();

        return new ProjectResource($project);
    }

    public function delete(Project $project)
    {
        $project->forceDelete();
    }
}
