var testName, patientId;
$('document').ready(function(){
	//alert("oshanjs");
    $('#my-dropzone').attr('action','background/uploadimage.php');
    $('#btSubmit').text('Upload Report');
    $('#patientIDError').hide();
    $('#testNameError').hide();

    $("#btSubmit").click(function (e) {
        patientId = $('#userID').val();
        testName = $('#testList').val();
        //alert(patientId+" "+testName);
        if(patientId=='')
        {
            $('#patientIDError').fadeIn(500);
        }
        else if(testName=='N/A')
        {
            $('#patientIDError').fadeOut(500);
            $('#testNameError').fadeIn(500);
        }
        else
        {
            e.preventDefault();
            e.stopPropagation();
            uploadImage();
        }
    });
});

//updating database for the file
function updatedb(fileName)
{
    //alert("up "+fileName+" "+testName+" "+patientId);
    $.ajax({
        type: "POST",
        url: 'background/reportinsertion.php',
        data: {'testName': testName,'patientId':patientId,'fileName':fileName},
        success: function(data){
            //alert(data);
            if(data=="1")
            {
                $('#message').text("File is valid, and was successfully uploaded.").attr('class','alert alert-success');
                //alert('0');
                $('#sideList').load('template/hospitalreportlist.php?info=0');
            }
            else
                $('#message').text("File uploading has failed.").attr('class','alert alert-danger');
        }
    });
}