<?php

use App\Http\Controllers\Api\AlunoController;
use App\Http\Controllers\Api\TurmaController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/user', UserController::class);
Route::apiResource('/aluno', AlunoController::class);
Route::apiResource('/turma', TurmaController::class);


