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
}
