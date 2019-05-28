<?php

namespace App\Models;

use Illuminate\Support\Str;
use Backpack\CRUD\CrudTrait;
use Prologue\Alerts\Facades\Alert;
use Intervention\Image\Facades\Image;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Backpack\CRUD\ModelTraits\SpatieTranslatable\HasTranslations;

class Experience extends Model
{
    use CrudTrait;
    use HasTranslations;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'experience';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'position',
        'employer',
        'website',
        'from',
        'to',
        'ongoing',
        'logo',
    ];

    /**
     * The attributes that are translatable.
     *
     * @var array
     */
    public $translatable = [
        'position',
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

    public function setLogoAttribute($value)
    {
        $attribute_name = 'logo';
        $disk = 'public';
        $destination_path = 'experience';

        if (is_null($value)) {
            if (Storage::disk($disk)->delete($this->{$attribute_name})) {
                $this->attributes[$attribute_name] = null;
            }
        }

        if (Str::startsWith($value, 'data:image')) {
            preg_match("/^data:image\/(.*);base64/i", $value, $match);
            $extension = $match[1];
            $image = Image::make($value);
            if (! is_null($image)) {
                $filename = md5($value.time()).'.'.$extension;
                try {
                    Storage::disk($disk)->put($destination_path.'/'.$filename, $image->stream());
                    $this->attributes[$attribute_name] = $destination_path.'/'.$filename;
                } catch (\InvalidArgumentException $argumentException) {
                    Alert::error($argumentException->getMessage())->flash();
                    $this->attributes[$attribute_name] = null;
                }
            }
        } else {
            $this->attributes[$attribute_name] = $value;
        }
    }
}
