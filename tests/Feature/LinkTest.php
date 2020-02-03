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
        $project = factory(Project::class)->create();
        $data = [
            'title'      => $this->faker->sentence,
            'project_id' => $project->id,
            'url'        => $this->faker->url,
            'icon'       => $this->faker->word,
        ];
        $response = $this->json('POST', route('api.links.store'), $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_create_a_link()
    {
        $this->loginAsUser();
        $project = factory(Project::class)->create();
        $data = [
            'title'      => $this->faker->sentence,
            'project_id' => $project->id,
            'url'        => $this->faker->url,
            'icon'       => $this->faker->word,
        ];
        $response = $this->json('POST', route('api.links.store'), $data);
        $response->assertStatus(403);
    }

    public function test_admin_can_create_a_link()
    {
        $this->loginAsAdmin();
        $project = factory(Project::class)->create();
        $data = [
            'title'      => $this->faker->sentence,
            'project_id' => $project->id,
            'url'        => $this->faker->url,
            'icon'       => $this->faker->word,
        ];
        $response = $this->json('POST', route('api.links.store'), $data);
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
        $link = factory(Link::class)->create();
        $data = [
            'title' => $this->faker->sentence,
        ];
        $response = $this->json('PUT', route('api.links.update', $link), $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_edit_a_link()
    {
        $this->loginAsUser();
        $link = factory(Link::class)->create();
        $data = [
            'title' => $this->faker->sentence,
        ];
        $response = $this->json('PUT', route('api.links.update', $link), $data);
        $response->assertStatus(403);
    }

    public function test_admin_can_edit_a_link()
    {
        $this->loginAsAdmin();
        $link = factory(Link::class)->create();
        $data = [
            'title' => $this->faker->sentence,
        ];
        $response = $this->json('PUT', route('api.links.update', $link), $data);
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
        $link = factory(Link::class)->create();
        $response = $this->json('DELETE', route('api.links.destroy', $link));
        $response->assertStatus(401);
    }

    public function test_user_cannot_delete_a_link()
    {
        $this->loginAsUser();
        $link = factory(Link::class)->create();
        $response = $this->json('DELETE', route('api.links.destroy', $link));
        $response->assertStatus(403);
    }

    public function test_admin_can_delete_a_link()
    {
        $this->loginAsAdmin();
        $link = factory(Link::class)->create();
        $response = $this->json('DELETE', route('api.links.destroy', $link));
        $response->assertSuccessful();
    }

    public function test_get_links()
    {
        factory(Link::class, 5)->create();
        $response = $this->json('GET', route('api.links.index'));
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
        $link = factory(Link::class)->create();
        $response = $this->json('GET', route('api.links.show', $link));
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
