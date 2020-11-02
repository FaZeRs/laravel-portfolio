<?php

namespace Tests\Feature;

use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_guest_cannot_create_a_category()
    {
        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('POST', '/api/categories', $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_create_a_category()
    {
        $this->loginAsUser();

        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('POST', '/api/categories', $data);
        $response->assertStatus(401);
    }

    public function test_admin_can_create_a_category()
    {
        $this->loginAsAdmin();

        $data = [
            'title' => $this->faker->name,
        ];

        $response = $this->json('POST', '/api/categories', $data);
        $response->assertStatus(201);
        $response->assertJsonStructure([
            'id',
            'title',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_edit_a_category()
    {
        $category = Category::factory()->create();

        $data = [
            'title' => $this->faker->name,
        ];
        $response = $this->json('PUT', '/api/categories/'.$category->id, $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_edit_a_category()
    {
        $this->loginAsUser();

        $category = Category::factory()->create();

        $data = [
            'title' => $this->faker->name,
        ];
        $response = $this->json('PUT', '/api/categories/'.$category->id, $data);
        $response->assertStatus(401);
    }

    public function test_admin_can_edit_a_category()
    {
        $this->loginAsAdmin();

        $category = Category::factory()->create();

        $data = [
            'title' => $this->faker->name,
        ];
        $response = $this->json('PUT', '/api/categories/'.$category->id, $data);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'id',
            'title',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_delete_a_category()
    {
        $category = Category::factory()->create();

        $response = $this->json('DELETE', '/api/categories/'.$category->id);
        $response->assertStatus(401);
    }

    public function test_user_cannot_delete_a_category()
    {
        $this->loginAsUser();

        $category = Category::factory()->create();

        $response = $this->json('DELETE', '/api/categories/'.$category->id);
        $response->assertStatus(401);
    }

    public function test_admin_can_delete_a_category()
    {
        $this->loginAsAdmin();

        $category = Category::factory()->create();
        $response = $this->json('DELETE', '/api/categories/'.$category->id);
        $response->assertStatus(204);
    }

    public function test_get_categories()
    {
        Category::factory()->count(5)->create();
        $response = $this->json('GET', '/api/categories');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => [
                'id',
                'title',
                'created_at',
                'updated_at',
            ],
        ]);
    }

    public function test_get_category()
    {
        $category = Category::factory()->create();
        $response = $this->json('GET', '/api/categories/'.$category->id);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'id',
            'title',
            'created_at',
            'updated_at',
        ]);
    }
}
