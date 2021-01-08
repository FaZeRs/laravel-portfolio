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
            'date_from' => $this->faker->date,
            'date_to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.education.store'), $data);
        $response->assertUnauthorized();
    }

    public function test_user_cannot_create_an_education()
    {
        $this->loginAsUser();

        $data = [
            'qualification' => $this->faker->sentence(4),
            'organisation' => $this->faker->sentence(2),
            'date_from' => $this->faker->date,
            'date_to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.education.store'), $data);
        $response->assertUnauthorized();
    }

    public function test_admin_can_create_an_education()
    {
        $this->loginAsAdmin();

        $data = [
            'qualification' => $this->faker->sentence(4),
            'organisation' => $this->faker->sentence(2),
            'date_from' => $this->faker->date,
            'date_to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.education.store'), $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'qualification',
            'organisation',
            'date_from',
            'date_to',
            'active',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_edit_an_education()
    {
        $education = Education::factory()->create();

        $data = [
            'qualification' => $this->faker->sentence(4),
        ];
        $response = $this->json('PUT', route('api.education.update', $education), $data);
        $response->assertUnauthorized();
    }

    public function test_user_cannot_edit_an_education()
    {
        $this->loginAsUser();

        $education = Education::factory()->create();

        $data = [
            'qualification' => $this->faker->sentence(4),
        ];
        $response = $this->json('PUT', route('api.education.update', $education), $data);
        $response->assertUnauthorized();
    }

    public function test_admin_can_edit_an_education()
    {
        $this->loginAsAdmin();

        $education = Education::factory()->create();

        $data = [
            'title' => $this->faker->sentence(4),
        ];
        $response = $this->json('PUT', route('api.education.update', $education), $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'qualification',
            'organisation',
            'date_from',
            'date_to',
            'active',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_delete_an_education()
    {
        $education = Education::factory()->create();

        $response = $this->json('DELETE', route('api.education.destroy', $education));
        $response->assertUnauthorized();
    }

    public function test_user_cannot_delete_an_education()
    {
        $this->loginAsUser();

        $education = Education::factory()->create();

        $response = $this->json('DELETE', route('api.education.destroy', $education));
        $response->assertUnauthorized();
    }

    public function test_admin_can_delete_an_education()
    {
        $this->loginAsAdmin();

        $education = Education::factory()->create();
        $response = $this->json('DELETE', route('api.education.destroy', $education));
        $response->assertSuccessful();
        $this->assertSoftDeleted($education);
    }

    public function test_admin_can_restore_an_education()
    {
        $this->loginAsAdmin();
        $education = Education::factory()->softDeleted()->create();
        $response = $this->json('PUT', route('api.education.restore', $education));
        $response->assertSuccessful();
    }

    public function test_admin_can_delete_permanently_an_education()
    {
        $this->loginAsAdmin();
        $education = Education::factory()->softDeleted()->create();
        $response = $this->json('PUT', route('api.education.delete-permanently', $education));
        $response->assertSuccessful();
        $this->assertDeleted($education);
    }

    public function test_get_education()
    {
        Education::factory()->count(5)->create();
        $response = $this->json('GET', route('api.education.index'));
        $response->assertSuccessful();
        $response->assertJsonStructure([
            '*' => [
                'id',
                'qualification',
                'organisation',
                'date_from',
                'date_to',
                'active',
                'created_at',
                'updated_at',
            ],
        ]);
    }

    public function test_get_single_education()
    {
        $education = Education::factory()->create();
        $response = $this->json('GET', route('api.education.show', $education));
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'qualification',
            'organisation',
            'date_from',
            'date_to',
            'active',
            'created_at',
            'updated_at',
        ]);
    }
}
