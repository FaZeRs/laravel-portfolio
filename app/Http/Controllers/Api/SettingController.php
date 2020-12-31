<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateSettingsRequest;
use App\Settings;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->only('update');
    }

    public function index()
    {
        $settings = settings()->all();
        if(!empty($settings['photo'])) {
            $settings['photo'] = Storage::url($settings['photo']);
        }

        return response()->json($settings);
    }

    public function show(string $name)
    {
        if($name === "photo") {
            return response()->json(Storage::url(settings($name)));
        }
        return response()->json(settings($name));
    }

    public function update(UpdateSettingsRequest $request)
    {
        $data = $request->validated();
        foreach($data as $key => $setting) {
            settings()->put($key, $setting);
        }
        if($request->hasFile('photo')) {
            $path = $request->file('photo')->storePublicly('settings');
            settings()->put('photo', $path);
        }
        if(!empty($data)) {
            app()->instance(Settings::class, null);
        }

        return response()->json(settings()->all());
    }

    public function uploadPhoto(UpdateSettingsRequest $request) {
        if($request->hasFile('photo')) {
            $path = $request->file('photo')->storePublicly('settings');
            settings()->put('photo', $path);
        }

        return response()->json(settings()->all());
    }
}
