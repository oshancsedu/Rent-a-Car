<script type="text/javascript" src='js/travelinfo.js'></script>
<h2>Travel Inmorfation</h2>
<div class="12u$">
    <button class="special pull-right" id='btnNext'>Next <i class="fa fa-arrow-right"></i></button>
</div>
<div class="row uniform 50%">

    <div class="12u$">
        <span class="image"><img src="images/step1.png" alt="" /></span>
    </div>

    <div class="6u 12u$(xsmall)">
        <input name="name" placeholder="Starting Address" type="text" id="sourceLocation"/>
    </div>

    <div class="6u 12u$(xsmall)">
        <input name="name" placeholder="Destination Address" type="text" id="distLocation"/>
    </div>

    <div class="12u$">
        <div class="select-wrapper">
            <select name="vahicle" id="vahicle">
                <option value="n/a">- Vahicle -</option>
                <option value="car">Car</option>
                <option value="jeep">Jeep</option>
                <option value="micro">Micro</option>
                <option value="luxary_car">Luxary car</option>
            </select>
        </div>
    </div>

    <div class="6u 12u$(xsmall)">
        <label><b>From : </b></label>
        <input type="date" name="fDate" id="fDate"/>
    </div>
    <div class="6u$ 12u$(xsmall)">
        <label for='tDate'><b>To : </b></label>
        <input type="date" name="tDate" id="tDate"/>
    </div>
</div>