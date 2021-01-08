<?php

namespace Tests\Feature;

use App\Models\Experience;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
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
            'date_from' => $this->faker->date,
            'date_to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.experience.store'), $data);
        $response->assertUnauthorized();
    }

    public function test_user_cannot_create_an_experience()
    {
        $this->loginAsUser();

        $data = [
            'position' => $this->faker->jobTitle,
            'employer' => $this->faker->company,
            'website' => $this->faker->domainName,
            'date_from' => $this->faker->date,
            'date_to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
        ];

        $response = $this->json('POST', route('api.experience.store'), $data);
        $response->assertUnauthorized();
    }

    public function test_admin_can_create_an_experience()
    {
        $this->loginAsAdmin();
        Storage::fake('logos');
        $file = UploadedFile::fake()->image('logo.jpg');
        $data = [
            'position' => $this->faker->jobTitle,
            'employer' => $this->faker->company,
            'website' => $this->faker->domainName,
            'date_from' => $this->faker->date,
            'date_to' => $this->faker->date,
            'ongoing' => $this->faker->boolean(25),
            'logo' => $file,
        ];

        $response = $this->json('POST', route('api.experience.store'), $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'position',
            'employer',
            'website',
            'date_from',
            'date_to',
            'ongoing',
            'logo',
            'active',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_edit_an_experience()
    {
        $experience = Experience::factory()->create();

        $data = [
            'position' => $this->faker->jobTitle,
        ];
        $response = $this->json('PUT', route('api.experience.update', $experience), $data);
        $response->assertUnauthorized();
    }

    public function test_user_cannot_edit_an_experience()
    {
        $this->loginAsUser();

        $experience = Experience::factory()->create();

        $data = [
            'position' => $this->faker->jobTitle,
        ];
        $response = $this->json('PUT', route('api.experience.update', $experience), $data);
        $response->assertUnauthorized();
    }

    public function test_admin_can_edit_an_experience()
    {
        $this->loginAsAdmin();

        $experience = Experience::factory()->create();
        Storage::fake('logos');
        $file = UploadedFile::fake()->image('logo.jpg');
        $data = [
            'position' => $this->faker->jobTitle,
            'logo' => $file,
        ];
        $response = $this->json('PUT', route('api.experience.update', $experience), $data);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'position',
            'employer',
            'website',
            'date_from',
            'date_to',
            'ongoing',
            'logo',
            'active',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_guest_cannot_delete_an_experience()
    {
        $experience = Experience::factory()->create();

        $response = $this->json('DELETE', route('api.experience.destroy', $experience));
        $response->assertUnauthorized();
    }

    public function test_user_cannot_delete_an_experience()
    {
        $this->loginAsUser();

        $experience = Experience::factory()->create();

        $response = $this->json('DELETE', route('api.experience.destroy', $experience));
        $response->assertUnauthorized();
    }

    public function test_admin_can_delete_an_experience()
    {
        $this->loginAsAdmin();

        $experience = Experience::factory()->create();
        $response = $this->json('DELETE', route('api.experience.destroy', $experience));
        $response->assertSuccessful();
        $this->assertSoftDeleted($experience);
    }

    public function test_admin_can_restore_an_experience()
    {
        $this->loginAsAdmin();
        $experience = Experience::factory()->softDeleted()->create();
        $response = $this->json('PUT', route('api.experience.restore', $experience));
        $response->assertSuccessful();
    }

    public function test_admin_can_delete_permanently_an_experience()
    {
        $this->loginAsAdmin();
        $experience = Experience::factory()->softDeleted()->create();
        $response = $this->json('PUT', route('api.experience.delete-permanently', $experience));
        $response->assertSuccessful();
        $this->assertDeleted($experience);
    }

    public function test_get_education()
    {
        Experience::factory()->count(5)->create();
        $response = $this->json('GET', route('api.experience.index'));
        $response->assertSuccessful();
        $response->assertJsonStructure([
            '*' => [
                'id',
                'position',
                'employer',
                'website',
                'date_from',
                'date_to',
                'ongoing',
                'logo',
                'active',
                'created_at',
                'updated_at',
            ],
        ]);
    }

    public function test_get_single_experience()
    {
        $experience = Experience::factory()->create();
        $response = $this->json('GET', route('api.experience.show', $experience));
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'id',
            'position',
            'employer',
            'website',
            'date_from',
            'date_to',
            'ongoing',
            'active',
            'created_at',
            'updated_at',
        ]);
    }
}
