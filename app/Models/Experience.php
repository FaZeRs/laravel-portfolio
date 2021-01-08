<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Experience extends Model implements HasMedia
{
    use HasFactory;
    use HasTranslations;
    use SoftDeletes;
    use InteractsWithMedia;

    protected $table = 'experience';

    protected $fillable = [
        'position',
        'employer',
        'website',
        'date_from',
        'date_to',
        'ongoing',
        'logo',
        'active',
    ];

    public $translatable = [
        'position',
    ];

    protected $dates = [
        'date_from',
        'date_to',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $casts = [
        'active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('logo')
            ->singleFile();
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(125)
            ->height(125)
            ->sharpen(10)
            ->performOnCollections('logo');
    }
}
