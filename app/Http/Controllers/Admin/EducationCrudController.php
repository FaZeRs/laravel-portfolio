<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\CrudPanel;
// VALIDATION: change the requests to match your own file names if you need form validation
use Backpack\CRUD\app\Http\Controllers\CrudController;
use App\Http\Requests\EducationRequest as StoreRequest;
use App\Http\Requests\EducationRequest as UpdateRequest;

/**
 * Class EducationCrudController.
 * @property-read CrudPanel $crud
 */
class EducationCrudController extends CrudController
{
    public function setup()
    {
        /*
        |--------------------------------------------------------------------------
        | CrudPanel Basic Information
        |--------------------------------------------------------------------------
        */
        $this->crud->setModel('App\Models\Education');
        $this->crud->setRoute(config('backpack.base.route_prefix').'/education');
        $this->crud->setEntityNameStrings('education', 'education');

        /*
        |--------------------------------------------------------------------------
        | CrudPanel Configuration
        |--------------------------------------------------------------------------
        */
        $this->crud->addColumns([
            ['name' => 'qualification', 'type' => 'text', 'label' => 'Qualification'],
            ['name' => 'organisation', 'type' => 'text', 'label' => 'Organisation'],
            ['name' => 'from', 'type' => 'date', 'label' => 'From', 'format' => 'Y'],
            ['name' => 'to', 'type' => 'date', 'label' => 'To', 'format' => 'Y'],
            ['name' => 'ongoing', 'type' => 'boolean', 'label' => 'Ongoing'],
        ]);
        $this->crud->addFields([
            ['name' => 'qualification', 'type' => 'text', 'label' => 'Qualification'],
            ['name' => 'organisation', 'type' => 'text', 'label' => 'Organisation'],
            ['name' => 'from', 'type' => 'date_picker', 'label' => 'From', 'date_picker_options' => ['format' => 'yyyy', 'viewMode' => 'years', 'minViewMode' => 'years']],
            ['name' => 'to', 'type' => 'date_picker', 'label' => 'To', 'date_picker_options' => ['format' => 'yyyy', 'viewMode' => 'years', 'minViewMode' => 'years']],
            ['name' => 'ongoing', 'type' => 'checkbox', 'label' => 'Ongoing'],
        ]);

        // add asterisk for fields that are required in EducationRequest
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
