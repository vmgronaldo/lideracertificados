<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    protected $casts = [
        'start_date' => 'datetime:Y-m-d H:00',
        'end_date' => 'datetime:Y-m-d H:00',
    ];
    protected $fillable = [
        "user_id",
        "course_id",
        "descripcion",
        "event_name",
        "start_date",
        "end_date",
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
