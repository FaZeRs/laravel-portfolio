<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('login', 'register');
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        if (! $token = auth()->attempt($data)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $this->respondWithToken($token);
    }

    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        $user = User::create($data);
        $token = auth()->login($user);

        return $this->respondWithToken($token);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function user()
    {
        return new UserResource(auth()->user());
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'You have successfully logged out']);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => new UserResource(auth()->user()),
        ]);
    }
}
