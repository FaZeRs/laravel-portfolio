<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function details()
    {
        $user = auth()->user();
        return new UserResource($user);
    }

    public function logout()
    {
        $accessToken = auth()->user()->token();

        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update([
            'revoked' => true,
        ]);

        $accessToken->revoke();

        return response()->json(['success' => 'You have successfully logged out'], 200);
    }
}
