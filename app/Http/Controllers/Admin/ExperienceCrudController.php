<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Http\Controllers\CrudController;

// VALIDATION: change the requests to match your own file names if you need form validation
use App\Http\Requests\ExperienceRequest as StoreRequest;
use App\Http\Requests\ExperienceRequest as UpdateRequest;
use Backpack\CRUD\CrudPanel;

/**
 * Class ExperienceCrudController
 * @package App\Http\Controllers\Admin
 * @property-read CrudPanel $crud
 */
class ExperienceCrudController extends CrudController
{
    public function setup()
    {
        /*
        |--------------------------------------------------------------------------
        | CrudPanel Basic Information
        |--------------------------------------------------------------------------
        */
        $this->crud->setModel('App\Models\Experience');
        $this->crud->setRoute(config('backpack.base.route_prefix') . '/experience');
        $this->crud->setEntityNameStrings('experience', 'experiences');

        /*
        |--------------------------------------------------------------------------
        | CrudPanel Configuration
        |--------------------------------------------------------------------------
        */
        $this->crud->addColumns([
            ['name' => 'position', 'type' => 'text', 'label' => 'Position'],
            ['name' => 'employer', 'type' => 'text', 'label' => 'Employer'],
            ['name' => 'from', 'type' => 'date', 'label' => 'From', 'format' => 'M-Y'],
            ['name' => 'to', 'type' => 'date', 'label' => 'To', 'format' => 'M-Y'],
            ['name' => 'ongoing', 'type' => 'boolean', 'label' => 'Ongoing'],
        ]);
        $this->crud->addFields([
            ['name' => 'position', 'type' => 'text', 'label' => 'Position'],
            ['name' => 'employer', 'type' => 'text', 'label' => 'Employer'],
            ['name' => 'website', 'type' => 'url', 'label' => 'Website'],
            ['name' => 'from', 'type' => 'date_picker', 'label' => 'From', 'date_picker_options' => ['format' => 'mm-yyyy', 'viewMode' => 'months', 'minViewMode' => 'months']],
            ['name' => 'to', 'type' => 'date_picker', 'label' => 'To', 'date_picker_options' => ['format' => 'mm-yyyy', 'viewMode' => 'months', 'minViewMode' => 'months']],
            ['name' => 'ongoing', 'type' => 'checkbox', 'label' => 'Ongoing'],
            ['name' => 'logo', 'type' => 'image', 'upload' => true, 'crop' => false, 'aspect_ratio' => 1, 'disk' => 'public'],
        ]);

        // add asterisk for fields that are required in ExperienceRequest
        $this->crud->setRequiredFields(StoreRequest::class, 'create');
        $this->crud->setRequiredFields(UpdateRequest::class, 'edit');
    }

    public function store(StoreRequest $request)
    {
        // your additional operations before save here
        $redirect_location = parent::storeCrud($request);
        // your additional operations after save here
        // use $this->data['entry'] or $this->crud->entry
        return $redirect_location;
    }

    public function update(UpdateRequest $request)
    {
        // your additional operations before save here
        $redirect_location = parent::updateCrud($request);
        // your additional operations after save here
        // use $this->data['entry'] or $this->crud->entry
        return $redirect_location;
    }
}
