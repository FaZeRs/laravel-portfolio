<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLinkRequest;
use App\Http\Requests\UpdateLinkRequest;
use App\Http\Resources\LinkResource;
use App\Models\Link;

class LinkController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index()
    {
        return LinkResource::collection(Link::all());
    }

    public function show(Link $link)
    {
        return new LinkResource($link);
    }

    public function store(StoreLinkRequest $request)
    {
        $data = $request->validated();
        $link = Link::create($data);

        return new LinkResource($link);
    }

    public function update(UpdateLinkRequest $request, Link $link)
    {
        $data = $request->validated();
        $link->update($data);

        return new LinkResource($link);
    }

    public function destroy(Link $link)
    {
        $link->delete();

        return response()->noContent();
    }
}
