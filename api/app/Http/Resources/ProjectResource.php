<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request): array
    {
        $photos = [];
        if ($this->resource->relationLoaded('media')) {
            foreach ($this->getMedia('photos') as $key => $media) {
                $photos[$key]['src'] = $media->getUrl();
                $photos[$key]['thumb'] = $media->getUrl('thumb');
            }
        }

        return [
            'id' => $this->id,
            'title' => $this->title,
            'category_id' => $this->category_id,
            'category' => new CategoryResource($this->whenLoaded('category')),
            'description' => $this->description,
            'order' => $this->order,
            'status' => $this->status,
            'active' => $this->active,
            'images' => $photos,
            'tags' => TagResource::collection($this->whenLoaded('tags')),
            'links' => LinkResource::collection($this->whenLoaded('links')),
            'created_at' => $this->created_at->toDateTimeString(),
            'updated_at' => $this->updated_at->toDateTimeString(),
        ];
    }
}
