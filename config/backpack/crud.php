<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Backpack\CRUD preferences
    |--------------------------------------------------------------------------
    */

    /*
    |------------
    | CREATE & UPDATE
    |------------
    */
    // Where do you want to redirect the user by default, after a CRUD entry is saved in the Add or Edit forms?
    'default_save_action' => 'save_and_back', //options: save_and_back, save_and_edit, save_and_new

    // When the user chooses "save and back" or "save and new", show a bubble
    // for the fact that the default save action has been changed?
    'show_save_action_change' => true, //options: true, false

    // When using tabbed forms (create & update), what kind of tabs would you like?
    'tabs_type' => 'horizontal', //options: horizontal, vertical

    // How would you like the validation errors to be shown?
    'show_grouped_errors' => true,
    'show_inline_errors' => true,

    // Here you may override the css-classes for the content section of the create view globally
    // To override per view use $this->crud->setCreateContentClass('class-string')
    'create_content_class' => 'col-md-8 col-md-offset-2',

    // Here you may override the css-classes for the content section of the edit view globally
    // To override per view use $this->crud->setEditContentClass('class-string')
    'edit_content_class'   => 'col-md-8 col-md-offset-2',

    // Here you may override the css-classes for the content section of the revisions timeline view globally
    // To override per view use $this->crud->setRevisionsTimelineContentClass('class-string')
    'revisions_timeline_content_class'   => 'col-md-10 col-md-offset-1',

    /*
    |------------
    | READ
    |------------
    */

    // LIST VIEW (table view)

    // enable the datatables-responsive plugin, which hides columns if they don't fit?
    // if not, a horizontal scrollbar will be shown instead
    'responsive_table' => true,

    // stores pagination and filters in localStorage for two hours
    // whenever the user tries to see that page, backpack loads the previous pagination and filtration
    'persistent_table' => false,

    // How many items should be shown by default by the Datatable?
    // This value can be overwritten on a specific CRUD by calling
    // $this->crud->setDefaultPageLength(50);
    'default_page_length' => 25,

    // A 1D array of options which will be used for both the displayed option and the value, or
    // A 2D array in which the first array is used to define the value options and the second array the displayed options
    // If a 2D array is used, strings in the right hand array will be automatically run through trans()
    'page_length_menu' => [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'backpack::crud.all']],

    // Here you may override the css-class for the content section of the list view globally
    // To override per view use $this->crud->setListContentClass('class-string')
    'list_content_class' => 'col-md-12',

    // SHOW (PREVIEW)

    // Here you may override the css-classes for the content section of the show view globally
    // To override per view use $this->crud->setShowContentClass('class-string')
    'show_content_class'   => 'col-md-8 col-md-offset-2',

    /*
    |------------
    | DELETE
    |------------
    */

    /*
    |------------
    | REORDER
    |------------
    */

    // Here you may override the css-classes for the content section of the reorder view globally
    // To override per view use $this->crud->setReorderContentClass('class-string')
    'reorder_content_class'   => 'col-md-8 col-md-offset-2',

    /*
    |------------
    | DETAILS ROW
    |------------
    */

    /*
    |-------------------
    | TRANSLATABLE CRUDS
    |-------------------
    */

    'show_translatable_field_icon' => true,
    'translatable_field_icon_position' => 'right', // left or right

    'locales' => [
        'en' => 'English',
         'lv' => 'Latvian',
    ],

];
