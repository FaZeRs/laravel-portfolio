<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Link extends Model
{
    use HasFactory;
    use HasTranslations;

    protected $table = 'links';

    protected $fillable = [
        'title',
        'project_id',
        'url',
        'icon',
    ];

    public $translatable = ['title'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
