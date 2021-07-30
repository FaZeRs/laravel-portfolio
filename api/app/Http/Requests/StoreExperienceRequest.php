<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreExperienceRequest.
 */
class StoreExperienceRequest extends FormRequest
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
            'position' => ['required', 'string', 'max:191'],
            'employer' => ['required', 'string', 'max:191'],
            'website' => ['nullable', 'string', 'max:191'],
            'date_from' => ['required', 'date'],
            'date_to' => ['nullable', 'date'],
            'ongoing' => ['boolean'],
            'active' => ['boolean'],
        ];
    }
}
