<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Mail\Contact\SendContact;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(ContactRequest $request)
    {
        $data = $request->validated();
        Mail::send(new SendContact($data));

        return response()->json(['message' => 'success']);
    }
}
