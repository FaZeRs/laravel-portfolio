<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        $user = User::create($data);
        $response['token'] = $user->createToken(config('app.name'))->plainTextToken;
        $response['user'] = $user;

        return response()->json($response);
    }
}
