<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateAluno extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nome' => 'required|string|max:255|min:3',
            'email' => 'required|email|unique:alunos',
            'cpf' => 'required|integer|unique:alunos',
            'sexo' => 'required|integer|max:10|min:1',
            'dtNascimento' => 'required|string|max:10|min:2',
        ];
    }
}
