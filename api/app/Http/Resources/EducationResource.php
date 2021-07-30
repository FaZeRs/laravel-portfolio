<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class EducationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id'            => $this->id,
            'qualification' => $this->qualification,
            'organisation'  => $this->organisation,
            'date_from'     => optional($this->date_from)->toDateString(),
            'date_to'       => optional($this->date_to)->toDateString(),
            'ongoing'       => $this->ongoing,
            'active'        => $this->active,
            'created_at'    => $this->created_at->toDateTimeString(),
            'updated_at'    => $this->updated_at->toDateTimeString(),
        ];
    }
}
