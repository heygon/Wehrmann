<?php

namespace App\Http\Controllers\Api;

use App\Models\Alunos;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AlunoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Alunos::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $aluno = new Alunos([
            'nome' => $request->nome,
            'cpf' => $request->cpf,
            'sexo' => $request->sexo,
            'dtNascimento' => $request->dtNascimento,
            'email' => $request->email,
            'renda' => $request->renda,
        ]);

        try {
            $aluno->save();
            return array('resp' => 's', 'aluno' => $aluno);
        } catch (\Throwable $th) {
            return array('resp' => 'n', 'msg' => 'Aluno já cadastrado');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $aluno = Alunos::find($id);
        try {
            return array('resp' => 's', 'aluno' => $aluno);
        } catch (\Throwable $th) {
            return array('resp' => 'n', 'msg' => 'Aluno não encontrado');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $aluno = Alunos::find($id);

        $aluno->nome         = ($request->nome == '')         ? $aluno->nome         : $request->nome;
        $aluno->cpf          = ($request->cpf == '')          ? $aluno->cpf          : $request->cpf;
        $aluno->sexo         = ($request->sexo == '')         ? $aluno->sexo         : $request->sexo;
        $aluno->dtNascimento = ($request->dtNascimento == '') ? $aluno->dtNascimento : $request->dtNascimento;
        $aluno->email        = ($request->email == '')        ? $aluno->email        : $request->email;
        $aluno->renda        = ($request->renda == '')        ? $aluno->renda        : $request->renda;
        
        try {
            $aluno->save();
            return array('resp' => 's');
        } catch (\Throwable $th) {
            return array('resp' => 'n');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $aluno = Alunos::find($id);
            $aluno->delete();
            return array('resp' => 's');
        } catch (\Throwable $th) {
            return array('resp' => 'n', 'msg' => 'Erro ao excluir registro');
        }
    }
}
