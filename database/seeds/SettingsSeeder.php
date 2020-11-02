<?php

use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (config('settings.defaults') as $setting) {
            settings()->put($setting['key'], $setting['value']);
        }
    }
}
