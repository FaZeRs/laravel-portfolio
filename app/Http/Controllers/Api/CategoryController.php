<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except('index', 'show');
    }

    public function index()
    {
        $categories = QueryBuilder::for(Category::class)
            ->allowedIncludes('projects', 'projects.tags', 'projects.links')
            ->get();
        return CategoryResource::collection($categories);
    }

    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    public function store(Request $request)
    {
        $category = Category::create($request->only('title'));

        return new CategoryResource($category);
    }

    public function update(Category $category, Request $request)
    {
        $category->update($request->only('title'));

        return new CategoryResource($category);
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return response()->json([], 204);
    }
}
