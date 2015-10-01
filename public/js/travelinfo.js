var sourceLocation = document.getElementById('sourceLocation');
var sourceSearchBox = new google.maps.places.SearchBox(sourceLocation);
var distLocation = document.getElementById('distLocation');
var distSearchBox = new google.maps.places.SearchBox(distLocation);

$('document').ready(function(){
    $('#btnNext').click(function(){
        var source=$('#sourceLocation').val();
        //source="Dhaka,DhakaDivision,Bangladesh";
        source = source.replace(/\s+/g, '');
        $('#mainInfo').load("../resources/views/chooseCar.blade.php?source="+source);
	});
});