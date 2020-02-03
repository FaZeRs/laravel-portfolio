<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Spatie\Translatable\HasTranslations;

class Setting extends Model
{
    use HasTranslations;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'settings';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['value'];

    /**
     * The attributes that are translatable.
     *
     * @var array
     */
    public $translatable = [
        'value',
    ];

    /**
     * Model Boot function
     * Need it to delete image file from disk if the field type == image.
     */
    public static function boot()
    {
        parent::boot();
        static::deleting(function ($obj) {
            $type = $obj->field;
            if ($type == 'image') {
                if (! Storage::disk('public')->delete($obj->value)) {
                    //Alert::error(trans('backpack::settings.delete_image_file_not_message'))->flash();
                }
            }
        });
    }

    /**
     * Grab a setting value from the database.
     *
     * @param string $key The setting key, as defined in the key db column
     *
     * @return string|void The setting value.
     */
    public static function get($key)
    {
        $setting = new self();
        $entry = $setting->where('key', $key)->first();

        if (! $entry) {
            return;
        }

        return $entry->value;
    }

    public function getValueAttribute($value)
    {
        $field = json_decode($this->field, true);
        $type = $field['type'] ?? 'default';

        switch ($type) {
            case 'image':
                return Storage::url($value);
            default:
                return $value;
        }
    }

    public function setValueAttribute($value)
    {
        $field = json_decode($this->field, true);
        $attribute_name = 'value';
        $disk = 'public';
        $destination_path = 'settings';
        $type = $field['type'] ?? 'default';

        switch ($type) {
            case 'image':
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
                            if (! is_null($this->attributes[$attribute_name])) {
                                Storage::disk($disk)->delete($this->attributes[$attribute_name]);
                            }
                            Storage::disk($disk)->put($destination_path.'/'.$filename, $image->stream());
                            $this->attributes[$attribute_name] = $destination_path.'/'.$filename;
                        } catch (\InvalidArgumentException $argumentException) {
                            //Alert::error($argumentException->getMessage())->flash();
                            $this->attributes[$attribute_name] = null;
                        }
                    }
                }
                break;
            default:
                $this->attributes[$attribute_name] = $value;
                break;
        }
    }
}
