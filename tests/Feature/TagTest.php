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

        $response = $this->json('POST', route('api.tags.store'), $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_create_a_tag()
    {
        $this->loginAsUser();

        $data = [
            'title' => $this->faker->sentence,
            'color' => $this->faker->colorName,
        ];

        $response = $this->json('POST', route('api.tags.store'), $data);
        $response->assertStatus(403);
    }

    public function test_admin_can_create_a_tag()
    {
        $this->loginAsAdmin();

        $data = [
            'title' => $this->faker->sentence,
            'color' => $this->faker->colorName,
        ];

        $response = $this->json('POST', route('api.tags.store'), $data);
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
        $tag = factory(Tag::class)->create();

        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('PUT', route('api.tags.update', $tag), $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_edit_a_tag()
    {
        $this->loginAsUser();

        $tag = factory(Tag::class)->create();
        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('PUT', route('api.tags.update', $tag), $data);
        $response->assertStatus(403);
    }

    public function test_admin_can_edit_a_tag()
    {
        $this->loginAsAdmin();

        $tag = factory(Tag::class)->create();
        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('PUT', route('api.tags.update', $tag), $data);
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
        $tag = factory(Tag::class)->create();
        $response = $this->json('DELETE', route('api.tags.destroy', $tag));
        $response->assertStatus(401);
    }

    public function test_user_cannot_delete_a_tag()
    {
        $this->loginAsUser();
        $tag = factory(Tag::class)->create();
        $response = $this->json('DELETE', route('api.tags.destroy', $tag));
        $response->assertStatus(403);
    }

    public function test_admin_can_delete_a_tag()
    {
        $this->loginAsAdmin();
        $tag = factory(Tag::class)->create();
        $response = $this->json('DELETE', route('api.tags.destroy', $tag));
        $response->assertSuccessful();
    }

    public function test_admin_can_restore_a_category()
    {
        $this->loginAsAdmin();
        $tag = factory(Tag::class)->states('softDeleted')->create();
        $response = $this->json('PUT', route('api.tags.restore', $tag));
        $response->assertSuccessful();
    }

    public function test_admin_can_delete_permanently_a_category()
    {
        $this->loginAsAdmin();
        $tag = factory(Tag::class)->states('softDeleted')->create();
        $response = $this->json('PUT', route('api.tags.delete-permanently', $tag));
        $response->assertSuccessful();
        $this->assertNull($tag->fresh());
    }

    public function test_get_tags()
    {
        factory(Tag::class, 5)->create();
        $response = $this->json('GET', route('api.tags.index'));
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
        $tag = factory(Tag::class)->create();

        $response = $this->json('GET', route('api.tags.show', $tag));
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
