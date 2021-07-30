<?php

namespace Tests\Feature;

use App\Models\Link;
use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LinkTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_guest_cannot_create_a_link()
    {
        $project = Project::factory()->create();
        $data = [
            'title'      => $this->faker->sentence,
            'project_id' => $project->id,
            'url'        => $this->faker->url,
            'icon'       => $this->faker->word,
        ];
        $response = $this->json('POST', '/api/links', $data);
        $response->assertUnauthorized();
    }

    public function test_user_cannot_create_a_link()
    {
        $this->loginAsUser();
        $project = Project::factory()->create();
        $data = [
            'title'      => $this->faker->sentence,
            'project_id' => $project->id,
            'url'        => $this->faker->url,
            'icon'       => $this->faker->word,
        ];
        $response = $this->json('POST', '/api/links', $data);
        $response->assertUnauthorized();
    }

    public function test_admin_can_create_a_link()
    {
        $this->loginAsAdmin();
        $project = Project::factory()->create();
        $data = [
            'title'      => $this->faker->sentence,
            'project_id' => $project->id,
            'url'        => $this->faker->url,
            'icon'       => $this->faker->word,
        ];
        $response = $this->json('POST', '/api/links', $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'title',
            'project_id',
            'url',
            'icon',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_edit_a_link()
    {
        $link = Link::factory()->create();
        $data = [
            'title' => $this->faker->sentence,
        ];
        $response = $this->json('PUT', '/api/links/'.$link->id, $data);
        $response->assertUnauthorized();
    }

    public function test_user_cannot_edit_a_link()
    {
        $this->loginAsUser();
        $link = Link::factory()->create();
        $data = [
            'title' => $this->faker->sentence,
        ];
        $response = $this->json('PUT', '/api/links/'.$link->id, $data);
        $response->assertUnauthorized();
    }

    public function test_admin_can_edit_a_link()
    {
        $this->loginAsAdmin();
        $link = Link::factory()->create();
        $data = [
            'title' => $this->faker->sentence,
        ];
        $response = $this->json('PUT', '/api/links/'.$link->id, $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'title',
            'project_id',
            'url',
            'icon',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_delete_a_link()
    {
        $link = Link::factory()->create();
        $response = $this->json('DELETE', '/api/links/'.$link->id);
        $response->assertUnauthorized();
    }

    public function test_user_cannot_delete_a_link()
    {
        $this->loginAsUser();
        $link = Link::factory()->create();
        $response = $this->json('DELETE', '/api/links/'.$link->id);
        $response->assertUnauthorized();
    }

    public function test_admin_can_delete_a_link()
    {
        $this->loginAsAdmin();
        $link = Link::factory()->create();
        $response = $this->json('DELETE', '/api/links/'.$link->id);
        $response->assertSuccessful();
    }

    public function test_get_links()
    {
        $this->loginAsAdmin();
        Link::factory()->count(5)->create();
        $response = $this->json('GET', '/api/links');
        $response->assertSuccessful();
        $response->assertJsonStructure([
            '*' => [
                'id',
                'title',
                'project_id',
                'url',
                'icon',
                'created_at',
                'updated_at',
            ],
        ]);
    }

    public function test_get_link()
    {
        $this->loginAsAdmin();
        $link = Link::factory()->create();
        $response = $this->json('GET', '/api/links/'.$link->id);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'title',
            'project_id',
            'url',
            'icon',
            'created_at',
            'updated_at',
        ]);
    }
}
