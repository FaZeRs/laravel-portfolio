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
        return [
            'id'         => $this->id,
            'position'   => $this->position,
            'employer'   => $this->employer,
            'website'    => $this->website,
            'from'       => Carbon::parse($this->from)->format('M Y'),
            'to'         => Carbon::parse($this->to)->format('M Y'),
            'ongoing'    => $this->ongoing,
            'logo'       => $this->logo ? Storage::url($this->logo) : null,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
