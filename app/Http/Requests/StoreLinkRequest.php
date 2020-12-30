<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreProjectRequest.
 */
class StoreLinkRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:191'],
            'project_id' => ['required', 'exists:projects,id'],
            'url' => ['required', 'url'],
            'icon' => ['required'],
            'order' => ['numeric'],
        ];
    }
}
