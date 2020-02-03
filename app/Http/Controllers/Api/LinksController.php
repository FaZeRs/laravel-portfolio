<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LinkResource;
use App\Models\Link;
use Illuminate\Http\Request;

class LinksController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('index', 'show');
        $this->authorizeResource(Link::class, 'link');
    }

    public function index()
    {
        return LinkResource::collection(Link::all());
    }

    public function show(Link $link)
    {
        return new LinkResource($link);
    }

    public function store(Request $request)
    {
        $link = Link::create($request->only('title', 'project_id', 'url', 'order'));

        return new LinkResource($link);
    }

    public function update(Link $link, Request $request)
    {
        $link->update($request->only('title', 'project_id', 'url', 'order'));

        return new LinkResource($link);
    }

    public function destroy(Link $link)
    {
        $link->delete();

        return response()->json([]);
    }
}
