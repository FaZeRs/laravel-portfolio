@component('mail::message')
# {{ __('labels.emails.contact.title') }}

<b>{{ __('labels.emails.contact.name') }}</b>
{{ $request['name'] }}

<b>{{ __('labels.emails.contact.email') }}</b>
{{ $request['email'] }}

<b>{{ __('labels.emails.contact.message') }}</b>
{{ $request['message'] }}

@endcomponent