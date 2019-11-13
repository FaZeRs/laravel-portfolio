<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use App\Http\Requests\ExperienceRequest;

class ExperienceCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        CRUD::setModel('App\Models\Experience');
        CRUD::setRoute(config('backpack.base.route_prefix').'/experience');
        CRUD::setEntityNameStrings('experience', 'experiences');
    }

    protected function setupListOperation()
    {
        CRUD::addColumns([
            ['name' => 'position', 'type' => 'text', 'label' => 'Position'],
            ['name' => 'employer', 'type' => 'text', 'label' => 'Employer'],
            ['name' => 'from', 'type' => 'date', 'label' => 'From', 'format' => 'M-Y'],
            ['name' => 'to', 'type' => 'date', 'label' => 'To', 'format' => 'M-Y'],
            ['name' => 'ongoing', 'type' => 'boolean', 'label' => 'Ongoing'],
        ]);
    }

    protected function setupCreateOperation()
    {
        CRUD::setValidation(ExperienceRequest::class);
        CRUD::addFields([
            ['name' => 'position', 'type' => 'text', 'label' => 'Position'],
            ['name' => 'employer', 'type' => 'text', 'label' => 'Employer'],
            ['name' => 'website', 'type' => 'url', 'label' => 'Website'],
            ['name' => 'from', 'type' => 'date_picker', 'label' => 'From', 'date_picker_options' => ['format' => 'mm-yyyy', 'viewMode' => 'months', 'minViewMode' => 'months']],
            ['name' => 'to', 'type' => 'date_picker', 'label' => 'To', 'date_picker_options' => ['format' => 'mm-yyyy', 'viewMode' => 'months', 'minViewMode' => 'months']],
            ['name' => 'ongoing', 'type' => 'checkbox', 'label' => 'Ongoing'],
            ['name' => 'logo', 'type' => 'image', 'upload' => true, 'crop' => false, 'aspect_ratio' => 1, 'disk' => 'public'],
        ]);
    }

    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
