<?php

namespace Tests\Feature;

use App\Models\Experience;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ExperienceTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_guest_cannot_create_an_experience()
    {
        $data = [
            'position' => $this->faker->jobTitle,
            'employer' => $this->faker->company,
            'website' => $this->faker->domainName,
            'from' => $this->faker->date,
            'to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.experience.store'), $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_create_an_experience()
    {
        $this->loginAsUser();

        $data = [
            'position' => $this->faker->jobTitle,
            'employer' => $this->faker->company,
            'website' => $this->faker->domainName,
            'from' => $this->faker->date,
            'to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.experience.store'), $data);
        $response->assertStatus(403);
    }

    public function test_admin_can_create_an_experience()
    {
        $this->loginAsAdmin();

        $data = [
            'position' => $this->faker->jobTitle,
            'employer' => $this->faker->company,
            'website' => $this->faker->domainName,
            'from' => $this->faker->date,
            'to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.experience.store'), $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'position',
            'employer',
            'website',
            'from',
            'to',
            'ongoing',
            'logo',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_edit_an_experience()
    {
        $experience = factory(Experience::class)->create();

        $data = [
            'position' => $this->faker->jobTitle,
        ];
        $response = $this->json('PUT', route('api.experience.update', $experience), $data);
        $response->assertStatus(401);
    }

    public function test_user_cannot_edit_an_experience()
    {
        $this->loginAsUser();

        $experience = factory(Experience::class)->create();

        $data = [
            'position' => $this->faker->jobTitle,
        ];
        $response = $this->json('PUT', route('api.experience.update', $experience), $data);
        $response->assertStatus(403);
    }

    public function test_admin_can_edit_an_experience()
    {
        $this->loginAsAdmin();

        $experience = factory(Experience::class)->create();

        $data = [
            'position' => $this->faker->jobTitle,
        ];
        $response = $this->json('PUT', route('api.experience.update', $experience), $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'position',
            'employer',
            'website',
            'from',
            'to',
            'ongoing',
            'logo',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_delete_an_experience()
    {
        $experience = factory(Experience::class)->create();

        $response = $this->json('DELETE', route('api.experience.destroy', $experience));
        $response->assertStatus(401);
    }

    public function test_user_cannot_delete_an_experience()
    {
        $this->loginAsUser();

        $experience = factory(Experience::class)->create();

        $response = $this->json('DELETE', route('api.experience.destroy', $experience));
        $response->assertStatus(403);
    }

    public function test_admin_can_delete_an_experience()
    {
        $this->loginAsAdmin();

        $experience = factory(Experience::class)->create();
        $response = $this->json('DELETE', route('api.experience.destroy', $experience));
        $response->assertSuccessful();
    }

    public function test_admin_can_restore_an_experience()
    {
        $this->loginAsAdmin();
        $experience = factory(Experience::class)->states('softDeleted')->create();
        $response = $this->json('PUT', route('api.experience.restore', $experience));
        $response->assertSuccessful();
    }

    public function test_admin_can_delete_permanently_an_experience()
    {
        $this->loginAsAdmin();
        $experience = factory(Experience::class)->states('softDeleted')->create();
        $response = $this->json('PUT', route('api.experience.delete-permanently', $experience));
        $response->assertSuccessful();
        $this->assertNull($experience->fresh());
    }

    public function test_get_education()
    {
        factory(Experience::class, 5)->create();
        $response = $this->json('GET', route('api.experience.index'));
        $response->assertSuccessful();
        $response->assertJsonStructure([
            '*' => [
                'id',
                'position',
                'employer',
                'website',
                'from',
                'to',
                'ongoing',
                'logo',
                'created_at',
                'updated_at',
            ],
        ]);
    }

    public function test_get_single_experience()
    {
        $experience = factory(Experience::class)->create();
        $response = $this->json('GET', route('api.experience.show', $experience));
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'position',
            'employer',
            'website',
            'from',
            'to',
            'ongoing',
            'logo',
            'created_at',
            'updated_at',
        ]);
    }
}
