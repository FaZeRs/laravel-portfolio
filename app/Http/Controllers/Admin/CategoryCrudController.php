<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use App\Http\Requests\CategoryRequest;

class CategoryCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        CRUD::setModel('App\Models\Category');
        CRUD::setRoute(config('backpack.base.route_prefix').'/category');
        CRUD::setEntityNameStrings('category', 'categories');
    }

    protected function setupListOperation()
    {
        CRUD::addColumn(['name' => 'title', 'type' => 'text', 'label' => 'Title']);
    }

    protected function setupCreateOperation()
    {
        CRUD::setValidation(CategoryRequest::class);
        CRUD::addField(['name' => 'title', 'type' => 'text', 'label' => 'Title']);
    }

    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
