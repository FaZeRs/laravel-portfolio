<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ExperienceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        $logo = [];
        if ($this->resource->relationLoaded('media')) {
            $logo['src'] = $this->getFirstMediaUrl('logo');
            $logo['thumb'] = $this->getFirstMediaUrl('logo', 'thumb');
        }

        return [
            'id'         => $this->id,
            'position'   => $this->position,
            'employer'   => $this->employer,
            'website'    => $this->website,
            'from'       => $this->from->toDateString(),
            'to'         => $this->to->toDateString(),
            'ongoing'    => $this->ongoing,
            'logo'       => $logo,
            'active' => $this->active,
            'created_at' => $this->created_at->toDateTimeString(),
            'updated_at' => $this->updated_at->toDateTimeString(),
        ];
    }
}
