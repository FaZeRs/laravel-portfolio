<?php

use App\Settings;

function settings($key = null, $default = null)
{
    if ($key === null) {
        return app(Settings::class);
    }

    return app(Settings::class)->get($key, $default);
}
