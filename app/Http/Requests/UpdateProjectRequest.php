<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class UpdateProjectRequest.
 */
class UpdateProjectRequest extends FormRequest
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
            'category_id' => ['exists:categories,id'],
            'description' => [],
            'image' => ['image'],
            'links' => [],
            'status' => [Rule::in(['unknown', 'open', 'scheduled', 'in_development', 'completed', 'cancelled'])],
            'visible' => ['boolean'],
            'order' => ['numeric'],
            'active' => ['boolean'],
        ];
    }
}
