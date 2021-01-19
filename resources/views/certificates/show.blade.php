<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="UTF-8">
    <title>Certificado {{$certificate->model->firstname}} {{$certificate->model->lastname}} | Lidera EHSQ</title>
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet">
</head>
<body>
<div id="pagina">

    <p class="otorga">Otorgado a:</p>
    <p class="participante">{{$certificate->model->lastname}}, {{$certificate->model->firstname}}</p>
    <p class="identificacion">Identificado con <strong>N° DNI: </strong>{{$certificate->model->dni}}</p>
    <p class="capacitacion">Por haber participado satisfactoriamente en la capacitación de:</p>
    <p class="curso"><strong>“{{$certificate->course->curso}}”</strong></p>


    @if ($certificate->course->calendar->fin)
        <p class="fecha">Realizado el {{ optional($certificate->course->calendar->start_date)->format('D')}} {{optional($certificate->course->calendar->start_date)->format('d')}} {{optional($certificate->course->calendar->fecha_fin) ? 'al':''}} {{optional($certificate->course->calendar->fecha_fin)->format('D')}} {{optional($certificate->course->calendar->fecha_fin)->format('d')}}  de {{optional($certificate->course->calendar->fecha_fin)->format('M')}}  del {{optional($certificate->course->calendar)->start_date->format('Y')}} por la empresa Lidera EHSQ.</p>
    @else
        <p class="fecha">Realizado el {{ optional($certificate->course->calendar->start_date)->format('D')}} {{optional($certificate->course->calendar->start_date)->format('d')}} de {{optional($certificate->course->calendar->start_date)->format('M')}} del {{optional($certificate->course->calendar)->start_date->format('Y')}} por la empresa Lidera EHSQ.</p>
    @endif

    <p class="duracion">Con una duración de {{$certificate->course->time}} {{$certificate->course->extension}} académicas.</p>

    <div class="firma_trainer">
        <img src="{{url($certificate->course->trainer->firma)}}" width="160" alt="Firma">
        <p class="name">{{$certificate->course->trainer->firstname}} {{$certificate->course->trainer->lastname}}</p>
        <p class="cargo"><strong>{{$certificate->course->trainer->profesion}}</strong></p>
        <p class="extra"><strong>CAPACITADOR</strong></p>
        <p class="cip"><strong>CIP: {{$certificate->course->trainer->cip}}</strong></p>
    </div>


    <div class="firma_david">
        <img src="{{asset('img/firma_david.png')}}" width="160" alt="Firma">
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
