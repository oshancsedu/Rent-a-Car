function initAutocomplete() {

    var mapProp = {
        center:new google.maps.LatLng(23.7503902, 90.3828388),
        zoom:8,
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

    var map=new google.maps.Map(document.getElementById("map"), mapProp);
    var searchBox= new google.maps.places.SearchBox(document.getElementById("mapSearch"));

    /*var map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: -33.8688, lng: 151.2195},
     zoom: 13,
     mapTypeId: google.maps.MapTypeId.ROADMAP
     });*/

    //alert('pass');
     // Create the search box and link it to the UI element.
     var input = document.getElementById('pac-input');
     var searchBox = new google.maps.places.SearchBox(input);
     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

     // Bias the SearchBox results towards current map's viewport.
     map.addListener('bounds_changed', function() {
     searchBox.setBounds(map.getBounds());
     });

     var markers = [];
     searchBox.addListener('places_changed', function() {
     var places = searchBox.getPlaces();

     if (places.length == 0) {
     return;
     }

     // Clear out the old markers.
     markers.forEach(function(marker) {
     marker.setMap(null);
     });
     markers = [];

     // For each place, get the icon, name and location.
     var bounds = new google.maps.LatLngBounds();
     places.forEach(function(place) {
     var icon = {
     url: place.icon,
     size: new google.maps.Size(71, 71),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(17, 34),
     scaledSize: new google.maps.Size(25, 25)
     };

     // Create a marker for each place.
     markers.push(new google.maps.Marker({
     map: map,
     icon: icon,
     title: place.name,
     position: place.geometry.location
     }));

     if (place.geometry.viewport) {
     // Only geocodes have viewport.
     bounds.union(place.geometry.viewport);
     } else {
     bounds.extend(place.geometry.location);
     }
     });
     map.fitBounds(bounds);
     });

    downloadUrl("http://localhost/Rent-a-Car/public/db?district=dhaka",function(data){
        var xml = data.responseXML;
        //var debug=document.getElementById("debug");

        //alert('<pre>'+xml+'</pre>');
        //print(data);
        var companies = xml.documentElement.getElementsByTagName("company");
        //debug.innerHTML=companies[0].childNodes[0].nodeValue;
        //alert(companies.toString());
        var len = companies.length;
        //alert(companies.toString());
        //alert(len);
        for(var i=0;i<len;i++)
        {
            var infoWindow = new google.maps.InfoWindow;
            var myCenter= new google.maps.LatLng(
                parseFloat(companies[i].getAttribute("lat")),
                parseFloat(companies[i].getAttribute("lng"))
            );
            //alert(companies[i].getAttribute("name")+" "+companies[i].getAttribute("address"));
            var html="<div><table class='table-bordered'" +
                "><tr><th><p>Company: </p></th><th><p>"+companies[i].getAttribute("name")+" </p></th></tr><tr><td><p>Address: " +
                "</p></td><td><p>"+companies[i].getAttribute("address")+"</p></td></tr></table></div>";
            var marker=new google.maps.Marker({
                position:myCenter,
                icon:'images/car.png'
            });
            marker.setMap(map);
            bindInfoWindow(marker, map, infoWindow, html);
        }
    });
}

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
        map.setZoom(11);
        map.setCenter(marker.getPosition());
    });
}

$('document').ready(function(){
    $('#btnPrev').click(function(){
        $('#mainInfo').load("../resources/views/travelform.blade.php");
    });
});