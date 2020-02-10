<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $user = User::where('email', $request->get('email'))->first();

        if ($user) {
            if (Hash::check($request->get('password'), $user->password)) {
                $success['token'] = $user->createToken('Portfolio')->accessToken;

                return response()->json(['success' => $success]);
            }
        }

        return response()->json(['error' => 'These credentials do not match our records.'], 401);
    }
}
