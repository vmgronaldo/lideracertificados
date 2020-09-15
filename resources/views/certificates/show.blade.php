<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="UTF-8">
    <title>Certificado {{$certificate->model->firstname}} {{$certificate->model->lastname}} | Lidera EHSQ</title>
    <link rel="stylesheet" href="{{asset('css/style.css')}}">

</head>
<body>
<div id="pagina">

    <p class="otorga">Otorgado a:</p>
    <p class="participante">{{$certificate->model->lastname}}, {{$certificate->model->firstname}}</p>
    <p class="identificacion">Identificado con <strong>N° DNI: </strong>{{$certificate->model->dni}}</p>
    <p class="capacitacion">Por haber participado satisfactoriamente en la capacitación de:</p>
    <p class="curso"><strong>“{{$certificate->course->curso}}”</strong></p>
    @if ($certificate->course->calendar)
        <p class="fecha">Realizado el {{ $certificate->course->calendar->start_date->format('D')}} {{$certificate->course->calendar->start_date->format('d')}} de {{$certificate->course->calendar->start_date->format('M')}} del {{$certificate->course->calendar->start_date->format('Y')}} por la empresa Lidera EHSQ.</p>
    @else

    @endif

    <p class="duracion">Con una duración de {{$certificate->course->time}} {{$certificate->course->extension}}.</p>

    <div class="firma_trainer">
        <img src="{{url($certificate->course->trainer->firma)}}" width="200" alt="Firma">
        <p class="name">{{$certificate->course->trainer->firstname}} {{$certificate->course->trainer->lastname}}</p>
        <p class="cargo"><strong>{{$certificate->course->trainer->profesion}}</strong></p>
        <p class="extra"><strong>EXPOSITOR</strong></p>
    </div>


    <div class="firma_david">
        <img src="{{asset('img/firma_david.png')}}" width="200" alt="Firma">
        <p class="name">David M. Arroyo Delgado</p>
        <p class="cargo"><strong>GERENTE GENERAL</strong></p>
        <p class="extra"><strong>LIDERA EHSQ</strong></p>
    </div>


</div>
</body>

</html>
<!-- partial -->

</body>
</html>
