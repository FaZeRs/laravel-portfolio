<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreEducationRequest.
 */
class StoreEducationRequest extends FormRequest
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
            'qualification' => ['required', 'string', 'max:191'],
            'organisation' => ['required', 'string', 'max:191'],
            'from' => ['required', 'date'],
            'to' => ['date'],
            'ongoing' => ['boolean'],
            'active' => ['boolean'],
        ];
    }
}
