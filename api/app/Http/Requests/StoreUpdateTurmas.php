<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateTurmas extends FormRequest
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
            'CodTurma' => 'required|string|max:255|min:3|unique:turmas',
            'dtInicio' => 'required|string|max:10|min:3',
            'dtFim' => 'required|string|max:10|min:3',
            'qtAlunos' => 'required'
        ];
    }
}
