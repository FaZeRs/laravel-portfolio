<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Link extends Model
{
    use HasTranslations;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'links';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'project_id',
        'url',
        'order'
    ];

    /**
     * The attributes that are translatable.
     *
     * @var array
     */
    public $translatable = ['title'];

    /**
     * A link belongs to a single project.
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}