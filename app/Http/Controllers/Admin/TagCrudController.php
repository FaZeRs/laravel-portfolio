<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\TagRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

class TagCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        CRUD::setModel('App\Models\Tag');
        CRUD::setRoute(config('backpack.base.route_prefix').'/tag');
        CRUD::setEntityNameStrings('tag', 'tags');
    }

    protected function setupListOperation()
    {
        CRUD::addColumns([
            ['name' => 'title', 'type' => 'text', 'label' => 'Title'],
            ['name' => 'color', 'type' => 'text', 'label' => 'Color'],
        ]);
    }

    protected function setupCreateOperation()
    {
        CRUD::setValidation(TagRequest::class);
        CRUD::addFields([
            ['name' => 'title', 'type' => 'text', 'label' => 'Title'],
            ['name' => 'color', 'type' => 'color', 'label' => 'Color'],
        ]);
    }

    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
