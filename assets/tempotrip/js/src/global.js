//Global JS File//
//window size//
var windowW = window.innerWidth;
var windowH = window.innerHeight;
//breakpoints detection/
var xsmall = 320;
var small = 414;
var medium = 768;
var mediumLarge = 992;
var large = 1024;
var xlarge = 1280;

var userRoles


var hasTouch = 'ontouchstart' in window;
    END_EV = hasTouch ? 'touchend' : 'click'; //public so no new "var"
    MOVE_EV = hasTouch ? 'touchmove' : 'mousemove'; // read mousemove isnt the same as touchmove
        
var START_EV = hasTouch ? 'touchstart' : 'mousedown', 
        // but....it's the best solution I have
    CANCEL_EV = hasTouch ? 'touchcancel' : 'touchcancel';

    function addTravelerFormCreator(div, externalClass){
        $(div).append('<label>Add a Traveler</label><form action="" class=""><div class="row"><div class="col-sm-6"><div class="form-group"><input type="text" class="form-control" placeholder="First name"></div></div><div class="col-sm-6"><div class="form-group"><input type="text" class="form-control" placeholder="Last name"></div></div></div><div class="row"><div class="col-sm-12"><div class="form-group"><input type="email" class="form-control" placeholder="email address"/></div></div></div><div class="row"><div class="col-sm-12"><input type="submit" placeholder="Add Traveler"/></div></div></form>')

    }
    addTravelerFormCreator("#add_traveler", "");

    //Make api call//
    function optionsAPI(basehostedhostname, service, params){
        var affiliateget = "&affiliate_id=";
        var json = "&json=" + encodeURIComponent(JSON.stringify(params));
        var logintoken = "&logintoken=" + $.cookie("logintoken");
        var finalhostedhostname = basehostedhostname + service + "?token=" + $.cookie("otapi_token") + json + logintoken + affiliateget;
        console.log( finalhostedhostname);
        return finalhostedhostname
    }
    var apihostedhostname = "http://az.dev.andy.apimilitarytogo.optionstravel.com/api/";

    function apiCall(hostedhostname){
        $.getJSON( hostedhostname, function(data) {
            console.log(data);
            return data;
        })
        .fail(function(data) {
            alert('Sorry we have a connection issues, Please try again!')
        })
    }
    function getHostToken(){
        var hostTokenData = apiCall(optionsAPI(apihostedhostname, "Authentication/Hosttoken/", {}));
        return hostTokenData.authenticationToken;
    }
//End js library code//
function checkPage(){
	if ($('body').attr('id')=== 'landing-page'){
		
	}else if ($('body').attr('id') === 'profile-page'){
        setProfilePage();
		
	}else if ($('body').attr('id') === 'events-page'){
        setEventsPage();
    }
    else if ($('body').attr('id') === 'all-trips-page'){
        setAllTripsPage();
    }
    else if ($('body').attr('id') === 'add-travelers-page'){
        setAddTravelersPage();
    }
    else if ($('body').attr('id') === 'add-events-page'){
        setAddEventsPage();
    }
    else if ($('body').attr('id') === 'message-page'){
        createModal();
    }
    
}
function setProfilePage(){
    $( "#datepicker" ).datepicker();
    setTimeout(function(){
        $('body').find('li#profile-page').addClass('active')
        
    },10)
    $('.plusBtn').on('click', function(){
        $('#ffSection').append('<div class="col-sm-12 airlineMiles"><select class="form-control" id="airlines" name="known_number" value="" placeholder=""><option base="Airline">Pick an Airline</option><option value="1" id="1">Air Canada | Aeroplan</option><option value="2" id="2">Alaskan Airlines | Milage Plan</option><option value="3" id="3">Hawaiian Airlines HawaiianMiles</option><option value="4" id="4">American Airlines | AA Advantage</option><option value="5" id="5">Delta Airlines | Delta SkyMiles</option><option value="6" id="6">JetBlue | TrueBlue</option><option value="7" id="7">Frontier Airlines | EarlyReturns</option><option value="8" id="8">Southwest | Rapid Rewards</option><option value="9" id="9">Spirit | Free Spirit</option><option value="10" id="10">United Airlines | United Mileage Plus</option><option value="11" id="11">Virgin America | Elevate</option></select><input type="text" name="ff_number" id="ffNumber" value="" placeholder=""><label class="" for="ffNumber">Airline Frequent Flyer Numbers</label><span class="focus-border"><i></i></span></div>');
    })
}
function setAllTripsPage(){
    setTimeout(function(){
        $('body').find('li#alltrips-page').addClass('active')
        console.log('fired off')
    },10)
     var table = $('#allTrips').DataTable({
        "ajax": '../js/ajax/all_trips.json',
        "select": true,
        "pageLength": 8,
        "order": [[28, "desc" ]],
        "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": true
            },
            {
                "targets": [ 1 ],
                "visible": false
            },
            {
                "targets": [ 2 ],
                "visible": false
            },
            {
                "targets": [ 3 ],
                "visible": false
            },
            {
                "targets": [ 4 ],
                "visible": true
            },
            {
                "targets": [ 5 ],
                "visible": false
            },
            {
                "targets": [ 6 ],
                "visible": false
            },
            {
                "targets": [ 7 ],
                "visible": false,
            },
            {
                "targets": [ 8 ],
                "visible": false,
            },
            {
                "targets": [ 9 ],
                "visible": false
            },
            {
                "targets": [ 10 ],
                "visible": false,
            },
            {
                "targets": [ 11 ],
                "visible": true
            },
            {
                "targets": [ 12 ],
                "visible": false
            },
            {
                "targets": [ 13 ],
                "visible": false
            },
            {
                "targets": [ 14 ],
                "visible": false
            },
            {
                "targets": [ 15 ],
                "visible": true
            },
            {
                "targets": [ 16 ],
                "visible": false
            },
            {
                "targets": [ 17 ],
                "visible": false
            },
            {
                "targets": [ 18 ],
                "visible": false
            },
            {
                "targets": [ 19 ],
                "visible": false
            },
            {
                "targets": [ 20 ],
                "visible": false
            },
            {
                "targets": [ 21 ],
                "visible": false
            },
            {
                "targets": [ 22 ],
                "visible": true
            },
            {
                "targets": [ 23 ],
                "visible": false
            },
            {
                "targets": [ 24 ],
                "visible": false
            },
            {
                "targets": [ 25 ],
                "visible": false
            },
            {
                "targets": [ 26 ],
                "visible": true
            },
            {
                "targets": [ 27 ],
                "visible": true,
                "data": 27,
                render: getImg
            },
            {
                "targets": [ 28 ],
                "visible": false
            },
            {
                "targets": [ 29 ],
                "visible": false
            }
        ]
    });
     var table = $('#pnrTable').DataTable({
        "ajax": '../js/ajax/all_trips.json',
        "select": false,
        "pageLength": 5,
        "order": [[0, "desc" ]],
        "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": true
            },
            {
                "targets": [ 1 ],
                "visible": true
            }
        ]
    });
    function getImg(data, type, full, meta) {
        var status = data;
        if (status === 'Approved') {
            return '<span class="fa fa-check-circle" aria-hidden="true"></span>';
        }else if (status === 'Pending') {
            return '<span class="fa fa-exclamation-triangle" aria-hidden="true"></span>';
        }else if (status === 'Denied') {
            return '<span class="fa fa-ban" aria-hidden="true"></span>';
        } 
        else if (status === 'Auto Approved') {
            return '<span class="fa fa-check-circle-o" aria-hidden="true"></span>';
        } 
    }
    var counter;
    $('#allTrips tbody').on('click', 'tr', function () {
        $('.wait-spinner').addClass('active');
        setTimeout(function(){
            $('.wait-spinner').removeClass('active');
        },1500)
        var data = table.row( this ).data();
        $('#allTrips tbody tr').removeClass('selected');
        $(this).addClass('selected')

        $('#approvals .traveller_name').text(data[0]);
        $('#approvals .traveller_email').text(data[1]);
        $('#approvals a.traveller_email').attr("href" , "mailto:"+ data[1]);
        $('#approvals .deptHeader').text(data[4]);
        $('#approvals #flightInfo .triptype').text(data[28]);
        $('#approvals .arrvHeader').text(data[15]);
        $('#approvals .site').text(data[2]);
        $('#approvals .site').attr("href" , "https://"+ data[2]);
        $('#approvals .cost').text(data[26]);

        $('#itinerary .traveller_name').text(data[0]);
        $('#itinerary .traveller_email').text(data[1]);
        $('#itinerary a.traveller_email').attr("href" , "mailto:"+ data[1]);

        $('#itinerary .recordLocator').text(data[10]);
        $('#itinerary .deptHeader').text(data[4]);
        $('#itinerary .arrvHeader').text(data[15]);

        $('#departure-travel .departureDetails .airline').text(data[7]);
        $('#departure-travel .departureDetails .flightNumber').text(data[8]);
        $('#departure-travel .departureDetails .recordLocator').text(data[10]);

        $('#departure-travel .departureTime .leave .City').text(data[4]);
        $('#departure-travel .departureTime .leave .date').text(data[11]);
        $('#departure-travel .departureTime .leave .time').text(data[12]);

        $('#departure-travel .departureTime .arrive .City').text(data[15]);
        $('#departure-travel .departureTime .arrive .date').text(data[13]);
        $('#departure-travel .departureTime .arrive .time').text(data[14]);
        

        $('#return-travel .departureDetails .airline').text(data[18]);
        $('#return-travel .departureDetails .flightNumber').text(data[19]);
        $('#return-travel .departureDetails .duration').text(data[18]);
        $('#return-travel .departureDetails .recordLocator').text(data[21]);

        $('#return-travel .departureTime .leave .City').text(data[15]);
        $('#return-travel .departureTime .leave .date').text(data[22]);
        $('#return-travel .departureTime .leave .time').text(data[23]);

        $('#return-travel .departureTime .arrive .City').text(data[4]);
        $('#return-travel .departureTime .arrive .date').text(data[24]);
        $('#return-travel .departureTime .arrive .time').text(data[25]);
        

        //add print data//
        $('.traveller').text(data[0]);
        $('.recordLocator').text(data[10]);
        $('.departureDetails .depart .City').text(data[4]);
        $('.departureDetails .depart .CityCountry').text(data[5]);
        $('.departureDetails .depart .time').text(data[12]);
        $('.departureDetails .depart .date').text(data[11]); 
        $('.departureDetails .depart .airline').text(data[7]);
        $('.departureDetails .depart .flightNumber').text(data[8]);
        $('.departureDetails .depart .recordLocator').text(data[10]);
        $('.departureDetails .arrive .City').text(data[15]);
        $('.departureDetails .arrive .CityCountry').text(data[16]);
        $('.departureDetails .arrive .time').text(data[14]);
        $('.departureDetails .arrive .date').text(data[13]);

        
        $('.returnDetails .depart .City').text(data[15]);
        $('.returnDetails .depart .CityCountry').text(data[16]);
        $('.returnDetails .depart .time').text(data[12]);
        $('.returnDetails .depart .date').text(data[22]);
        $('.returnDetails .depart .airline').text(data[18]);
        $('.returnDetails .depart .flightNumber').text(data[19]);
        $('.returnDetails .depart .recordLocator').text(data[21]);
        $('.returnDetails .arrive .City').text(data[4]);
        $('.returnDetails .arrive .CityCountry').text(data[5]);
        $('.returnDetails .arrive .time').text(data[23]);
        $('.returnDetails .arrive .date').text(data[22]);
        

        console.log(data);
        changeDepartDuration(data[9]);
        changeReturnDuration(data[20]);
        checkTripType(data[28]);
        checkStatus(data[27], data[29]);

        
    });
    setTimeout(function(){
        var tableRow = $('#allTrips tbody tr:first-child');
        $(tableRow).trigger('click');
    },500); 
    function checkStatus(d, e){
        $('#app-status').removeClass().addClass('row')
        $('#clock').removeClass().addClass('col-sm-9 col-md-9')
        $('#approvalID').html('').removeClass().addClass('col-sm-3');
        clearInterval(counter);
        if( d === 'Approved'){
            $('#app-status, #clock').addClass('isApproved');
            $('#approvalID').addClass('isApproved').append('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            $('.approval-card-title').text('Approved');
        }
        else if ( d === 'Auto Approved'){
            $('#app-status, #clock').addClass('isAutoApproved');
            $('#approvalID').addClass('isAutoApproved').append('<i class="fa fa-check-circle-o" aria-hidden="true"></i>');
            $('.approval-card-title').text('Auto Approved');
        }
        else if ( d === 'Denied'){
            $('#app-status, #clock').addClass('isDenied');
            $('#approvalID').addClass('isDenied').append('<i class="fa fa-ban" aria-hidden="true"></i>');
            $('.approval-card-title').text('Denied');
        }
        else if ( d === 'Pending'){
            $('#app-status, #clock').addClass('isPending');
            $('#approvalID').addClass('isPending').append('<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>');
            $('.approval-card-title').text('Countdown');
            $('#timer').text('');


            //new timer code//
            var apprTime = e;

            var hms = apprTime;   // your input string
            var a = hms.split(':'); // split it at the colons

            // minutes are worth 60 seconds. Hours are worth 60 minutes.
            var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
            console.log(seconds);

            var count = seconds;
            var counterMax = 86400;
            counter = setInterval(function () {
                count = count + 1;
                if (count === counterMax) {
                    clearInterval(counter);
                    $('#app-status').removeClass().addClass('row');
                    $('#clock').removeClass().addClass('col-sm-9 col-md-9');
                    $('#approvalID').html('').removeClass().addClass('col-sm-3');
                    $('#app-status, #clock').addClass('isAutoApproved');
                    $('.approval-card-title').text('Auto Approved');
                    $('#approvalID').addClass('isAutoApproved').append('<i class="fa fa-check-circle-o" aria-hidden="true"></i>');
                    $('#timer').text('');
                    $('#approveBtn').click();
                    return;
                }
                var seconds = count % 60;
                var minutes = Math.floor(count / 60);
                var hours = Math.floor(minutes / 60);
                minutes %= 60;
                hours %= 60;
                document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
            }, 1000);

        }
        
    }
    $('#approveBtn').on('click', function(){
       console.log('change table and DB status to Approved');
    })  
    function changeDepartDuration(a){
        var dHours = Math.trunc(a/60);
        var dMinutes = a % 60;
        $('#departure-travel .departureDetails .duration').text(dHours +"h "+ dMinutes + "m");
        $('.print-wrapper .departureDetails .duration').text(dHours +"h "+ dMinutes + "m");
    }
    function changeReturnDuration(b){
        var rHours = Math.trunc(b/60);
        var rMinutes = b % 60;
        $('#return-travel .departureDetails .duration').text(rHours +"h "+ rMinutes + "m");
        $('.print-wrapper .returnDetails .duration').text(rHours +"h "+ rMinutes + "m");
    }
    function checkTripType(c){
        if ( c === 'Oneway'){
            $('#flightInfo .deptHeader, #flightInfo2 .deptHeader').removeClass('Roundtrip').addClass('Oneway');
            $('#returnBtn').trigger('click').addClass('disabled');
            
        }
        else if ( c === 'RoundTrip'){
            $('#flightInfo .deptHeader, #flightInfo2 .deptHeader').removeClass('Oneway').addClass('Roundtrip');
            if($('#returnBtn').hasClass('collapsed')){
                $('#returnBtn').trigger('click').removeClass('disabled');
                
            }
            else{

            }
            
        }
        
    }
}
function setAddTravelersPage(){
    setTimeout(function(){
        $('body').find('li#addTravelers-page').addClass('active')
        console.log('fired off')
    },10)
     var table = $('#addTravelers').DataTable({
        "ajax": '../js/ajax/address-book.json',
        "order": [[ 1, "desc" ]],
        "select":true,
        "pageLength": 8,
        "info": false,
        "columnDefs": [ {
            "targets": 0,
            "data": null,
            "className": "select-checkbox fa-times",
            "defaultContent": ""
        },
        {
            "targets": [1],
        },
        {
            "targets": [2],
            "visible":false
        },
        {
            "targets": [3],
        },
        {
            "targets": [4],
            "visible":false
        },
        {
            "targets": [5],
            "visible":false
        },
        {
            "targets": [6],
        },
        {
            "targets": [7],
        },
        {
            "targets": [8],
            "visible":false
        },
        {
            "targets": [9],
            "visible":false
        }],
        
        "select": {
            "style": "single"
        }
    });
    //Add traveler function
    $('#addTravelers tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
        if(table.rows('.selected').data().length > 0){
            $('.remove').removeClass('hide');
        }
        else{
        
            $('.remove').addClass('hide');
        }
        $('#tabs a[href="#personal-info"]').tab('show');
        $( "#datepicker" ).datepicker();
        //Move table data over to fields//
        var data = table.row( this ).data();
        console.log(data)
        $('#firstName').val(data[1]);
        $('#middleName').val(data[2]);
        $('#lastName').val(data[3]);
        $('#DOB').val(data[4]);
        $('#gender').val(data[5]);
        $('#email-address').val(data[6]);
        $('#phone').val(data[7]);
    } );
    $('.yes').click( function () {
       table.rows('.selected').remove().draw( false );
       $('.remove').addClass('hide');
       $('.no').trigger('click');
    } );
    $('#personal-form').on('click', function(){
        $( "#datepicker" ).datepicker();
    });
    $('.plusBtn').on('click', function(){
        $('.airlineMiles').clone().appendTo('#ffSection');
    })
   
}
function setEventsPage(){
    setTimeout(function(){
        $('body').find('li#events-page').addClass('active')
        
    },10)
    var siteCount = 0
    
    $.each(site_list, function () {
        siteCount++
        $('#tabs').append('<li role="presentation" class="" id="'+ siteCount +'"><a href="#'+ this.e_site_id + '" aria-controls="home" role="tab" data-toggle="tab">' + this.display_name + '</a></li>');
        $('.tab-content').append('<div role="tabpanel" class="tab-pane active" id="' + this.e_site_id + '"><div class="card"><iframe src="" width="100%" style="overflow:hidden;height:100%;" frameBorder="0" scrolling="true" id="iframe'+siteCount+'"></iframe><a href="' + location.protocol + '//' + this.hostedhostname + '" target="_blank" class="newWindowIcon"></a></div></div>')
    });
    
    $('.nav-tabs li a').on('click', function(){
        var id = $(this).attr('id');
        var href = $(this).attr('href');
        var iframe = $(href).find('iframe');
        var destination = $(href).find('.newWindowIcon').attr('href')
        $(href).find('iframe').attr('src', destination + '/?hfs=0');
        $(href).find('iframe').addClass('show');
        $('.wait-spinner').addClass('show');
        setTimeout(function(){
            $('.wait-spinner').removeClass('show');
        }, 3000)

    });
    setTimeout(function(){
        $('.nav-tabs a:first').tab('show');
        $('.nav-tabs a:first').trigger('click');
    },100)
    function resizeIframe(iframeID) 
    {       
        var iframe = window.parent.document.getElementById('#iframe1');
        var container = $('.main-content');
        iframe.style.height = container.offsetHeight + 'px';            
    } 
    setTimeout(function(){
       console.log($('#iframe1 .main-content'))
       resizeIframe(); 
    },10000)


}
function createModal(){
    $('body').append('<!-- set up the modal to start hidden and fade in and out --><div id="dynamicModal" class="modal fade"><div class="modal-dialog"><div class="modal-content"><!-- dialog body --><div class="modal-body"><button type="button" class="close" data-dismiss="modal">&times;</button><p class="errors"><?php echo $app->output->errorstr ?></p><p class="success"><?php echo $app->output->successstr ?></p></div></div></div></div><!--Modal Button--><a href="#dynamicModal" id="modalBtn" role="button" data-toggle="modal" style="height:0px; width:0px; opacity:0;"></a/>');
    $('#modalBtn').click();
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
	checkPage()
});

//Global JS File//
