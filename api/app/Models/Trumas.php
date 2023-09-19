<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Trumas extends Model
{
    protected $table = 'turmas';
    protected $fillable = ['id', 'CodTurma', 'dtInicio', 'dtFim', 'qtAlunos'];
}
