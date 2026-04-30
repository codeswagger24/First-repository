<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    // This tells Laravel it's okay to mass-assign these specific columns
    protected $fillable = ['title', 'is_done'];
}