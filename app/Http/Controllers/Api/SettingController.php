<?php

namespace App\Http\Controllers\Api;

use Backpack\Settings\app\Models\Setting as Setting;
use App\Http\Resources\SettingResource;
use App\Http\Controllers\Controller;

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
