<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\CrudPanel;
// VALIDATION: change the requests to match your own file names if you need form validation
use App\Http\Requests\ProjectRequest as StoreRequest;
use App\Http\Requests\ProjectRequest as UpdateRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;

/**
 * Class ProjectCrudController.
 * @property-read CrudPanel $crud
 */
class ProjectCrudController extends CrudController
{
    public function setup()
    {
        /*
        |--------------------------------------------------------------------------
        | CrudPanel Basic Information
        |--------------------------------------------------------------------------
        */
        $this->crud->setModel('App\Models\Project');
        $this->crud->setRoute(config('backpack.base.route_prefix').'/project');
        $this->crud->setEntityNameStrings('project', 'projects');

        /*
        |--------------------------------------------------------------------------
        | CrudPanel Configuration
        |--------------------------------------------------------------------------
        */

        // TODO: remove setFromDb() and manually define Fields and Columns
        //$this->crud->setFromDb();
        $this->crud->addColumns([
            ['name' => 'title', 'type' => 'text', 'label' => 'Title'],
        ]);
        $this->crud->addFields([
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
            ['name' => 'description', 'type' => 'summernote', 'label' => 'Description'],
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
            [
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
            ],
        ]);
        $this->crud->addField([
            'name' => 'slug', 'type' => 'text', 'label' => 'Slug', 'attributes' => ['disabled' => 'disabled'],
        ], 'update')->afterField('title');

        // add asterisk for fields that are required in ProjectCrudControllerRequest
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
