<?php

namespace App\Http\Controllers\Api;

use App\Models\Trumas;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUpdateTurmas;
use Illuminate\Http\Request;

class TurmaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Trumas::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUpdateTurmas $request)
    {
        
        $turmas = new Trumas([
            'CodTurma' => $request->CodTurma,
            'dtInicio' => $request->dtInicio,
            'dtFim' => $request->dtFim,
            'qtAlunos' => $request->qtAlunos,
        ]);

        try {
            $turmas->save();
            return array('resp' => 's', 'turmas' => $turmas);
        } catch (\Throwable $th) {
            return array('resp' => 'n', 'msg' => 'Turma já cadastrado');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $turma = Trumas::find($id);
        try {
            return array('resp' => 's', 'turma' => $turma);
        } catch (\Throwable $th) {
            return array('resp' => 'n', 'msg' => 'Turma não encontrada');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreUpdateTurmas $request, string $id)
    {
        $turma = Trumas::find($id);

        $turma->CodTurma = ($request->CodTurma == '') ? $turma->CodTurma : $request->CodTurma;
        $turma->dtInicio = ($request->dtInicio == '') ? $turma->dtInicio : $request->dtInicio;
        $turma->dtFim    = ($request->dtFim == '')    ? $turma->dtFim    : $request->dtFim;
        $turma->qtAlunos = ($request->qtAlunos == '') ? $turma->qtAlunos : $request->qtAlunos;
        
        try {
            $turma->save();
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
            $turma = Trumas::find($id);
            $turma->delete();
            return array('resp' => 's');
        } catch (\Throwable $th) {
            return array('resp' => 'n', 'msg' => 'Erro ao excluir registro');
        }
    }
}