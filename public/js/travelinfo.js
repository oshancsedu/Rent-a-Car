$('document').ready(function(){
    $('#btnNext').click(function(){
        $('#mainInfo').load("../resources/views/chooseCar.blade.php");
	});
});