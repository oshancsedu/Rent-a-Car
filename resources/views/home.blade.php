@extends('layout/template')
@section('title')
    Rent A Car
@stop

@section('body')
    @include('header')
    @include('banner')
    @include('description')
    @include('reservation')
    @include('information')
    @include('feedback')
    @include('footer')
@stop