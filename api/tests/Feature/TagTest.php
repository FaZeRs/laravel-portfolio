<?php

namespace Tests\Feature;

use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TagTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_guest_cannot_create_a_tag()
    {
        $data = [
            'title' => $this->faker->sentence,
            'color' => $this->faker->colorName,
        ];

        $response = $this->json('POST', '/api/tags', $data);
        $response->assertUnauthorized();
    }

    public function test_user_cannot_create_a_tag()
    {
        $this->loginAsUser();

        $data = [
            'title' => $this->faker->sentence,
            'color' => $this->faker->colorName,
        ];

        $response = $this->json('POST', '/api/tags', $data);
        $response->assertUnauthorized();
    }

    public function test_admin_can_create_a_tag()
    {
        $this->loginAsAdmin();

        $data = [
            'title' => $this->faker->sentence,
            'color' => $this->faker->colorName,
        ];

        $response = $this->json('POST', '/api/tags', $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'title',
            'color',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_edit_a_tag()
    {
        $tag = Tag::factory()->create();

        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('PUT', '/api/tags/'.$tag->id, $data);
        $response->assertUnauthorized();
    }

    public function test_user_cannot_edit_a_tag()
    {
        $this->loginAsUser();

        $tag = Tag::factory()->create();
        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('PUT', '/api/tags/'.$tag->id, $data);
        $response->assertUnauthorized();
    }

    public function test_admin_can_edit_a_tag()
    {
        $this->loginAsAdmin();

        $tag = Tag::factory()->create();
        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('PUT', '/api/tags/'.$tag->id, $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'title',
            'color',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_delete_a_tag()
    {
        $tag = Tag::factory()->create();
        $response = $this->json('DELETE', '/api/tags/'.$tag->id);
        $response->assertUnauthorized();
    }

    public function test_user_cannot_delete_a_tag()
    {
        $this->loginAsUser();
        $tag = Tag::factory()->create();
        $response = $this->json('DELETE', '/api/tags/'.$tag->id);
        $response->assertUnauthorized();
    }

    public function test_admin_can_delete_a_tag()
    {
        $this->loginAsAdmin();
        $tag = Tag::factory()->create();
        $response = $this->json('DELETE', '/api/tags/'.$tag->id);
        $response->assertSuccessful();
        $this->assertSoftDeleted($tag);
    }

    public function test_admin_can_restore_a_tag()
    {
        $this->loginAsAdmin();
        $tag = Tag::factory()->softDeleted()->create();
        $response = $this->json('PUT', route('api.tag.restore', $tag));
        $response->assertSuccessful();
    }

    public function test_admin_can_delete_permanently_a_tag()
    {
        $this->loginAsAdmin();
        $tag = Tag::factory()->softDeleted()->create();
        $response = $this->json('PUT', route('api.tag.delete-permanently', $tag));
        $response->assertSuccessful();
        $this->assertDeleted($tag);
    }

    public function test_get_tags()
    {
        $this->loginAsAdmin();
        Tag::factory()->count(5)->create();
        $response = $this->json('GET', '/api/tags');
        $response->assertSuccessful();
        $response->assertJsonStructure([
            '*' => [
                'id',
                'title',
                'color',
                'created_at',
                'updated_at',
            ],
        ]);
    }

    public function test_get_tag()
    {
        $this->loginAsAdmin();
        $tag = Tag::factory()->create();
        $response = $this->json('GET', '/api/tags/'.$tag->id);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'title',
            'color',
            'created_at',
            'updated_at',
        ]);
    }
}
