<?php

namespace Tests\Feature;

use App\Models\Tag;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

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
        $response->assertStatus(401);
    }

    public function test_user_cannot_create_a_tag()
    {
        $this->loginAsUser();

        $data = [
            'title' => $this->faker->sentence,
            'color' => $this->faker->colorName,
        ];

        $response = $this->json('POST', '/api/tags', $data);
        $response->assertStatus(401);
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
        $tag = factory(Tag::class)->create();

        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('PUT', '/api/tags/'.$tag->id, $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_edit_a_tag()
    {
        $this->loginAsUser();

        $tag = factory(Tag::class)->create();
        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('PUT', '/api/tags/'.$tag->id, $data);
        $response->assertStatus(401);
    }

    public function test_admin_can_edit_a_tag()
    {
        $this->loginAsAdmin();

        $tag = factory(Tag::class)->create();
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
        $tag = factory(Tag::class)->create();
        $response = $this->json('DELETE', '/api/tags/'.$tag->id);
        $response->assertStatus(401);
    }

    public function test_user_cannot_delete_a_tag()
    {
        $this->loginAsUser();
        $tag = factory(Tag::class)->create();
        $response = $this->json('DELETE', '/api/tags/'.$tag->id);
        $response->assertStatus(401);
    }

    public function test_admin_can_delete_a_tag()
    {
        $this->loginAsAdmin();
        $tag = factory(Tag::class)->create();
        $response = $this->json('DELETE', '/api/tags/'.$tag->id);
        $response->assertSuccessful();
    }

    public function test_get_tags()
    {
        factory(Tag::class, 5)->create();
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
        $tag = factory(Tag::class)->create();

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
