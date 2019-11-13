<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\EducationRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

class EducationCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        CRUD::setModel('App\Models\Education');
        CRUD::setRoute(config('backpack.base.route_prefix').'/education');
        CRUD::setEntityNameStrings('education', 'education');
    }

    protected function setupListOperation()
    {
        CRUD::addColumns([
            ['name' => 'qualification', 'type' => 'text', 'label' => 'Qualification'],
            ['name' => 'organisation', 'type' => 'text', 'label' => 'Organisation'],
            ['name' => 'from', 'type' => 'date', 'label' => 'From', 'format' => 'Y'],
            ['name' => 'to', 'type' => 'date', 'label' => 'To', 'format' => 'Y'],
            ['name' => 'ongoing', 'type' => 'boolean', 'label' => 'Ongoing'],
        ]);
    }

    protected function setupCreateOperation()
    {
        CRUD::setValidation(EducationRequest::class);
        CRUD::addFields([
            ['name' => 'qualification', 'type' => 'text', 'label' => 'Qualification'],
            ['name' => 'organisation', 'type' => 'text', 'label' => 'Organisation'],
            ['name' => 'from', 'type' => 'date_picker', 'label' => 'From', 'date_picker_options' => ['format' => 'yyyy', 'viewMode' => 'years', 'minViewMode' => 'years']],
            ['name' => 'to', 'type' => 'date_picker', 'label' => 'To', 'date_picker_options' => ['format' => 'yyyy', 'viewMode' => 'years', 'minViewMode' => 'years']],
            ['name' => 'ongoing', 'type' => 'checkbox', 'label' => 'Ongoing'],
        ]);
    }

    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
