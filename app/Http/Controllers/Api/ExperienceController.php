<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExperienceResource;
use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function __construct()
    {
        $this->middleware('api_admin')->except('index', 'show');
    }

    public function index()
    {
        return ExperienceResource::collection(Experience::orderBy('ongoing', 'DESC')->orderBy('from', 'DESC')->get());
    }

    public function show(Experience $experience)
    {
        return new ExperienceResource($experience);
    }

    public function store(Request $request)
    {
        $experience = Experience::create($request->only('position', 'employer', 'website', 'from', 'to', 'ongoing'));

        return new ExperienceResource($experience);
    }

    public function update(Experience $experience, Request $request)
    {
        $experience->update($request->only('position', 'employer', 'website', 'from', 'to', 'ongoing'));

        return new ExperienceResource($experience);
    }

    public function destroy(Experience $experience)
    {
        $experience->delete();

        return response()->json([], 204);
    }
}
