<link rel="stylesheet" href="css/gmap.css" />
<script src="js/chooseCar.js"></script>

<script src="https://maps.googleapis.com/maps/api/js?libraries=places&callback=initAutocomplete" async defer></script>
<h2>Choose Your Car</h2>
<div class="12u$">
    <button class="special pull-left" id='btnPrev'><i class="fa fa-arrow-left"></i>Prev</button>
</div>
<div class="row uniform 50%">
    <div class="12u$">
        <span class="image"><img src="images/step2.png" alt="" /></span>
    </div>
    <div class="12u$">
        <input id="pac-input" class="controls" type="text" placeholder="Search Box">
        <div id="map" style="width: 1000px; height: 500px"></div>
    </div>
</div>