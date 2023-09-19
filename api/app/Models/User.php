<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class User extends Model
{
    protected $table = 'users';

    use HasApiTokens;

    protected $fillable = [ 'name', 'password', 'email'];
}
