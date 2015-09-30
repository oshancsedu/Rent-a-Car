<?php echo '<companies>'; ?>
    @foreach($names as $name)
        {{'<company'}}
        {{ 'id="'. $name->id.'"'}}
        {{ 'name="'. $name->name.'"'}}
        {{ 'address="'. $name->address.'"'}}
        {{ 'lat="'. $name->lat.'"'}}
        {{ 'lng="'. $name->lng.'"'}}
        {{ 'district="'. $name->district.'"'}}
        {{'/>'}}
    @endforeach

<?php echo '</companies>'; ?>
