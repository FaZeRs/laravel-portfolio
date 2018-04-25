<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact\SendContact;

/**
 * Class ContactController.
 */
class ContactController extends Controller
{
    /**
     * @param Request $request
     *
     * @return void
     * @throws \Illuminate\Validation\ValidationException
     */
    public function send(Request $request)
    {
        $this->validate($request, [
            'name'    => 'required|string|max:191',
            'email'   => 'required|email|string|max:191',
            'message' => 'required',
        ]);

        Mail::send(new SendContact($request->only(['name', 'email', 'message'])));
    }
}
