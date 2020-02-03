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

        $response = $this->json('POST', route('api.categories.store'), $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_create_a_category()
    {
        $this->loginAsUser();

        $data = [
            'title' => $this->faker->sentence,
        ];

        $response = $this->json('POST', route('api.categories.store'), $data);
        $response->assertStatus(403);
    }

    public function test_admin_can_create_a_category()
    {
        $this->loginAsAdmin();

        $data = [
            'title' => $this->faker->name,
        ];

        $response = $this->json('POST', route('api.categories.store'), $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'title',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_edit_a_category()
    {
        $category = factory(Category::class)->create();

        $data = [
            'title' => $this->faker->name,
        ];
        $response = $this->json('PUT', route('api.categories.update', $category), $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_edit_a_category()
    {
        $this->loginAsUser();

        $category = factory(Category::class)->create();

        $data = [
            'title' => $this->faker->name,
        ];
        $response = $this->json('PUT', route('api.categories.update', $category), $data);
        $response->assertStatus(403);
    }

    public function test_admin_can_edit_a_category()
    {
        $this->loginAsAdmin();

        $category = factory(Category::class)->create();

        $data = [
            'title' => $this->faker->name,
        ];
        $response = $this->json('PUT', route('api.categories.update', $category), $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'title',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_delete_a_category()
    {
        $category = factory(Category::class)->create();

        $response = $this->json('DELETE', route('api.categories.destroy', $category));
        $response->assertStatus(401);
    }

    public function test_user_cannot_delete_a_category()
    {
        $this->loginAsUser();

        $category = factory(Category::class)->create();

        $response = $this->json('DELETE', route('api.categories.destroy', $category));
        $response->assertStatus(403);
    }

    public function test_admin_can_delete_a_category()
    {
        $this->loginAsAdmin();

        $category = factory(Category::class)->create();
        $response = $this->json('DELETE', route('api.categories.destroy', $category));
        $response->assertSuccessful();
    }

    public function test_admin_can_restore_a_category()
    {
        $this->loginAsAdmin();
        $category = factory(Category::class)->states('softDeleted')->create();
        $response = $this->json('PUT', route('api.categories.restore', $category));
        $response->assertSuccessful();
    }

    public function test_admin_can_delete_permanently_a_category()
    {
        $this->loginAsAdmin();
        $category = factory(Category::class)->states('softDeleted')->create();
        $response = $this->json('PUT', route('api.categories.delete-permanently', $category));
        $response->assertSuccessful();
        $this->assertNull($category->fresh());
    }

    public function test_get_categories()
    {
        factory(Category::class, 5)->create();
        $response = $this->json('GET', route('api.categories.index'));
        $response->assertSuccessful();
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
        $category = factory(Category::class)->create();
        $response = $this->json('GET', route('api.categories.show', $category));
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'title',
            'created_at',
            'updated_at',
        ]);
    }
}
