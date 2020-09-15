<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Date\Date;

class Calendar extends Model
{

    protected $fillable = [
        "user_id",
        "course_id",
        "descripcion",
        "event_name",
        "start_date",
        "end_date",
    ];


    public function getStartDateAttribute($date)
    {
        return new Date($date);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
