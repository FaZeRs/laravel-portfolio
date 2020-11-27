<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except('index', 'show');
    }

    // todo : make data validation
    public function index(Request $request)
    {
        $query = Category::query();
        if (! $request->user() || ! $request->user()->isAdmin()) {
            $query->active();
        }
        $categories = QueryBuilder::for($query)
            ->allowedFilters([
                AllowedFilter::scope('active'),
            ])
            ->allowedIncludes('projects', 'projects.tags', 'projects.links', 'projects.media')
            ->defaultSort('created_at')
            ->allowedSorts('title', 'active', 'created_at', 'updated_at');

        if ($request->get('page', null)) {
            $limit = (int) $request->get('limit', 10);
            if ($limit === -1) {
                $limit = $query->count();
            }
            $categories = $categories->paginate($limit)->appends($request->query());
        } else {
            $categories = $categories->get();
        }

        return CategoryResource::collection($categories);
    }

    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    public function store(StoreCategoryRequest $request)
    {
        $data = $request->validated();
        $category = Category::create($data);

        return new CategoryResource($category);
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $data = $request->validated();
        $category->update($data);

        return new CategoryResource($category);
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return new CategoryResource($category);
    }

    public function restore(Category $category)
    {
        $category->restore();

        return new CategoryResource($category);
    }

    public function delete(Category $category)
    {
        $category->forceDelete();

        return response()->json([]);
    }
}
