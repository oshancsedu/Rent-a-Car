$('document').ready(function(){
	$('.loginDiv').hide();

    $('#mainInfo').load("../resources/views/travelform.blade.php");

	$('.loginDiv').mouseleave(function(){
		$('.loginDiv').slideUp();
	});

	$('#btnLogin').mouseover(function(){
		$('.loginDiv').slideDown(500);
	});

	$('#btnBack').click(function(){
		$('.loginDiv').slideUp();
        change($('#btnNext'));
	});
});
