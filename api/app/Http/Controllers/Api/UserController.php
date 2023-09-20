<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    
    public function store(Request $request)
    {
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => md5($request->password),
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
        $user = User::where( 'email', '=', $request->email)->get()[0];

        if($user->password == md5($request->password)){
            $token = $user->createToken('token')->plainTextToken;
            return response()->json(['resp' => 's', 'user' => $user]);
        }else{
            return response()->json(['resp' => 'n']);
        }
        
        
    }
}
