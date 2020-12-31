<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateSettingsRequest.
 */
class UpdateSettingsRequest extends FormRequest
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
            'app_name' => ['string', 'max:191'],
            'name' => ['string', 'max:191'],
            'photo' => ['nullable', 'image'],
            'about_you' => ['string'],
            'contact_email' => ['email'],
            'profession' => ['string', 'max:191'],
            'facebook' => ['nullable', 'url', 'max:191'],
            'twitter' => ['nullable', 'url', 'max:191'],
            'linkedin' => ['nullable', 'url', 'max:191'],
            'github' => ['nullable', 'url', 'max:191'],
            'gitlab' => ['nullable', 'url', 'max:191'],
            'bitbucket' => ['nullable', 'url', 'max:191'],
        ];
    }
}
