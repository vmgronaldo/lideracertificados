<?php

namespace App\Imports;

use App\Certificates as Model;
use App\Abstracts\Import;
use App\Http\Requests\Common\Certificates as Request;

class Certificates extends import
{
    public function model(array $row)
    {
        return new Model($row);
    }

    public function map($row): array
    {
        $row = parent::map($row);

        $row['model_type'] = 'App\Participants';
        $row['model_id'] = $this->getModelId($row);
        $row['date'] = $this->getDate($row);

       // var_dump($row);
        //exit();

        return $row;
    }

    public function rules(): array
    {
        return (new Request())->rules();
    }

}
