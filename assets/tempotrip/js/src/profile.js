//profile//
$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $("#airline-rewards-wrapper"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="form-group"><div class="col-sm-6"><select id="rewardSelect" class="form-control"><option>American Airlines</option><option>Delta Airlines</option><option>Frontier Airlines</option><option>Southwest Airlines</option><option>United Airlines</option><option>Virgin America Airlines</option></select></div><div class="col-sm-5"><input type="text" class="form-control m-t-0" placeholder="Airline Rewards #"></div><div class="col-sm-1"><a href="#" class="remove_field"><i class="fa fa-minus" aria-hidden="true"></i></a></div></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); 
        $(this).closest('div.form-group').remove(); x--;
    })
});