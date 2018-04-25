<?php

namespace Tests\Feature;

use App\Mail\Contact\SendContact;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactFormTest extends TestCase
{
    /** @test */
    public function a_contact_mail_gets_sent()
    {
        Mail::fake();

        $this->call('POST', '/api/contact/send', [
            'name'    => 'John Doe',
            'email'   => 'john@example.com',
            'message' => 'This is a test message',
        ]);

        $this->assertResponseOk();

        Mail::assertQueued(SendContact::class);
    }

    /** @test */
    public function name_is_required()
    {
        $this->call('POST', '/api/contact/send', [
            'email'   => 'john@example.com',
            'message' => 'This is a test message',
        ]);

        $this->assertResponseStatus(422);
    }

    /** @test */
    public function email_is_required()
    {
        $this->call('POST', '/api/contact/send', [
            'name'    => 'John Doe',
            'message' => 'This is a test message',
        ]);

        $this->assertResponseStatus(422);
    }

    /** @test */
    public function message_is_required()
    {
        $this->call('POST', '/api/contact/send', [
            'name'  => 'John Doe',
            'email' => 'john@example.com',
        ]);

        $this->assertResponseStatus(422);
    }
}
