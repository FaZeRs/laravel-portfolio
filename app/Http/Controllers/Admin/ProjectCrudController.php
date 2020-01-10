<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ProjectRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

class ProjectCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        CRUD::setModel('App\Models\Project');
        CRUD::setRoute(config('backpack.base.route_prefix').'/project');
        CRUD::setEntityNameStrings('project', 'projects');
    }

    protected function setupListOperation()
    {
        CRUD::addColumns([
            ['name' => 'title', 'type' => 'text', 'label' => 'Title'],
            ['name' => 'category.title', 'type' => 'text', 'label' => 'Category'],
        ]);
    }

    protected function setupCreateOperation()
    {
        CRUD::setValidation(ProjectRequest::class);
        CRUD::addFields([
            ['name' => 'title', 'type' => 'text', 'label' => 'Title'],
            [
                'name'      => 'category_id',
                'type'      => 'select2',
                'label'     => 'Category',
                'entity'    => 'category',
                'attribute' => 'title',
                'model'     => 'App\Models\Category',
            ],
            [
                'name' => 'image', 'type' => 'image', 'upload' => true, 'crop' => false, 'aspect_ratio' => 1,
                'disk' => 'public',
            ],
            ['name' => 'description', 'type' => 'simplemde', 'label' => 'Description'],
            ['name' => 'status', 'type' => 'enum', 'label', 'Status'],
            ['name' => 'visible', 'type' => 'checkbox', 'label' => 'Visible', 'default' => true],
            ['name' => 'order', 'type' => 'number', 'label' => 'Order'],
            [
                'label'      => 'Tags',
                'type'       => 'select2_multiple',
                'name'       => 'tags',
                'entity'     => 'tags',
                'attribute'  => 'title',
                'model'      => 'App\Models\Tag',
                'pivot'      => true,
                'select_all' => true,
            ],
        ]);
        CRUD::addField([
            'name' => 'slug', 'type' => 'text', 'label' => 'Slug', 'attributes' => ['disabled' => 'disabled'],
        ], 'update')->afterField('title');
        CRUD::addField([
            'name'            => 'links',
            'label'           => 'Links',
            'type'            => 'table',
            'entity_singular' => 'link',
            'columns'         => [
                'title' => 'Title',
                'url'   => 'Url',
                'icon'  => 'Icon',
            ],
            'max'             => 5,
            'min'             => 0,
        ], 'update')->afterField('order');
    }

    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
