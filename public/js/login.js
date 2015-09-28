$('document').ready(function(){
	$('.loginDiv').hide();

	$('.loginDiv').mouseleave(function(){
		$('.loginDiv').slideUp();
	});

	$('#btnLogin').mouseover(function(){
		$('.loginDiv').slideDown(500);
	});

	$('#btnBack').click(function(){
		$('.loginDiv').slideUp();
	});

	$('#mainInfo').load("../resources/views/travelform.blade.php");

    $('#btnNext').click(function(){
        alert('sjss');
        //change();

        $('#mainInfo').load("../resources/views/chooseCar.blade.php");
    });
});
