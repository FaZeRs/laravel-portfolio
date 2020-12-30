<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateLinkRequest.
 */
class UpdateLinkRequest extends FormRequest
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
            'title' => ['string', 'max:191'],
            'project_id' => ['exists:projects,id'],
            'url' => ['url'],
            'icon' => ['string'],
            'order' => ['numeric'],
        ];
    }
}
