<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEducationRequest;
use App\Http\Requests\UpdateEducationRequest;
use App\Http\Resources\EducationResource;
use App\Models\Education;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class EducationController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except('index', 'show');
    }

    public function index(Request $request)
    {
        $query = Education::query();
        if (! $request->user() || ! $request->user()->isAdmin()) {
            $query->active();
        }
        $education = QueryBuilder::for($query)
            ->allowedFilters([
                AllowedFilter::scope('active'),
            ])
            ->defaultSort('ongoing', 'date_from')
            ->allowedSorts('qualification', 'organisation', 'date_from', 'date_to', 'ongoing', 'active', 'created_at', 'updated_at');

        if ($request->get('page', null)) {
            $limit = (int) $request->get('limit', 10);
            if ($limit === -1) {
                $limit = $query->count();
            }
            $education = $education->paginate($limit)->appends($request->query());
        } else {
            $education = $education->get();
        }

        return EducationResource::collection($education);
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
