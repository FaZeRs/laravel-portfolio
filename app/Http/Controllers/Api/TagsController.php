<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;
use App\Http\Resources\TagResource;
use App\Models\Tag;

class TagsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('index', 'show');
        $this->authorizeResource(Tag::class, 'tag');
    }

    public function index()
    {
        return TagResource::collection(Tag::all());
    }

    public function show(Tag $tag)
    {
        return new TagResource($tag);
    }

    public function store(StoreTagRequest $request)
    {
        $data = $request->validated();
        $tag = Tag::create($data);

        return new TagResource($tag);
    }

    public function update(UpdateTagRequest $request, Tag $tag)
    {
        $data = $request->validated();
        $tag->update($data);

        return new TagResource($tag);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        return new TagResource($tag);
    }

    public function restore(Tag $tag)
    {
        $tag->restore();

        return new TagResource($tag);
    }

    public function delete(Tag $tag)
    {
        $tag->forceDelete();
    }
}
