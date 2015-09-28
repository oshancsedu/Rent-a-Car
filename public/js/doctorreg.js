$('document').ready(function(){
	$('#doctorIDError').hide();
	$('#emailError').hide();
	 $('#status').hide();
	$("#btDocReg").click(function (e) {
        docId = $('#docID').val();
        email = $('#email').val();
        //alert(patientId+" "+testName);
        if(docId=='')
        {
            $('#doctorIDError').fadeIn(500);
        }
        else if(email=='')
        {
            $('#doctorIDError').fadeOut(500);
            $('#emailError').fadeIn(500);
        }
        else
        {
        	$.ajax({
        		type: "POST",
		        url: 'background/regdoctor-hospital.php',
		        data: {'doctorId': docId, 'email':email},
		        success: function(data){
		            //alert(data);
		            if(data=="1")
		            {
		                $('#status').text("Doctor has Assigned successfully.").attr('class','alert alert-success').show();
		                //alert('0');
		                $('#sideList').load('template/hospitaldoctorlist.php');
		            }
		            else if(data=='2')
		                $('#status').text("Invalid Doctor ID and Email.").attr('class','alert alert-warning').show();
		            else
		                $('#status').text("Doctor Assignment Has Failed.").attr('class','alert alert-danger').show();
		        }
		    });
		}
    });

});