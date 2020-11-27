<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except('index', 'show');
    }

    public function index(Request $request)
    {
        $query = Project::query();
        if (! $request->user() || !$request->user()->isAdmin()) {
            $query->active();
        }
        $projects = QueryBuilder::for($query)
            ->allowedIncludes('tags', 'links', 'category', 'media')
            ->allowedFilters([
                'title',
                AllowedFilter::exact('category_id'),
                AllowedFilter::exact('status'),
                AllowedFilter::scope('active'),
            ])
            ->defaultSort('created_at')
            ->allowedSorts('title', 'active', 'order', 'status', 'created_at', 'updated_at');

        if ($request->get('page', null)) {
            $limit = (int) $request->get('limit', 10);
            if ($limit === -1) {
                $limit = $query->count();
            }
            $projects = $projects->paginate($limit)->appends($request->query());
        } else {
            $projects = $projects->get();
        }

        return ProjectResource::collection($projects);
    }

    public function show(Project $project)
    {
        return new ProjectResource($project->load('category', 'tags', 'links', 'media'));
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

        return new ProjectResource($project->load('category', 'tags', 'links', 'media'));
    }

    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();
        $project->update($data);
        if (array_key_exists('tags', $data)) {
            $project->tags()->sync($data['tags']);
        }

        return new ProjectResource($project->load('category', 'tags', 'links', 'media'));
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return new ProjectResource($project->load('category', 'tags', 'links', 'media'));
    }

    public function restore(Project $project)
    {
        $project->restore();

        return new ProjectResource($project->load('category', 'tags', 'links', 'media'));
    }

    public function delete(Project $project)
    {
        $project->forceDelete();

        return response()->noContent();
    }
}
