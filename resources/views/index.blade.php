@php
    $config = [
        'appName' => config('app.name'),
        'locale' => app()->getLocale(),
        'locales' => config('app.locales'),
        'year' => date('Y'),
        'googleReCaptcha' => config('app.google_recaptcha'),
    ];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="env" content="{{ app()->environment() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

    <title>{{ config('app.name') }}</title>

    {{-- Meta --}}
    <meta name="description" content="Nauris Linde personal portfolio">
    <meta name="keywords" content="Nauris Linde, Portfolio, Web Developer, Website, Web, Resume, CV, Curriculum Vitae">
    <meta name="author" content="Nauris Linde">
    <meta name="robots" content="all,follow">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{{ config('app.name') }}">
    <meta property="og:image" content="favicon.ico">
    <meta property="og:description" content="Nauris Linde personal portfolio">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{{ config('app.name') }}">
    <meta name="twitter:description" content="Nauris Linde personal portfolio">

    <link rel="alternate" hreflang="en" href="https://naurislinde.com"/>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>
</head>
<body>
    <div id="app"></div>

    {{-- Global configuration object --}}
    <script>window.config = @json($config);</script>

    {{-- Load the application scripts --}}
    @if (app()->environment('local'))
        <script src="{{ mix('js/app.js') }}"></script>
    @else
        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    @endif
    @include('includes.partials.ga')
</body>
</html>
