<?php

return [

    'path' => storage_path('app/settings.json'),

    'defaults' => [
        'app_name' => [
            'name'        => 'Application name',
            'description' => '',
            'value'       => 'Laravel Portfolio',
            'field'       => 'text',
        ],
        'name' => [
            'name'        => 'Your name',
            'description' => '',
            'value'       => 'Joe Bloggs',
            'field'       => 'text',
        ],
        'photo' => [
            'name'        => 'Your photo',
            'description' => '',
            'value'       => '',
            'field'       => 'text',
        ],
        'profession' => [
            'name'        => 'Your profession',
            'description' => '',
            'value'       => 'Web Developer',
            'field'       => 'text',
        ],
        'about_you' => [
            'name'        => 'About you',
            'description' => '',
            'value'       => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            'field'       => 'text',
        ],
        'contact_email' => [
            'name'        => 'Contact form email address',
            'description' => 'The email address that all emails from the contact form will go to.',
            'value'       => 'hello@example.com',
            'field'       => 'text',
        ],
        'facebook' => [
            'name'        => 'Facebook',
            'description' => '',
            'value'       => '',
            'field'       => 'text',
        ],
        'twitter' => [
            'name'        => 'Twitter',
            'description' => '',
            'value'       => '',
            'field'       => 'text',
        ],
        'linkedin' => [
            'name'        => 'LinkedIn',
            'description' => '',
            'value'       => '',
            'field'       => 'text',
        ],
        'github' => [
            'name'        => 'Github',
            'description' => '',
            'value'       => '',
            'field'       => 'text',
        ],
        'gitlab' => [
            'name'        => 'Gitlab',
            'description' => '',
            'value'       => '',
            'field'       => 'text',
        ],
        'bitbucket' => [
            'name'        => 'Bitbucket',
            'description' => '',
            'value'       => '',
            'field'       => 'text',
        ],
    ],

];
