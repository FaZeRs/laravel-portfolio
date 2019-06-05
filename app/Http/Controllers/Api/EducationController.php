<?php

namespace App\Http\Controllers\Api;

use App\Models\Education;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\EducationResource;

class EducationController extends Controller
{
    public function __construct()
    {
        $this->middleware('api_admin')->except('index', 'show');
    }

    public function index()
    {
        return EducationResource::collection(Education::all());
    }

    public function show(Education $education)
    {
        return new EducationResource($education);
    }

    public function store(Request $request)
    {
        $education = Education::create($request->only('position', 'employer', 'website', 'from', 'to', 'ongoing'));

        return new EducationResource($education);
    }

    public function update(Education $education, Request $request)
    {
        $education->update($request->only('position', 'employer', 'website', 'from', 'to', 'ongoing'));

        return new EducationResource($education);
    }

    public function destroy(Education $education)
    {
        $education->delete();

        return response()->json([], 204);
    }
}
