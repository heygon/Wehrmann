<?php

use App\Http\Controllers\Api\AlunoController;
use App\Http\Controllers\Api\TurmaController;
use Illuminate\Support\Facades\Route;

Route::post('/login', 'App\Http\Controllers\Api\UserController@login');
Route::post('/store', 'App\Http\Controllers\Api\UserController@store');
Route::apiResource('/aluno', AlunoController::class);
Route::apiResource('/turma', TurmaController::class);


