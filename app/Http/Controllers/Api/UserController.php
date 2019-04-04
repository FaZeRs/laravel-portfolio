<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function details()
    {
        $user = auth()->user();

        return response()->json(['details' => $user], 200);
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
