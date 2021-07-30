<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

/**
 * Class SendContact.
 */
class SendContact extends Mailable implements ShouldQueue
{
    use Dispatchable, Queueable, InteractsWithQueue, SerializesModels;

    /**
     * @var array
     */
    public $request;

    /**
     * SendContact constructor.
     *
     * @param array $request
     */
    public function __construct(array $request)
    {
        $this->request = $request;
    }

    /**
     * Build the message.
     *
     * @return \App\Mail\SendContact
     */
    public function build()
    {
        return $this
            ->to(settings('contact_email'))
            ->subject(__('strings.emails.contact.subject', ['app_name' => config('app.name')]))
            ->from($this->request['email'], $this->request['name'])
            ->replyTo($this->request['email'], $this->request['name'])
            ->markdown('emails.contact');
    }
}
