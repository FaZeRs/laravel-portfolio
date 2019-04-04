<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required|string|max:191',
            'email' => ['required', 'string', 'email', 'max:191', Rule::unique('users')],
            'password' => 'required|string|min:6|confirmed',
        ]);

        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);
        $success['token'] = $user->createToken('Portfolio')->accessToken;
        $success['name'] = $user->name;

        return response()->json(['success' => $success], 200);
    }
}
