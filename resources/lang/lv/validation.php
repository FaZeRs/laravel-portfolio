<?php

return [

	/*
	|--------------------------------------------------------------------------
	| Validation Language Lines
	|--------------------------------------------------------------------------
	|
	| The following language lines contain the default error messages used by
	| the validator class. Some of these rules have multiple versions such
	| as the size rules. Feel free to tweak each of these messages here.
	|
	*/

	'accepted'             => 'Laukam :attribute jābūt apstiprinātam.',
	'active_url'           => 'Lauks :attribute nav derīgs URL.',
	'after'                => 'Laukam :attribute jabūt datumam pēc :date.',
	'after_or_equal'       => 'Laukam :attribute jābūt datumam pēc vai vienādam ar :date.',
	'alpha'                => 'Lauks :attribute var saturēt tikai burtus.',
	'alpha_dash'           => 'Lauks :attribute var saturēt tikai burtus, skaitļus un domuzīmes.',
	'alpha_num'            => 'Lauks :attribute var saturēt tikai burtus un skaitļus.',
	'array'                => 'Lauks :attribute var būt tikai masīvs.',
	'before'               => 'Laukam :attribute jābūt datumam pirms :date.',
	'before_or_equal'      => 'Laukam :attribute jābūt datumam pirms vai vienādam ar :date.',
	'between'              => [
		'numeric' => 'Lauka :attribute garumam jābūt starp :min un :max garam.',
		'file'    => 'Faila :attribute izmēram jābūt starp :min un :max kilobaitiem.',
		'string'  => 'Lauka :attribute garumam jābūt starp :min un :max rakstu zīmēm.',
		'array'   => 'Masīvam :attribute jāsatur starp :min un :max priekšmetiem.',
	],
	'boolean'              => 'Laukam :attribute jābūt patiesam vai nepatiesam.',
	'confirmed'            => 'Lauka :attribute apstiprinājums nesakrīt.',
	'date'                 => 'Lauks :attribute nav derīgs datums.',
	'date_format'          => 'Lauks :attribute nesakrīt ar formātu :format.',
	'different'            => 'Lauki :attribute un :other jābūt atšķirīgiem.',
	'digits'               => 'Laukam :attribute jābūt :digits ciparus garam.',
	'digits_between'       => 'Laukam :attribute jābūt starp :min un :max cipariem.',
	'dimensions'           => 'The :attribute has invalid image dimensions.',
	'distinct'             => 'Lauka :attribute vērtība ir dublikāts.',
	'email'                => 'Laukam :attribute jābūt derīgai e-pasta adresei.',
	'exists'               => 'Izvēlētā lauka :attribute vērtība ir nederīga.',
	'file'                 => 'Laukam :attribute jābūt failam.',
	'filled'               => 'Laukam :attribute jābūt aizpildītam.',
	'image'                => 'Laukam :attribute jābūt bildei.',
	'in'                   => 'Izvēlētā lauka :attribute vērtība ir nederīga.',
	'in_array'             => 'Lauka :attribute vērtība neeksistē iekš :other.',
	'integer'              => 'Laukam :attribute jābūt veselam skaitlim.',
	'ip'                   => 'Laukam :attribute jābūt derīgai IP adresei.',
	'ipv4'                 => 'Laukam :attribute jābūt derīgai IPv4 adresei.',
	'ipv6'                 => 'Laukam :attribute jābūt derīgai IPv6 adresei.',
	'json'                 => 'Laukam :attribute jābūt derīgai JSON virknei.',
	'max'                  => [
		'numeric' => 'Lauks :attribute nedrīkst būt garāks par :max.',
		'file'    => 'Fails :attribute nedrīgs būt lielāks par :max kilobaitiem.',
		'string'  => 'Lauks :attribute nedrīgs būt garāks par :max rakstu zīmēm.',
		'array'   => 'Masīvs :attribute nedrīkst saturēt vairāk kā :max priekšmetus.',
	],
	'mimes'                => 'Laukam :attribute jābūt faila tipam: :values.',
	'mimetypes'            => 'Laukam :attribute jābūt faila tipam: :values.',
	'min'                  => [
		'numeric' => 'Laukam :attribute jābūt vismaz :min garam.',
		'file'    => 'Failam :attribute jābūt vismaz :min kilobaitiem lielam.',
		'string'  => 'Laukam :attribute jābūt vismaz :min rakstu zīmēm.',
		'array'   => 'Masīvā :attribute jābūt vismaz :min priekšmeti.',
	],
	'not_in'               => 'Izvēlētā lauka :attribute vērtība ir nederīga.',
	'numeric'              => 'Laukam :attribute ir jābūt skaitlim.',
	'present'              => 'Lauka :attribute vērtībai ir jābūt norādītai.',
	'regex'                => 'Lauka :attribute formāts ir nederīgs.',
	'required'             => 'Lauks :attribute ir obligāts.',
	'required_if'          => 'Lauks :attribute ir obligāts, kad :other ir :value.',
	'required_unless'      => 'Lauks :attribute ir obligāts, ja vien :other ir iekš :values.',
	'required_with'        => 'Lauks :attribute ir obligāts, kad :values ir norādītas.',
	'required_with_all'    => 'Lauks :attribute ir obligāts, kad :values ir norādītas.',
	'required_without'     => 'Lauks :attribute ir obligāts, kad :values nav norādītas.',
	'required_without_all' => 'Lauks :attribute ir obligāts, kad neviens no :values nav norādīts.',
	'same'                 => 'Laukiem :attribute un :other jāsakrīt.',
	'size'                 => [
		'numeric' => 'Laukam :attribute jābūt :size garam.',
		'file'    => 'Failam :attribute jābūt :size kilobaitiem.',
		'string'  => 'Laukam :attribute jāsatur :size rakstu zīmes.',
		'array'   => 'Masīvam :attribute jāsatur :size priekšmetus.',
	],
	'string'               => 'Laukam :attribute jābūt virknei.',
	'timezone'             => 'Laukam :attribute jābūt derīgai laika zonai.',
	'unique'               => 'Lauks :attribute ir jau aizņemts.',
	'uploaded'             => 'Neizdevās augšuplādēt lauku :attribute.',
	'url'                  => 'Lauka :attribute formāts ir nederīgs.',
	'captcha'              => 'Lūdzu, apstipriniet, ka neesat robots.',

	/*
	|--------------------------------------------------------------------------
	| Custom Validation Language Lines
	|--------------------------------------------------------------------------
	|
	| Here you may specify custom validation messages for attributes using the
	| convention "attribute.rule" to name the lines. This makes it quick to
	| specify a specific custom language line for a given attribute rule.
	|
	*/

	'custom' => [
		'attribute-name' => [
			'rule-name' => 'custom-message',
		],
	],

	/*
	|--------------------------------------------------------------------------
	| Custom Validation Attributes
	|--------------------------------------------------------------------------
	|
	| The following language lines are used to swap attribute place-holders
	| with something more reader friendly such as E-Mail Address instead
	| of "email". This simply helps us make messages a little cleaner.
	|
	*/

	'attributes' => [],

];
