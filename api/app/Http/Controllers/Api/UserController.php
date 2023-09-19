<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    
    public function store(Request $request)
    {
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        try {
            $user->save();
            return response()->json(['resp' => 's' ]);
        } catch (\Throwable $th) {
            return response()->json(['resp' => 'n' ]);
        }

    }
    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email','password'))){
            return response(['resp' => 'n'], Response::HTTP_UNAUTHORIZED);
        }
        $user = Auth::user();
        $token = auth('sanctum')->user();
        return response()->json(['resp' => 's', 'user' => $user, 'token' => $token]);
        
    }
}
