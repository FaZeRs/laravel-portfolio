<?php

namespace App\Http\Controllers\Api;

use App\Filters\ProjectFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;

class ProjectsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('index', 'show');
        $this->authorizeResource(Project::class, 'project');
    }

    public function index(ProjectFilter $filter)
    {
        return ProjectResource::collection(Project::with('tags', 'links')->filter($filter)->get());
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
