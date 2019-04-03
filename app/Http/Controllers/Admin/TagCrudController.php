<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\TagRequest as StoreRequest;
// VALIDATION: change the requests to match your own file names if you need form validation
use App\Http\Requests\TagRequest as UpdateRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;

/**
 * Class TagCrudController.
 * @property-read CrudPanel $crud
 */
class TagCrudController extends CrudController
{
    public function setup()
    {
        /*
        |--------------------------------------------------------------------------
        | CrudPanel Basic Information
        |--------------------------------------------------------------------------
        */
        $this->crud->setModel('App\Models\Tag');
        $this->crud->setRoute(config('backpack.base.route_prefix').'/tag');
        $this->crud->setEntityNameStrings('tag', 'tags');

        /*
        |--------------------------------------------------------------------------
        | CrudPanel Configuration
        |--------------------------------------------------------------------------
        */

        $this->crud->addColumn(['name' => 'title', 'type' => 'text', 'label' => 'Title']);
        $this->crud->addColumn(['name' => 'color', 'type' => 'text', 'label' => 'Color']);
        $this->crud->addField(['name' => 'title', 'type' => 'text', 'label' => 'Title']);
        $this->crud->addField(['name' => 'color', 'type' => 'color', 'label' => 'Color']);

        // add asterisk for fields that are required in TagRequest
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
