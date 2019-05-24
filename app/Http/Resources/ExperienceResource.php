<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'from'       => $this->from,
            'to'         => $this->to,
            'ongoing'    => $this->ongoing,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
