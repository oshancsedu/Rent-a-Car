<link href="css/searchBar.css" rel="stylesheet" type="text/css" />
<script src="js/jquery.searchMeme.js" type="text/javascript"></script>
<script src="js/chooseCar.js"></script>

<h2>Choose Your Car</h2>

<?php $source = $_GET['source'];?>

<div class="12u$">
    <button class="special pull-left" id='btnPrev'><i class="fa fa-arrow-left"></i>Prev</button>
</div>

<div class="row uniform 50%">
    <div class="12u$">
        <span class="image"><img src="images/step2.png" alt="" /></span>
    </div>
</div>
<div class="row uniform 0%" style=" padding: 5px 2px 2px 2px" id="searchbar">
        <div>
            <div class="demo">
                <input type="text" id="address"/>
                <p id="location" style="visibility: hidden">
                    <?php echo $source; ?>
                </p>
            </div>
        </div>
</div>
<div class="row">
    <div id="mapContainer">
        <div id="map"></div>
    </div>
    <div class="col-md-4" id="carListContainer">
        <?php @include('carlist.blade.php') ?>
    </div>
</div>