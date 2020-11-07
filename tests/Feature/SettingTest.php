<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Project;
use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class SettingTest extends TestCase
{
    public function test_get_settings()
    {
        $response = $this->json('GET', '/api/settings');
        $response->assertSuccessful();
        $response->assertJsonStructure([
           'app_name',
           'name',
           'photo',
           'profession',
           'about_you',
           'contact_email',
           'facebook',
           'twitter',
           'linkedin',
           'github',
           'gitlab',
           'bitbucket',
        ]);
    }

    public function test_get_setting()
    {
        $name = 'app_name';
        $response = $this->json('GET', '/api/settings/' . $name);
        $response->assertSuccessful();
    }
}
