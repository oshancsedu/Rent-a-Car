$('#document').ready(function(){
	//alert("oshanjs");
	$('.btn-save').hide();
	$('.inputPatientId').hide();
	$('.patientIdLebel').hide();
	var windowUrl=window.location.href;
	//alert(windowUrl);
	var urls = windowUrl.split('/');
	var len = urls.length;
	slug=urls[len-1];

	$('.btn-delete').click(function(){
		var deleteinfo = confirm("Delete This Report !");
		if (deleteinfo == true) {
		
			var captionDiv=$(this).parent().parent().parent();
			var file = getFileName(captionDiv);
			//
			//alert(file);

			$.ajax({
				type: "POST",
				url: 'background/deleteReport.php',
				data: {'filename':file},
				success: function(data){
					//alert(data);
					if(slug=="report-submit")
						{
							//alert('0');
							$('#sideList').load('template/hospitalreportlist.php?info=0');
						}
					else if(slug=="home")
						{
							//alert('1');
							$('#reportList').load('template/hospitalreportlist.php?info=1');
						}
				}
			});
		}
	});

	$('.btn-edit').click(function(){
		//alert('edit');
		viewChangeOnEdit($(this));
	});

	$('.btn-save').click(function(){
		//alert('edit');
		viewChangeOnSave($(this));
	});

	function viewChangeOnEdit(element)
	{
		//alert('change');
		var span =element.parent();
		var h3=span.parent();
		var captionDiv = h3.parent();
		var patientId,testName;
		//alert(span.text());
		element.fadeOut(400);
		patientId = h3.find('.patientId');
		patientId.hide();
		//alert(patientId.text());
		//captionDiv.find('.testName').hide();
		patientIdText = getID(patientId.text());
		span.find('.btn-delete').fadeOut(400,function(){
			captionDiv.find('.btn-save').fadeIn(400);
			captionDiv.find('.patientIdLebel').fadeIn(400);
			captionDiv.find('.inputPatientId').fadeIn(400).val(patientIdText);
		});

	}

	function viewChangeOnSave(element)
	{
		//alert('change');
		//var span=element.parent();
		//var h3=span.parent();
		var captionDiv = element.parent();
		var inputPatientId,testName;
		//alert(span.text());
		inputPatientId = captionDiv.find('.inputPatientId');
		
		if(patientIdText != inputPatientId.val())
		{	
			//alert('matched !');
			var file = getFileName(captionDiv); 
			patientIdText=inputPatientId.val();
			$.ajax({
		        type: "POST",
		        url: 'background/updatereport.php',
		        data: {'patientid': patientIdText,'filename': file},
		        success: function(data){
		        	//alert(data);
		            //alert(data);
		            /*if(data=="1")
		            {
		                $('#message').text("File is valid, and was successfully uploaded.").attr('class','alert alert-success');
		                //alert('0');
		                $('#sideList').load('template/hospitalreportlist.php?info=0');
		            }
		            else
		                $('#message').text("File uploading has failed.").attr('class','alert alert-danger');*/
		        }
		    });
		}

		inputPatientId.hide();
		captionDiv.find('.patientIdLebel').hide();
		element.fadeOut(400,function(){
			captionDiv.find('.btn-edit').fadeIn(400);
			captionDiv.find('.btn-delete').fadeIn(400);
			captionDiv.find('.patientId').text('Patient ID: '+patientIdText).fadeIn(400);
			captionDiv.find('.testName').fadeIn(400);
		});
	}

	function getID(id)
	{
		var string = id.split(': ');
		return string[1];
	}

	function getFileName(captionDiv)
	{
		if(slug=="report-submit")
			file=captionDiv.find('.linkDisplay');
		else if(slug=="home")
			file=captionDiv.parent().find('.imageDisplay');

		var href=file.attr('href');
			//alert(file.text());
			
			//alert(href);
		var filename = href.split("/");
		len = filename.length;
			//alert(filename[len-1]);
		return filename[len-1];
	}

});