<?php

namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * Trait Sluggable.
 *
 * Sources:
 * @see https://github.com/martinbean/laravel-sluggable-trait/
 * @see https://gist.github.com/ericlbarnes/3b5d3c49482f2a190619699de660ee9f
 * @see https://interworks.com.mk/the-easiest-way-to-create-unique-slugs-for-blog-posts-in-laravel/
 */
trait Sluggable
{
    /**
     * Boot the sluggable trait for a model.
     *
     * @return void
     * @throws \Exception
     */
    public static function bootSluggable()
    {
        static::saving(function (Model $model) {
            if (empty($model->getSlug())) {
                $slug = self::generateUniqueSlug($model);

                $model->setSlug($slug);
            }
        });
    }

    /**
     * The name of the column to use for slugs.
     *
     * @return string
     */
    public function getSlugColumnName()
    {
        return 'slug';
    }

    /**
     * Get the string to create a slug from.
     *
     * @return string
     */
    public function getSluggableString()
    {
        if ($this->isTranslatableAttribute('title')) {
            return $this->getTranslation('title', app()->getLocale());
        }

        return $this->getAttribute('title');
    }

    /**
     * Get the current slug value.
     *
     * @return string
     */
    public function getSlug()
    {
        if ($this->isTranslatableAttribute($this->getSlugColumnName())) {
            return $this->getTranslation($this->getSlugColumnName(), app()->getLocale());
        }

        return $this->getAttribute($this->getSlugColumnName());
    }

    /**
     * Set the slug to the given value.
     *
     * @param string $value
     * @return $this
     */
    public function setSlug(string $value)
    {
        if ($this->isTranslatableAttribute($this->getSlugColumnName())) {
            $this->setTranslation($this->getSlugColumnName(), app()->getLocale(), $value);
        } else {
            $this->setAttribute($this->getSlugColumnName(), $value);
        }

        return $this;
    }

    /**
     * @param Model $model
     * @return string
     * @throws \Exception
     */
    private static function generateUniqueSlug(Model $model): string
    {
        $slug = empty($model->getSlug()) ? trim(Str::slug($model->getSluggableString())) : $model->getSlug();
        $attribute = trim($model->getSlugColumnName());

        if (empty($slug) || empty($attribute)) {
            throw new \Exception('Incorrect slug attribute or sluggable string for model! Check your "fillable" array.');
        }

        $locale = app()->getLocale();
        if ($model->isTranslatableAttribute($model->getSlugColumnName())) {
            $modelsWithRelatedSlug = $model
                ->withoutGlobalScopes()
                ->withTrashed()
                ->where("{$attribute}->{$locale}", 'LIKE', $slug.'%')
                ->get([$attribute]);
        } else {
            $modelsWithRelatedSlug = $model
                ->withoutGlobalScopes()
                ->withTrashed()
                ->where($attribute, 'LIKE', $slug.'%')
                ->get([$attribute]);
        }

        $i = 0;
        while ($modelsWithRelatedSlug->contains($attribute, $slug)) {
            $i++;
            $matches = [];
            if (preg_match('/^(.*?)-(\d+)$/', $slug, $matches)) {
                $nextNum = $matches[2] + $i;
                $slug = "{$matches[1]}-$nextNum";
            } else {
                $slug = "$slug-$i";
            }
        }

        if ($model->isTranslatableAttribute($model->getSlugColumnName())) {
            $model = $model
                ->withoutGlobalScopes()
                ->where("{$attribute}->{$locale}", $slug)
                ->first([$attribute]);
        } else {
            $model = $model
                ->withoutGlobalScopes()
                ->where($attribute, $slug)
                ->first([$attribute]);
        }

        if ($model) {
            // Still not unique...
            $slug = self::generateUniqueSlug($model);
        }

        return $slug;
    }
}
