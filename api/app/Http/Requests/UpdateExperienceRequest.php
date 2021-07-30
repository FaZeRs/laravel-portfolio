<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateExperienceRequest.
 */
class UpdateExperienceRequest extends FormRequest
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
            'position' => ['string', 'max:191'],
            'employer' => ['string', 'max:191'],
            'website' => ['nullable', 'string', 'max:191'],
            'date_from' => ['date'],
            'date_to' => ['nullable', 'date'],
            'ongoing' => ['boolean'],
            'active' => ['boolean'],
        ];
    }
}
