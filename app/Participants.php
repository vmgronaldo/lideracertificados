<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Participants extends Model
{
    use Notifiable;
    protected $fillable = [
        'tipo',
        'firstname',
        'lastname',
        'email',
        'check_dni',
        'dni',
        'cordinador'
    ];

    public function certificates()
    {
        return $this->morphMany(Certificates::class,'model');
    }
    public function scopeBuscarpor($query, $tipo, $buscar) {
        if ( ($tipo) && ($buscar) ) {
            return $query->where($tipo,'like',"%$buscar%");
        }
    }

}
