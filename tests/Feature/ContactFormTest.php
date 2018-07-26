<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Mail\Contact\SendContact;
use Illuminate\Support\Facades\Mail;

class ContactFormTest extends TestCase
{
    /** @test */
    public function a_contact_mail_gets_sent()
    {
        Mail::fake();

        $response = $this->json('POST', '/api/contact/send', [
            'name'    => 'John Doe',
            'email'   => 'john@example.com',
            'message' => 'This is a test message',
        ]);

        $response->assertSuccessful();

        Mail::assertQueued(SendContact::class);
    }

    /** @test */
    public function name_is_required()
    {
        $response = $this->json('POST', '/api/contact/send', [
            'email'   => 'john@example.com',
            'message' => 'This is a test message',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('name');
    }

    /** @test */
    public function email_is_required()
    {
        $response = $this->json('POST', '/api/contact/send', [
            'name'    => 'John Doe',
            'message' => 'This is a test message',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('email');
    }

    /** @test */
    public function message_is_required()
    {
        $response = $this->json('POST', '/api/contact/send', [
            'name'  => 'John Doe',
            'email' => 'john@example.com',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('message');
    }
}
