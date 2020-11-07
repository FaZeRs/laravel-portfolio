<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class SettingController extends Controller
{
    public function index()
    {
        $settings = settings()->all();

        return response()->json($settings);
    }

    public function show(string $name)
    {
        $setting = settings($name);

        return response()->json($setting);
    }
}
