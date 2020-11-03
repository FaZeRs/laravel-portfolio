<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreExperienceRequest;
use App\Http\Requests\UpdateExperienceRequest;
use App\Http\Resources\ExperienceResource;
use App\Models\Experience;

class ExperienceController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except('index', 'show');
    }

    public function index()
    {
        return ExperienceResource::collection(Experience::orderBy('ongoing', 'DESC')->orderBy('from', 'DESC')->get());
    }

    public function show(Experience $experience)
    {
        return new ExperienceResource($experience);
    }

    public function store(StoreExperienceRequest $request)
    {
        $data = $request->validated();
        unset($data['logo']);
        $experience = Experience::create($data);
        if($request->has('logo')) {
            $experience->addMediaFromRequest('logo')->toMediaCollection('logo');
        }
        return new ExperienceResource($experience);
    }

    public function update(UpdateExperienceRequest $request, Experience $experience)
    {
        $data = $request->validated();
        unset($data['logo']);
        $experience->update($data);
        if($request->has('logo')) {
            $experience->addMediaFromRequest('logo')->toMediaCollection('logo');
        }

        return new ExperienceResource($experience);
    }

    public function destroy(Experience $experience)
    {
        $experience->delete();

        return new ExperienceResource($experience);
    }

    public function restore(Experience $experience)
    {
        $experience->restore();

        return new ExperienceResource($experience);
    }

    public function delete(Experience $experience)
    {
        $experience->forceDelete();

        return response()->json([]);
    }
}
