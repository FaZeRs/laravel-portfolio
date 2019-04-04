<?php

namespace App\Http\Controllers\Api;

use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Resources\TagResource;
use App\Http\Controllers\Controller;

class TagController extends Controller
{
    public function __construct()
    {
        $this->middleware('api_admin')->except('index', 'show');
    }

    public function index()
    {
        return TagResource::collection(Tag::all());
    }

    public function show(Tag $tag)
    {
        return new TagResource($tag);
    }

    public function store(Request $request)
    {
        $tag = Tag::create($request->only('title', 'color'));

        return new TagResource($tag);
    }

    public function update(Tag $tag, Request $request)
    {
        $tag->update($request->only('title', 'color'));

        return new TagResource($tag);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        return response()->json([], 204);
    }
}
