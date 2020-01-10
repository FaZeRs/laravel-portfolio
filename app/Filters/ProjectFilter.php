<?php

namespace App\Filters;

class ProjectFilter extends Filter
{
    /**
     * Filter by category id.
     * Get all the projects by the given category id.
     *
     * @param $id
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function category($id)
    {
        return $this->builder->where('category_id', $id);
    }
}
