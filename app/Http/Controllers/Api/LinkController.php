<?php

namespace App\Http\Controllers\Api;

use App\Models\Link;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\LinkResource;

class LinkController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except('index', 'show');
    }

    public function index()
    {
        return LinkResource::collection(Link::paginate(25));
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

        return response()->json(null, 204);
    }
}
