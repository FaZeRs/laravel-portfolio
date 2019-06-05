<?php

namespace App\Http\Controllers\Api;

use App\Models\Setting;
use App\Http\Controllers\Controller;
use App\Http\Resources\SettingResource;

class SettingController extends Controller
{
    public function index()
    {
        return SettingResource::collection(Setting::all()->keyBy->key);
    }

    public function show($setting)
    {
        return Setting::get($setting);
    }
}
