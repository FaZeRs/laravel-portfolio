<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\Contact\SendContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

/**
 * Class ContactController.
 */
class ContactController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     *
     * @throws \Illuminate\Validation\ValidationException
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function send(Request $request): \Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'name'    => 'required|string|max:191',
            'email'   => 'required|email|string|max:191',
            'message' => 'required',
        ]);

        Mail::send(new SendContact($request->only(['name', 'email', 'message'])));

        return response()->json(['message' => 'success']);
    }
}
