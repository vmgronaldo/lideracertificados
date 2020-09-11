<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
        'category_id',
        'trainer_id',
        'curso',
        'time',
        'extension',
        'status'
    ];


    public function category()
    {
        return $this->belongsTo(Categories::class);
    }

    public function calendar()
    {
        return $this->belongsTo(Calendar::class);
    }

    public function trainer()
    {
        return $this->belongsTo(Trainer::class);
    }

}
