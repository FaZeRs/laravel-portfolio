<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEducationRequest;
use App\Http\Requests\UpdateEducationRequest;
use App\Http\Resources\EducationResource;
use App\Models\Education;

class EducationController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except('index', 'show');
    }

    public function index()
    {
        return EducationResource::collection(Education::all());
    }

    public function show(Education $education)
    {
        return new EducationResource($education);
    }

    public function store(StoreEducationRequest $request)
    {
        $data = $request->validated();
        $education = Education::create($data);

        return new EducationResource($education);
    }

    public function update(UpdateEducationRequest $request, Education $education)
    {
        $data = $request->validated();
        $education->update($data);

        return new EducationResource($education);
    }

    public function destroy(Education $education)
    {
        $education->delete();

        return new EducationResource($education);
    }

    public function restore(Education $education)
    {
        $education->restore();

        return new EducationResource($education);
    }

    public function delete(Education $education)
    {
        $education->forceDelete();

        return response()->json([]);
    }
}
