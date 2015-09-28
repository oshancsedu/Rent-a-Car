$('document').ready(function(){
	//alert("oshanjs");

    $('#message').hide();
    //$('#error').hide();
    status = $('#patientIDError');
	Dropzone.options.myDropzone = { // The camelized version of the ID of the form element

        // The configuration we've talked about above
        autoProcessQueue: false,
        uploadMultiple: true,
        parallelUploads: 1,
        maxFiles: 1,
        addRemoveLinks: true,

        // The setting up of the dropzone
        init: function() {
            myDropzone = this;
            this.on("addedfile", function(file) {    
                $('#message').text("File has been added.").attr('class','alert alert-info').fadeIn(1000);
            });
            this.on("removedfile", function(file,data) { 
                $('#message').text("File removed.").attr('class','alert alert-warning').fadeIn(1000);;
            });
            this.on("success", function(file,data) {
                var status = data.split("$");
                if(status[0]=="1"){
                    var fileName = status[1];
                    this.removeFile(file);
                    $('#message').text("File is valid,Information is uploading.....").attr('class','alert alert-success').fadeIn(1000);
                    //alert("Success "+fileName);
                    updatedb(fileName);
                }
                else
                    $('#message').text("Error Occured in uploading server!").attr('class','alert alert-danger').fadeIn(1000);
            });
            this.on("error", function(file,data) { 
                $('#message').text(data).attr('class','alert alert-danger').fadeIn(1000);
            });
            /*this.on("complete", function(file) {    
               this.removeFile(file);
            });*/
        }

      }
});

//Uploading file to the server
function uploadImage()
{
    //if (myDropzone.getQueuedFiles().length > 0)
        myDropzone.processQueue();
}