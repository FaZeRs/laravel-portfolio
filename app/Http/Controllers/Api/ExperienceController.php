<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreExperienceRequest;
use App\Http\Requests\UpdateExperienceRequest;
use App\Http\Requests\UploadExperienceLogoRequest;
use App\Http\Resources\ExperienceResource;
use App\Models\Experience;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ExperienceController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except('index', 'show');
    }

    public function index(Request $request)
    {
        $query = Experience::query();
        if (! $request->user() || !$request->user()->isAdmin()) {
            $query->active();
        }
        $experience = QueryBuilder::for($query)
            ->allowedIncludes('media')
            ->allowedFilters([
                AllowedFilter::scope('active'),
            ])
            ->defaultSort('ongoing', 'from')
            ->allowedSorts('from', 'to', 'ongoing', 'active', 'created_at', 'updated_at');

        if ($request->get('page', null)) {
            $limit = (int) $request->get('limit', 10);
            if ($limit === -1) {
                $limit = $query->count();
            }
            $experience = $experience->paginate($limit)->appends($request->query());
        } else {
            $experience = $experience->get();
        }

        return ExperienceResource::collection($experience);
    }

    public function show(Experience $experience)
    {
        return new ExperienceResource($experience->load('media'));
    }

    public function store(StoreExperienceRequest $request)
    {
        $data = $request->validated();
        $experience = Experience::create($data);

        return new ExperienceResource($experience->load('media'));
    }

    public function update(UpdateExperienceRequest $request, Experience $experience)
    {
        $data = $request->validated();
        $experience->update($data);

        return new ExperienceResource($experience->load('media'));
    }

    public function uploadLogo(UploadExperienceLogoRequest $request, Experience $experience)
    {
        $experience->addMediaFromRequest('image')->toMediaCollection('logo');

        return new ExperienceResource($experience->load('media'));
    }

    public function destroy(Experience $experience)
    {
        $experience->delete();

        return new ExperienceResource($experience->load('media'));
    }

    public function restore(Experience $experience)
    {
        $experience->restore();

        return new ExperienceResource($experience->load('media'));
    }

    public function delete(Experience $experience)
    {
        $experience->forceDelete();

        return response()->noContent();
    }
}
