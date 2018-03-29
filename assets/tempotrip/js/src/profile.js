//profile//
$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".points"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="row travel-points-row"><div class="col-sm-10 form-group"><select id="airline_carriers" class="form-control"><option value="?????">Alaska Airlines – Mileage Plan</option><option value="?????">American Airlines – AAdvantage</option><option value="?????">Delta Air Lines – SkyMiles</option><option value="?????">Frontier Airlines – EarlyReturns</option><option value="?????">Hawaiian Airlines – HawaiianMiles</option><option value="?????">JetBlue Airways – TrueBlue</option><option value="?????">Southwest Airlines – Rapid Rewards</option><option value="?????">Spirit Airlines – FREE SPIRIT</option><option value="?????">United Airlines – MileagePlus</option><option value="?????">Virgin America – eleVAte</option></select></div><div class="col-sm-2"><a class="remove_field"></a></div><div class="col-sm-10"><input type="text" name="airlinePoints" class="airline-points" autocomplete="off" placeholder="Enter Your Airline Travel Rewards Number"></div></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); 
        $(this).closest('div.travel-points-row').remove(); x--;
    })
});