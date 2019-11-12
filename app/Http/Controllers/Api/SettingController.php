<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SettingResource;
use App\Models\Setting;

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
