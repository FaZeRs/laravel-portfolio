<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsTableSeeder extends Seeder
{
    /**
     * The settings to add.
     */
    protected $settings = [
        [
            'key'         => 'app_name',
            'name'        => 'Application name',
            'description' => '',
            'value'       => 'Laravel Portfolio',
            'field'       => '{"name":"value","label":"Application name","type":"text"}',
            'active'      => 1,
        ],
        [
            'key'         => 'name',
            'name'        => 'Your name',
            'description' => '',
            'value'       => 'Joe Bloggs',
            'field'       => '{"name":"value","label":"Value","type":"text"}',
            'active'      => 1,
        ],
        [
            'key'         => 'photo',
            'name'        => 'Your photo',
            'description' => '',
            'value'       => '',
            'field'       => '{"name":"value","label":"Value","type":"image"}',
            'active'      => 1,
        ],
        [
            'key'         => 'profession',
            'name'        => 'Your profession',
            'description' => '',
            'value'       => 'Backend Web Developer',
            'field'       => '{"name":"value","label":"Value","type":"text"}',
            'active'      => 1,
        ],
        [
            'key'         => 'about_you',
            'name'        => 'About you',
            'description' => '',
            'value'       => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            'field'       => '{"name":"value","label":"Value","type":"wysiwyg"}',
            'active'      => 1,
        ],
        [
            'key'         => 'contact_email',
            'name'        => 'Contact form email address',
            'description' => 'The email address that all emails from the contact form will go to.',
            'value'       => 'hello@example.com',
            'field'       => '{"name":"value","label":"Value","type":"email"}',
            'active'      => 1,
        ],
        [
            'key'         => 'facebook',
            'name'        => 'Facebook',
            'description' => '',
            'value'       => '',
            'field'       => '{"name":"value","label":"Value","type":"url"}',
            'active'      => 1,
        ],
        [
            'key'         => 'twitter',
            'name'        => 'Twitter',
            'description' => '',
            'value'       => '',
            'field'       => '{"name":"value","label":"Value","type":"url"}',
            'active'      => 1,
        ],
        [
            'key'         => 'linkedin',
            'name'        => 'LinkedIn',
            'description' => '',
            'value'       => '',
            'field'       => '{"name":"value","label":"Value","type":"url"}',
            'active'      => 1,
        ],
        [
            'key'         => 'github',
            'name'        => 'Github',
            'description' => '',
            'value'       => '',
            'field'       => '{"name":"value","label":"Value","type":"url"}',
            'active'      => 1,
        ],
        [
            'key'         => 'gitlab',
            'name'        => 'Gitlab',
            'description' => '',
            'value'       => '',
            'field'       => '{"name":"value","label":"Value","type":"url"}',
            'active'      => 1,
        ],
        [
            'key'         => 'bitbucket',
            'name'        => 'Bitbucket',
            'description' => '',
            'value'       => '',
            'field'       => '{"name":"value","label":"Value","type":"url"}',
            'active'      => 1,
        ],
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->settings as $index => $setting) {
            DB::table('settings')->insert($setting);
        }
    }
}
