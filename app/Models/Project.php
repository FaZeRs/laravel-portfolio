<?php

namespace App\Models;

use App\Models\Traits\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Project extends Model implements HasMedia
{
    use HasFactory;
    use HasTranslations;
    use SoftDeletes;
    use InteractsWithMedia;

    const STATUS_UNKNOWN = 0;
    const STATUS_OPEN = 1;
    const STATUS_SCHEDULED = 2;
    const STATUS_IN_DEVELOPMENT = 3;
    const STATUS_CANCELED = 4;
    const STATUS_COMPLETED = 5;

    protected $table = 'projects';

    protected $fillable = [
        'title',
        'category_id',
        'description',
        'status',
        'order',
        'active',
    ];

    public $translatable = [
        'title',
        'description',
    ];

    protected $casts = [
        'status' => 'integer',
        'order' => 'integer',
        'active' => 'boolean',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function links()
    {
        return $this->hasMany(Link::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function hasTag(Tag $tag)
    {
        if ($this->relationLoaded('tags')) {
            return $this->tags->contains($tag);
        }

        return $this->tags()
            ->wherePivot('tag_id', $tag->id)
            ->exists();
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('photos');
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(381)
            ->height(200)
            ->sharpen(10)
            ->performOnCollections('photos');
    }
}
