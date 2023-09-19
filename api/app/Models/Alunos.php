<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alunos extends Model
{
    protected $table = 'alunos';
    protected $fillable = ['id', 'nome', 'cpf', 'sexo', 'dtNascimento', 'email', 'renda'];
}
