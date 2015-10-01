$('document').ready(function(){
    $('#map').css('width','100%').css('height','500px');
    $('#mapContainer').addClass("col-md-8").addClass("col-md-offset-2");
    $('#carListContainer').hide();
    initAutocomplete();
    $('#btnPrev').click(function(){
        $('#mainInfo').load("../resources/views/travelform.blade.php");
    });

    var searchOrange = $('#address').searchMeme({ onSearch: function (searchText) {
        setTimeout(function () {
            searchOrange.searchMeme({ searchComplete: true });
            //$('#search-results').html("You searched for " + searchOrange.val() + "");
            geocodeAddress(searchOrange.val());
        }, 1000);
    }
        , buttonPlacement: 'left', button: 'orange'
    });

    $('.wrapper-green,.wrapper-red').css('display', 'none');

    $('a').click(function () {
        $('.panel').removeClass('go-green');
        $('.wrapper-orange,.wrapper-green,.wrapper-red').css('display', 'none');
        $('.wrapper-orange').css('display', '');
        return false;
    });



    /**********
     * Showing car list
     * **********/

function showCarList()
{
    $('#mapContainer').removeClass("col-md-offset-2");
    $('#carListContainer').show().slideDown();
}

    /*************************
    * Map Set up
    **************************/

    function initAutocomplete() {
        var mapProp = {
            center:new google.maps.LatLng(23.7503902, 90.3828388),
            zoom:11,
            panControl:true,
            zoomControl:true,
            mapTypeControl:true,
            scaleControl:true,
            streetViewControl:true,
            overviewMapControl:true,
            rotateControl:true,
            mapTypeControl:true,
            mapTypeControlOptions: {
                style:google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position:google.maps.ControlPosition.TOP_RIGHT
            },
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };

        map=new google.maps.Map(document.getElementById("map"), mapProp);
        searchMarker =  new google.maps.Marker();
        selectedMarker =  new google.maps.Marker();
        // Create the search box and link it to the UI element.
        var input = document.getElementById('address');
        var searchbar = document.getElementById('searchbar');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchbar);

        geocoder = new google.maps.Geocoder();
        /*document.getElementById('btnsearch').addEventListener('click', function() {
         var address = document.getElementById('pac-input').value;
         geocodeAddress(geocoder, map,address);
         });*/

        var sourceLocation= document.getElementById('location');
        sourceLocation=sourceLocation.textContent.trim();
        geocodeAddress(sourceLocation);
        //var locations = sourceLocation.split(',');
        //var len = locations.length;
        downloadUrl("http://localhost/Rent-a-Car/public/db?source="+sourceLocation,function(data) {
            var xml = data.responseXML;
            var companies = xml.documentElement.getElementsByTagName("company");
            var len = companies.length;
            for (var i = 0; i < len; i++) {
                var infoWindow = new google.maps.InfoWindow;
                var myCenter = new google.maps.LatLng(
                    parseFloat(companies[i].getAttribute("lat")),
                    parseFloat(companies[i].getAttribute("lng"))
                );
                var html = "<div><table class='table-bordered'" +
                    "><tr><th><p>Company: </p></th><th><p>" + companies[i].getAttribute("name") + " </p></th></tr><tr><td><p>Address: " +
                    "</p></td><td><p>" + companies[i].getAttribute("address") + "</p></td></tr></table></div>";
                var marker = new google.maps.Marker({
                    position: myCenter,
                    icon: 'images/car.png'
                });
                marker.setMap(map);
                bindInfoWindow(marker, map, infoWindow, html);
            }
        });

    }

    /********
     * Focusing on the location entered in the search bar
     * *********/

    function geocodeAddress(address) {
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                //searchMarker.setAttribute('map',null);
                searchMarker.setMap(null);
                searchMarker=null;
                searchMarker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    /********
     * Downloading xml for marker position
     * *********/

    function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                request.onreadystatechange = doNothing;
                callback(request, request.status);
            }
        };
        request.open('GET', url, true);
        request.send(null);
    }

    function doNothing() {}

    function bindInfoWindow(marker, map, infoWindow, html) {
        google.maps.event.addListener(marker, 'mouseover', function() {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
        });
        google.maps.event.addListener(marker, 'mouseout', function() {
            infoWindow.close();
        });
        google.maps.event.addListener(marker,'click',function() {
            selectedMarker.setAnimation(null);
            selectedMarker=marker;
            showCarList();
            map.setZoom(11);
            map.setCenter(marker.latitude -100.0,marker.longitude);
            marker.setAnimation(google.maps.Animation.BOUNCE);
        });
    }
});