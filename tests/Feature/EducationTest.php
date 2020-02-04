<?php

namespace Tests\Feature;

use App\Models\Education;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EducationTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_guest_cannot_create_an_education()
    {
        $data = [
            'qualification' => $this->faker->sentence(4),
            'organisation' => $this->faker->sentence(2),
            'from' => $this->faker->date,
            'to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.education.store'), $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_create_an_education()
    {
        $this->loginAsUser();

        $data = [
            'qualification' => $this->faker->sentence(4),
            'organisation' => $this->faker->sentence(2),
            'from' => $this->faker->date,
            'to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.education.store'), $data);
        $response->assertStatus(403);
    }

    public function test_admin_can_create_an_education()
    {
        $this->loginAsAdmin();

        $data = [
            'qualification' => $this->faker->sentence(4),
            'organisation' => $this->faker->sentence(2),
            'from' => $this->faker->date,
            'to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.education.store'), $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'qualification',
            'organisation',
            'from',
            'to',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_edit_an_education()
    {
        $education = factory(Education::class)->create();

        $data = [
            'qualification' => $this->faker->sentence(4),
        ];
        $response = $this->json('PUT', route('api.education.update', $education), $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_edit_an_education()
    {
        $this->loginAsUser();

        $education = factory(Education::class)->create();

        $data = [
            'qualification' => $this->faker->sentence(4),
        ];
        $response = $this->json('PUT', route('api.education.update', $education), $data);
        $response->assertStatus(403);
    }

    public function test_admin_can_edit_an_education()
    {
        $this->loginAsAdmin();

        $education = factory(Education::class)->create();

        $data = [
            'title' => $this->faker->sentence(4),
        ];
        $response = $this->json('PUT', route('api.education.update', $education), $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'qualification',
            'organisation',
            'from',
            'to',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_delete_an_education()
    {
        $education = factory(Education::class)->create();

        $response = $this->json('DELETE', route('api.education.destroy', $education));
        $response->assertStatus(401);
    }

    public function test_user_cannot_delete_an_education()
    {
        $this->loginAsUser();

        $education = factory(Education::class)->create();

        $response = $this->json('DELETE', route('api.education.destroy', $education));
        $response->assertStatus(403);
    }

    public function test_admin_can_delete_an_education()
    {
        $this->loginAsAdmin();

        $education = factory(Education::class)->create();
        $response = $this->json('DELETE', route('api.education.destroy', $education));
        $response->assertSuccessful();
    }

    public function test_admin_can_restore_an_education()
    {
        $this->loginAsAdmin();
        $education = factory(Education::class)->states('softDeleted')->create();
        $response = $this->json('PUT', route('api.education.restore', $education));
        $response->assertSuccessful();
    }

    public function test_admin_can_delete_permanently_an_education()
    {
        $this->loginAsAdmin();
        $education = factory(Education::class)->states('softDeleted')->create();
        $response = $this->json('PUT', route('api.education.delete-permanently', $education));
        $response->assertSuccessful();
        $this->assertNull($education->fresh());
    }

    public function test_get_education()
    {
        factory(Education::class, 5)->create();
        $response = $this->json('GET', route('api.education.index'));
        $response->assertSuccessful();
        $response->assertJsonStructure([
            '*' => [
                'id',
                'qualification',
                'organisation',
                'from',
                'to',
                'created_at',
                'updated_at',
            ],
        ]);
    }

    public function test_get_single_education()
    {
        $education = factory(Education::class)->create();
        $response = $this->json('GET', route('api.education.show', $education));
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'qualification',
            'organisation',
            'from',
            'to',
            'created_at',
            'updated_at',
        ]);
    }
}
