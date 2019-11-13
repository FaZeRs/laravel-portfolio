<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use CrudTrait;
    use HasTranslations;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'education';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'qualification',
        'organisation',
        'from',
        'to',
        'ongoing',
    ];

    /**
     * The attributes that are translatable.
     *
     * @var array
     */
    public $translatable = [
        'qualification',
        'organisation',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'from',
        'to',
        'created_at',
        'updated_at',
    ];
}
