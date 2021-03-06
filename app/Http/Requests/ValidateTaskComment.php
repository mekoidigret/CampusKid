<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateTaskComment extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'task_id' => ['required', 'exists:App\Task,id'],
            'body' => ['required'],
        ];
    }

    public function messages()
    {
        return [
            'task_id.required' => 'Please provide a Task ID.',
            'task_id.exists' => 'Task does not exist.',
            'body.required' => 'Please provide a body.',
        ];
    }
}
