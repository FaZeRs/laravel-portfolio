<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Database\Seeders\Traits\TruncateTable;

class UserTableSeeder extends Seeder
{
    use TruncateTable;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncate('users');
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' =>'secret',
            'is_admin' => 1,
        ]);
    }
}
