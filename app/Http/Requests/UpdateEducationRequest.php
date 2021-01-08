<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateEducationRequest.
 */
class UpdateEducationRequest extends FormRequest
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
            'qualification' => ['string', 'max:191'],
            'organisation' => ['string', 'max:191'],
            'date_from' => ['date'],
            'date_to' => ['nullable', 'date'],
            'ongoing' => ['boolean'],
            'active' => ['boolean'],
        ];
    }
}
