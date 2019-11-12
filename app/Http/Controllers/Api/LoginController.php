<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->get('email'))->first();

        if ($user) {
            if (Hash::check($request->get('password'), $user->password)) {
                $success['token'] = $user->createToken('Portfolio')->accessToken;

                return response()->json(['success' => $success], 200);
            }
        }

        return response()->json(['error' => 'These credentials do not match our records.'], 401);
    }
}
