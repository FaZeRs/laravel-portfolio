<?php

namespace App\Models;

use App\Filters\Filterable;
use Illuminate\Support\Str;
use Backpack\CRUD\CrudTrait;
use Intervention\Image\Facades\Image;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Backpack\CRUD\ModelTraits\SpatieTranslatable\HasTranslations;

class Project extends Model
{
    use CrudTrait;
    use HasTranslations;
    use Filterable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'projects';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'category_id',
        'description',
        'image',
        'links',
        'status',
        'visible',
        'order',
    ];

    /**
     * The attributes that are translatable.
     *
     * @var array
     */
    public $translatable = [
        'title',
        'slug',
        'description',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'visible' => 'boolean',
    ];

    /**
     * Fields that are dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        static::creating(function (Project $project) {
            $project->slug = Str::slug($project->title);
        });
        static::updating(function (Project $project) {
            $project->slug = Str::slug($project->title);
        });
        static::deleting(function ($obj) {
            Storage::disk('public')->delete($obj->image);
        });
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

//    public function setImageAttribute($value)
//    {
//        // TODO : not working with database seeder
//        $attribute_name = 'image';
//        $disk = 'public';
//        $destination_path = 'projects';
//
//        // if the image was erased
//        if ($value == null) {
//            // delete the image from disk
//            Storage::disk($disk)->delete($this->{$attribute_name});
//
//            // set null in the database column
//            $this->attributes[$attribute_name] = null;
//        }
//
//        // if a base64 was sent, store it in the db
//        if (Str::startsWith($value, 'data:image')) {
//            // 0. Make the image
//            $image = Image::make($value)->encode('png', 90);
//            // 1. Generate a filename.
//            $filename = md5($value.time()).'.png';
//            // 2. Store the image on disk.
//            Storage::disk($disk)->put($destination_path.'/'.$filename, $image->stream());
//            // 3. Save the path to the database
//            $this->attributes[$attribute_name] = $destination_path.'/'.$filename;
//        }
//    }

    public function setLinksAttribute($value)
    {
        $this->links()->delete();
        $links = [];
        if(json_decode($value)) {
            foreach (json_decode($value) as $link) {
                $links[] = new Link([
                    'title' => $link->title,
                    'url' => $link->url,
                    'icon' => $link->icon,
                ]);
            }
        }
        if ($links) {
            $this->links()->saveMany($links);
        }
    }
}
