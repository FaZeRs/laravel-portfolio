<?php

namespace App\Http\Controllers\Api;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except('index', 'show');
    }

    public function index()
    {
        return ProjectResource::collection(Project::paginate(25));
    }

    public function show(Project $project)
    {
        return new ProjectResource($project);
    }

    public function store(Request $request)
    {
        $project = Project::create($request->only('title', 'category_id', 'description', 'visible', 'order', 'status'));

        if ($request->has('tags')) {
            $project->tags()->sync($request->get('tags'));
        }

        return new ProjectResource($project);
    }

    public function update($id, Request $request)
    {
        $project = Project::findOrFail($id);
        $project->update($request->only('title', 'category_id', 'description', 'visible', 'order', 'status'));

        if ($request->has('tags')) {
            $project->tags()->sync($request->get('tags'));
        }

        return new ProjectResource($project);
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return response()->json(null, 204);
    }
}
