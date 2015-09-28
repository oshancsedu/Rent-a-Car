@extends('layout/template')
@section('title')
    Rent A Car
@stop

@section('body')
    @include('header')
    @include('banner')
    @include('description')
    @include('information')

    @include('reservation')
    @include('feedback')
    @include('footer')
@stop