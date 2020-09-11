<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="UTF-8">
    <title>CodePen - CSS - Diploma  Fry</title>
    <link rel="stylesheet" href="{{asset('css/style.css')}}">

</head>
<body>
<!-- partial:index.partial.html -->
<head>
    <meta charset="UTF-8" />
    <title>Diploma Fry</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>

<body>
<div id="pagina">

    <p class="otorga">Otorgado a:</p>
    <p class="participante">{{$certificate->model->firstname}} {{$certificate->model->lastname}} Melgarejo Gabriel</p>
    <p class="identificacion">Identificado con <strong>N° DNI: </strong>{{$certificate->model->dni}}</p>
    <p class="capacitacion">Por haber participado satisfactoriamente en la capacitación de:</p>
    <p class="curso"><strong>“{{$certificate->course->curso}}”</strong></p>
    <p class="fecha">Realizado el sábado, {{$certificate->course->date}} por la empresa Lidera EHSQ.</p>
    <p class="duracion">Con una duración de {{$certificate->course->time}} {{$certificate->course->extension}}.</p>

    <div class="firma_david">
        <img src="{{asset('img/firma_david.png')}}" width="200" alt="Firma">
        <p class="name">David M. Arroyo Delgado</p>
        <p class="cargo"><strong>GERENTE GENERAL</strong></p>
    </div>
</div>
</body>

</html>
<!-- partial -->

</body>
</html>
