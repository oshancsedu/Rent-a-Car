<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use DB;
use Input;
use View;
use Response;
use SimpleXMLElement;
use File;
class CompanyLocationXMLController extends Controller
{
    public function viewXML()
    {
        //$users= DB::table('product_detail')->get();
        //return view('index');//->withUsers($users);
        $district= Input::get('source');
        $names = DB::table('company')->where('district','LIKE','%'.$district.'%')->get();
        //$content = View::make('companydetailxml')->withNames($names)->render();

        //File::put(storage_path().'/file.xml', $content);

        //return Response::make($content, 200)->header('Content-Type','text/xml');
        //return view('companydetailxml')->withNames($names);


        $xml = new SimpleXMLElement('<?xml version="1.0" encoding="utf-8"?><companies></companies>');

        $xml->addAttribute('version', '1.0');



        foreach($names as $name)
        {
            $company = $xml->addChild('company');
            $company->addAttribute('id',$name->id);
            $company->addAttribute('name',$name->name);
            $company->addAttribute('lat',$name->lat);
            $company->addAttribute('lng',$name->lng);
            $company->addAttribute('address',$name->address);
            $company->addAttribute('district',$name->district);
        }
        $xml->saveXML('test.xml');

        $response = Response::make($xml->asXML(), 200);
        $response->header('Content-Type', 'text/xml');

        return $response;




    }
}
