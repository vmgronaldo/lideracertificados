@extends('layouts.app')

@section('content')
    @include('flash::message')
    <div class="container">
        <div class="row justify-content-center">

            @if ($errors->any())
                <div class="col-md-12">
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>

            @endif

             <div class="col-md-12">
                    <div class="card ">
                        <div class="card-body">
                            <form class="form-participants" method="POST" action="{{route('trainers.store')}}">
                                @csrf
                                <div class="card">
                                    <div class="card-header">Crear profesor</div>
                                    <div class="card-body">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-user"></i>
                                </span>
                                            </div>
                                            <input type="text" placeholder="Codigo DNI:" name="dni" max="8" maxlength="8" class="form-control" id="dni" aria-describedby="dni">

                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-user"></i>
                                </span>
                                            </div>
                                            <input type="text" name="firstname" placeholder="Nombre(s)" class="form-control" id="firstname">
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-user"></i>
                                </span>
                                            </div>
                                            <input type="text" name="lastname" placeholder="Apellido(s)" class="form-control" id="lastname">
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                    <span class="input-group-text">
                                               <i class="fa fa-user"></i>
                                </span>
                                            </div>
                                            <input type="email" name="email" placeholder="Email" class="form-control" id="email">
                                        </div>


                                        <button class="btn btn-block btn-primary" type="submit">Crear profesor</button>
                                    </div>
                                </div>


                            </form>
                        </div>


                    </div>
                </div>

        </div>
    </div>
@endsection

