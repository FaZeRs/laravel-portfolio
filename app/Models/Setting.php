<?php

namespace App\Models;

use Illuminate\Support\Str;
use Prologue\Alerts\Facades\Alert;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Backpack\Settings\app\Models\Setting as SettingModel;
use Backpack\CRUD\ModelTraits\SpatieTranslatable\HasTranslations;

class Setting extends SettingModel
{
    use HasTranslations;

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
            // 1. get field type
            $type = $obj->field;
            // 2. check if it's image
            if ($type == 'image') {
                // 3. delete from disk
                //if (!Storage::disk(config('backpack.settings.images_disk_name'))->delete($obj->value)) {
                    // filed to delete image file
//                    Alert::error(trans('backpack::settings.delete_image_file_not_message'))->flash();
                //}
            }
        });
    }

    public function setValueAttribute($value)
    {
        $field = json_decode($this->field, true);
        $attribute_name = 'value';
        $disk = 'public';
        $destination_path = 'settings';
        $type = $field['type'];

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
                            Storage::disk($disk)->put($destination_path.'/'.$filename, $image->stream());
                            $this->attributes[$attribute_name] = $destination_path.'/'.$filename;
                        } catch (\InvalidArgumentException $argumentException) {
                            Alert::error($argumentException->getMessage())->flash();
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
