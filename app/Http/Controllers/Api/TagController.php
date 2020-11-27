<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class TagController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index(Request $request)
    {
        $query = Tag::query();
        if (! $request->user() || !$request->user()->isAdmin()) {
            $query->active();
        }
        $experience = QueryBuilder::for($query)
            ->allowedFilters([
                'title',
                'color',
                AllowedFilter::scope('active'),
            ])
            ->defaultSort('created_at')
            ->allowedSorts('title', 'color', 'active', 'created_at', 'updated_at');

        if ($request->get('page', null)) {
            $limit = (int) $request->get('limit', 10);
            if ($limit === -1) {
                $limit = $query->count();
            }
            $experience = $experience->paginate($limit)->appends($request->query());
        } else {
            $experience = $experience->get();
        }

        return TagResource::collection($experience);
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

        return response()->noContent();
    }
}
