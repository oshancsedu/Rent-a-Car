$('document').ready(function(){
	//alert('aasss');
	$('.list-group-item').css('cursor', 'pointer');
	$('.doc-add').find('a').addClass('active');
	//alert(a.text());
	$('.view').click(function(){
		var active = $('.list-group').find('.active');

		active.removeClass('active');
		$(this).addClass('active');
		var id = $(this).attr('id');
		$('#doctordetail').load('template/doctordetails.php?id='+id);
	});

	$('.doc-add').click(function(){
		var active = $('.list-group').find('.active');
		active.removeClass('active');
		$(this).find('a').addClass('active');
		//alert('aa');
		$('#doctordetail').load('template/doctorregistration.php');
	});

	$('.btn-danger').click(function(){
		var deleteinfo = confirm("Release This Doctor !");
		//alert('click');
		if(deleteinfo==true)
		{
			var docId = $(this).parent().parent().parent().attr('id');
			$.ajax({
				type: "POST",
		        url: 'background/releasedoctor.php',
		        data: {'doctorId': docId},
		        success: function(data){
		            //alert(data);
		            if(data=="1")
		            {
		            	$('#sideList').load('template/hospitaldoctorlist.php');
		            	$('#doctordetail').load('template/doctorregistration.php');
		            }
		        }
			});
		}
	});
});