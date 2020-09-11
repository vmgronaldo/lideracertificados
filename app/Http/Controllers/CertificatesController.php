<?php

namespace App\Http\Controllers;

use App\Certificates;
use App\Course;
use App\Participants;
use PDF;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CertificatesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('certificates.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $participants = Participants::all();
        $courses = Course::all();
        return view('certificates.create', compact('participants', 'courses'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return $request;
        $request->validate([
            "date" => "required",
            "model_id" => "required",
            "course_id" => "required",
        ]);

        //$data = $request->all();
        $user_id = Participants::where('id', $request->get('model_id'))->first();
        $certificates = new Certificates();
        $certificates->model_type = Participants::class;
        $certificates->model_id = $user_id->id;
        $certificates->course_id = $request->get('course_id');
        $certificates->date = $request->get('date');
        $certificates->save();
        return $certificates;

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Certificates $certificate)
    {
        /*$certificate = Inmueble::find($id)->published()->distinct()->with('ambiente')
          ->with('operacion')
          ->select("inmuebles.*")->first();*/
        $today = Carbon::now()->format('d/m/Y');
        $ano  = Carbon::now()->format('Y');

        $filename = 'Certificado(s)';
        $pdf = PDF::loadView('certificates.show',['certificate'=>$certificate,'today'=>$today,'filename'=>$filename,'ano'=>$ano])->setPaper('a4', 'landscape');
        return $pdf->stream($filename.'.pdf');
        //return $pdf->download($filename.'.pdf');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
