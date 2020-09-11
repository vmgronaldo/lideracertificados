<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;


class Participants extends Model
{
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'dni'
    ];

    public function certificates()
    {
        return $this->morphMany(Certificates::class,'model');
    }


}
