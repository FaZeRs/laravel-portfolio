<?php

namespace Database\Factories\Traits;

trait SoftDeleted
{
    public function softDeleted()
    {
        return $this->state(function (array $attributes) {
            return [
                'deleted_at' => now(),
            ];
        });
    }
}
