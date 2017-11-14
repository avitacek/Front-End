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
    $( "#datepicker" ).datepicker({dateFormat: 'mm/dd/yy', changeMonth: true, changeYear: true, yearRange: "-100:+0"});
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
    },10)
    var data = system_output.trip_data.trips;
    var newTrips = [];
    $.each(data, function(tripkey,tripvalue){
       $.each(tripvalue.names_arr, function(namekey,namevalue){
           tripvalue.name_first = namevalue.name_first;
           tripvalue.name_last = namevalue.name_last;
           tripvalue.email = namevalue.email;
           newTrips.push(tripvalue);
       }) 
    })
    data = newTrips;

    var dataNew = []
    $.each(data, function(key,value){
        console.log(key,value)
        dataNew.push( {
            name_first: value.name_first,
            name_last: value.name_last,
            email: value.email,
            departCity: value.airseg_arr.departcity,
            arriveCity: value.airseg_arr.arrivalcity,
            departure_datetime: value.departure_datetime,
            arrival_datetime: value.airseg_arr.legs[0][0].arrival_datetime,
            miles : value.miles,
            total: value.grandtotals.total,
            airseg_count: value.airseg_count,
            airseg_legs_count: value.airseg_legs_count, 
            status_id : value.status_id,
            site_display_name : value.site_display_name,
            site_hostedhostname : value.site_hostedhostname, 
            pnr_rec_loc: value.pnr_rec_loc,
            equipment: value.airseg_arr.legs[0][0].equipment,
            airline_confirmation: value.airseg_arr.legs[0][0].confirmation,
            airline_flightnumber: value.airseg_arr.legs[0][0].flightnumber,
            airlinecode: value.airseg_arr.legs[0][0].airlinecode,
            airlinename: value.airseg_arr.legs[0][0].airlinename,
            auto_approve_limit_timestamp: value.auto_approve_limit_timestamp,
            auto_approve_limit_datetime: value.auto_approve_limit_datetime,
            traveler_user_id: value.traveler_user_id,
            user_id: value.user_id,
            pnr_id: value.pnr_id,
            note_id: value.note_id,
            universal_rec_loc: value.universal_rec_loc,
            options_rec_loc: value.options_rec_loc,
            legs: value.airseg_arr.legs,
            legOne: value.airseg_arr.legs[0],
            legTwo: value.airseg_arr.legs[1],
            arriveCity: value.airseg_arr.arrivalcity,
        });
    });
    data_obj = dataNew;
    //console.log(data);
     var table = $('#allTrips').DataTable({
        "aaData": data_obj,
        "order": [[ 0, "asc" ]],
        "select":true,
        "pageLength": 8,
        "info": false,
        "aoColumns": [
            { 
                "title": "First Name",
                "mDataProp": "name_first",
                "visible": true
            },
            { 
                "title": "Last Name",
                "mDataProp": "name_last",
                "visible": true
            },
            { 
                "title": "Email",
                "mDataProp": "email",
                "visible": false
            },
            { 
                "title": "From",
                "mDataProp": "departCity",
                "visible": true
            },
            { 
                "title": "To",
                "mDataProp": "arriveCity",
                "visible": true
            },
            { 
                "title": "Departure Date",
                "mDataProp": "departure_datetime",
                "visible": true,
                render:getTime
            },
            {
                "title": "Arrival Date",
                "mDataProp": "arrival_datetime",
                "visible": true,
                render:getTime
            },
            { 
                "title": "Miles",
                "mDataProp": "miles",
                "visible": false
            },
            { 
                "title": "Price Total",
                "mDataProp": "total",
                "visible": true
            },
            { 
                "title": "Segment Count",
                "mDataProp": "airseg_count",
                "visible": false
            },
            { 
                "title": "Leg Count",
                "mDataProp": "airseg_legs_count",
                "visible": false
            },
            { 
                "title": "Status ID",
                "mDataProp": "status_id",
                "visible": false,
                render:getImg
            },
            { 
                "title": "Site Display Name",
                "mDataProp": "site_display_name",
                "visible": false
            },
            { 
                "title": "Site Host Name",
                "mDataProp": "site_hostedhostname",
                "visible": false
            },
            { 
                "title": "PNR Record Locator",
                "mDataProp": "pnr_rec_loc",
                "visible": false
            },
            { 
                "title": "PNR Record Locator",
                "mDataProp": "airline_confirmation",
                "visible": false
            },
            { 
                "title": "Airline Code",
                "mDataProp": "airlinecode",
                "visible": false
            },
            { 
                "title": "Flight Number",
                "mDataProp": "airline_flightnumber",
                "visible": false
            },
            { 
                "title": "Airline",
                "mDataProp": "airlinename",
                "visible": true
            },
            { 
                "title": "Plane Type",
                "mDataProp": "equipment",
                "visible": false
            },
            { 
                "title": "Auto Approve Time",
                "mDataProp": "auto_approve_limit_timestamp",
                "visible": false
            },
            { 
                "title": "Auto Approve Date | Time",
                "mDataProp": "auto_approve_limit_datetime",
                "visible": false
            },
            { 
                "title": "Traveler User ID",
                "mDataProp": "traveler_user_id",
                "visible": false
            },
            { 
                "title": "User ID",
                "mDataProp": "user_id",
                "visible": false
            },
            { 
                "title": "PNR ID",
                "mDataProp": "pnr_id",
                "visible": false
            },
            { 
                "title": "Note ID",
                "mDataProp": "note_id",
                "visible": false
            },
            { 
                "title": "Universal Record Locator",
                "mDataProp": "universal_rec_loc",
                "visible": false
            },
            { 
                "title": "Options Record Locator",
                "mDataProp": "options_rec_loc",
                "visible": false
            },
            { 
                "title": "Legs",
                "mDataProp": "legs",
                "visible": false
            }
        ] //data changes to mDataProp
    });
    function getTime(data,type,full, meta){
        var date_time_convert = new Date(data.replace(/-/g,"/"));
        var newDate = date_time_convert.toLocaleString()
        return newDate;
    }
    function getImg(data, type, full, meta) {
        d = parseInt(data);
        var status = d;
        if (status === 1) {
            return '<span class="fa fa-check-circle" aria-hidden="true"></span>';
        }
        else if (status === 2) {
            return '<span class="fa fa-exclamation-triangle" aria-hidden="true"></span>';
        }
        else if (status === 3) {
            return '<span class="fa fa-check-circle-o" aria-hidden="true"></span>';
        }
        else if (status === 4) {
            return '<span class="fa fa-ban" aria-hidden="true"></span>';
        } 
        else if (status === 5) {
            return '<span class="fa fa-times fa-6" aria-hidden="true"></span>';
        } 
    }
    var counter;
    $('#allTrips tbody').on('click', 'tr', function () {
        $('.wait-spinner').addClass('active');
        setTimeout(function(){
            $('.wait-spinner').removeClass('active');
        },1500)
        var data = table.row(this).data();
        //console.log(data)
        $('#allTrips tbody tr').removeClass('selected');
        $(this).addClass('selected');

        $('#approvals #f_name').text(data.name_first);
        $('#approvals #l_name').text(data.name_last);
        $('#approvals .traveller_email').text(data.email);
        $('#approvals a.traveller_email').attr("href" , "mailto:"+ data.email);
        $('#approvals .deptHeader').text(data.departCity);
        $('#approvals #flightInfo .triptype').text(data.airseg_legs_count);
        $('#approvals .arrvHeader').text(data.arriveCity);
        $('#approvals .site').text(data.site_hostedhostname);
        $('#approvals .site').attr("href" , "https://"+ data.site_hostedhostname);
        $('#approvals .cost').text('$'+data.total);
        $('#approvals #pnr_Number').text(data.airline_confirmation);
        //SWitch the hidden fields for the comments box//
        $('#approvals #pnr_id').val(data.pnr_id);
        $('#approvals #note_id').val(data.note_id);
        $('#approvals #traveler_user_id').val(data.traveler_user_id);
        //SWitch the hidden fields for the approve BTN box//
        $('#approvals #pnr_id2').val(data.pnr_id);
        $('#approvals #universal_rec_loc').val(data.universal_rec_loc);
        $('#approvals #options_rec_loc').val(data.options_rec_loc);
        //SWitch the hidden fields for the Deny BTN box//
        $('#approvals #pnr_id3').val(data.pnr_id);
        $('#approvals #universal_rec_loc2').val(data.universal_rec_loc2);
        $('#approvals #options_rec_loc2').val(data.options_rec_loc);

        $('#itinerary #f_name').text(data.name_first);
        $('#itinerary #l_name').text(data.name_last);
        $('#itinerary .traveller_email').text(data.email);
        $('#itinerary a.traveller_email').attr("href" , "mailto:"+ data.email);

        $('#itinerary .recordLocator').text(data.airline_confirmation);
        $('#itinerary .deptHeader').text(data.departCity);
        $('#itinerary .arrvHeader').text(data.arriveCity);


        //add print data//
        $('#printdiv #f_name').text(data.name_first);
        $('#printdiv #l_name').text(data.name_last);
        $('#printdiv .traveller_email').text(data.email);
        $('#printdiv a.traveller_email').attr("href" , "mailto:"+ data.email);

        $('#printdiv .recordLocator').text(data.airline_confirmation);
        $('#printdiv .deptHeader').text(data.departCity);
        $('#printdiv .arrvHeader').text(data.arriveCity)

        $('.traveller').text(data.name_first);
        $('.recordLocator').text(data.airline_confirmation);
        $('.departureDetails .depart .City').text(data.departCity);
        //$('.departureDetails .depart .CityCountry').text(data[5]);
        $('.departureDetails .depart .time').text(data.departure_datetime);
        //$('.departureDetails .depart .date').text(data[11]); 
        $('.departureDetails .depart .airline').text(data.airlinename);
        $('.departureDetails .depart .flightNumber').text(data.flightnumber);
        $('.departureDetails .depart .recordLocator').text(data.pnr_rec_loc);
        $('.departureDetails .arrive .City').text(data.arriveCity);
        //$('.departureDetails .arrive .CityCountry').text(data[16]);
        $('.departureDetails .arrive .time').text(data.arrival_datetime);
        //$('.departureDetails .arrive .date').text(data[13]);
        //changeDepartDuration(data[9]);
        //changeReturnDuration(data[20]);
        checkTripType(data.airseg_legs_count);
        changeDepartureDate(data.departure_datetime)
        checkStatus(data.status_id, data.auto_approve_limit_datetime);
        create_itinerary(data/*.legs,data.legOne,data.legTwo*/);
        function checkApprovalTime(t){
            var approvalLimitDate = new Date(t);
            var today = new Date();

            var diff = today.getTime() - approvalLimitDate.getTime();
            console.log(diff)
            var msec = diff;
            var ss = Math.floor(msec / 1000);
            msec -= ss * 1000;

            var time = ss;
            console.log(time);
            setButtons(time)
            function setButtons(time){
                var limitTime = 86400;
                console.log(limitTime)
                if (time > limitTime){
                    $('#approveBtn, #denyBtn').addClass('disabled');
                }
            }
        }

        
    });
    setTimeout(function(){
        var tableRow = $('#allTrips tbody tr:first-child');
        $(tableRow).trigger('click');
    },500); 
    function checkStatus(d, e){
        d = parseInt(d);
        $('#app-status').removeClass().addClass('row')
        $('#clock').removeClass().addClass('col-sm-9 col-md-9')
        $('#approvalID').html('').removeClass().addClass('col-sm-3');
        clearInterval(counter);
        if( d === 1){
            $('#app-status, #clock').addClass('isApproved');
            $('#approvalID').addClass('isApproved').append('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            $('.approval-card-title').text('Approved');
        }
        else if ( d === 3){
            $('#app-status, #clock').addClass('isAutoApproved');
            $('#approvalID').addClass('isAutoApproved').append('<i class="fa fa-check-circle-o" aria-hidden="true"></i>');
            $('.approval-card-title').text('Auto Approved');
        }
        else if ( d === 4){
            $('#app-status, #clock').addClass('isDenied');
            $('#approvalID').addClass('isDenied').append('<i class="fa fa-ban" aria-hidden="true"></i>');
            $('.approval-card-title').text('Denied');
        }else if ( d === 5){
            $('#app-status, #clock').addClass('isDenied');
            $('#approvalID').addClass('isDenied').append('<i class="fa-times fa-6" aria-hidden="true"></i>');
            $('.approval-card-title').text('Canceled');
        }
        else if ( d === 2){
            //$('#timer').text('');
            checkApprovalTime(e);
            function checkApprovalTime(e){
                var approvalLimitDate = new Date(e);
                var today = new Date();

                var diff = today.getTime() - approvalLimitDate.getTime();
                //console.log(diff)
                var msec = diff;
                var ss = Math.floor(msec / 1000);
                msec -= ss * 1000;

                var time = ss;
                //console.log(time);
                setButtons(time)
                function setButtons(time){
                    var limitTime = 86400;
                    //console.log(limitTime)
                    if (time > limitTime){
                        $('#approveBtn, #denyBtn').addClass('disabled');
                        $('#app-status, #clock').addClass('isAutoApproved');
                        $('#approvalID').addClass('isAutoApproved').append('<i class="fa fa-check-circle-o" aria-hidden="true"></i>');
                        $('.approval-card-title').text('Auto Approved');
                    }else{
                        $('#app-status, #clock').addClass('isPending');
                        $('#approvalID').addClass('isPending').append('<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>');
                        $('.approval-card-title').text('Pending');
                    }
                }
            }
        }
        
    }
    $('#approveBtn').on('click', function(){
       console.log('change table and DB status to Approved');
    })  
    function changeDepartureDate(t){
        var date_time_convert = new Date(t.replace(/-/g,"/"));
        var newDate = date_time_convert.toLocaleString()
        $('#departTime, #departTime2, #printdiv #flightInfo #departTime').text(newDate)
    }
    function changeDepartDuration(a){
        var dHours = Math.trunc(a/60);
        var dMinutes = a % 60;
        $('#departure-travel .departureDetails .duration').text(dHours +"h "+ dMinutes + "m");
        $('#printdiv .departureDetails .duration').text(dHours +"h "+ dMinutes + "m");
    }
    function changeReturnDuration(b){
        var rHours = Math.trunc(b/60);
        var rMinutes = b % 60;
        $('#return-travel .departureDetails .duration').text(rHours +"h "+ rMinutes + "m");
        $('.print-wrapper .returnDetails .duration').text(rHours +"h "+ rMinutes + "m");
    }
    function checkTripType(c){
        // console.log(c)
        if ( c === 1){
            $('#flightInfo .deptHeader, #flightInfo2 .deptHeader, #printdiv #flightInfo .deptHeader').removeClass('Roundtrip').addClass('Oneway');
            $('#returnBtn').trigger('click').addClass('disabled');
            
        }
        else if ( c === 2){
            $('#flightInfo .deptHeader, #flightInfo2 .deptHeader, #printdiv #flightInfo .deptHeader').removeClass('Oneway').addClass('Roundtrip');
            if($('#returnBtn').hasClass('collapsed')){
                $('#returnBtn').trigger('click').removeClass('disabled');
                
            }    
        }    
    }
    var countDept = 0
    var countReturn = 0
    function create_itinerary(data) {
        //Set up some divs if needed
        $('#departureDetails #itinerary-accordian').empty();
        create_air_legs(data.legs);
    }
    function create_air_legs(legs) {
        var legsLength = Object.keys(legs).length;
        console.log(legsLength)
        $.each(legs, function (legkey, segs_arr) {
            if (legkey === '0') {
                $('#departureDetails #itinerary-accordian').append('<div class="item"><a data-toggle="collapse" data-parent="#itinerary-accordian" href="#departure-travel" aria-expanded="true" aria-controls="recent-travel">Departure <i class="fa fa-angle-double-down float-right font-lg"></i></a><div id="departure-travel" class="collapse in" role="tabpanel"></div></div>');
                create_dept_segs(legkey, segs_arr);
            } else if (legkey === '1') {
                console.log(legkey);
                //This is INBOUND/RETURN
                //set some values
                $('#departureDetails #itinerary-accordian').append('<div class="item"><a data-toggle="collapse" data-parent="#itinerary-accordian" href="#return-travel" aria-expanded="true" aria-controls="recent-travel">Return <i class="fa fa-angle-double-up float-right font-lg"></i></a><div id="return-travel" class="collapse in" role="tabpanel"></div></div>');
                create_return_segs(legkey, segs_arr);
            }

            //Create our segments
            function create_dept_segs(legkey, segs_arr) {
                var legsKeyLength = Object.keys(legkey).length;
                console.log(legsKeyLength)
                console.log(legkey)
                $.each(segs_arr, function (segkey, segvalue) {
                    countDept++;
                    var segKeyLength = Object.keys(segkey).length;
                    console.log(segKeyLength);
                    console.log(segkey);
                    console.log(segs_arr);
                    console.log(segvalue);
                    console.log(countDept)
                    //Do some cool UI stuf here for a row of a single segment
                    $('#departure-travel').append('<div class="list-group" id="seg'+ countDept +'"><div class="departureDetails"><ul><li><p class="airline"></p><span>Airline</span></li><li><p class="flightNumber"></p><span>Flight Number</span></li><li><p class="duration"></p><span>Flight Duration</span></li><li><p class="recordLocator"></p><span>Airline Confirmation</span></li></ul></div><div class="departureTime"><ul><li class="leave"><ul><li><p class="City"></p></li><li><p class="date"></p></li><li><p class="time"></p></li></ul></li><li class="arrive"><ul><li><p class="City"></p></li><li><p class="date"></p></li><li><p class="time"></p></li></ul></li></ul></div></div>');
                    $('#printdiv .departureDetails .row').append('<div class="col-sm-12 segTitle"><h5>Flight '+ countDept +'</h5></div><div class="list-group" id="seg'+ countDept +'"><div class="departureDetails"><ul><li><p class="airline"></p><span>Airline</span></li><li><p class="flightNumber"></p><span>Flight Number</span></li><li><p class="duration"></p><span>Flight Duration</span></li><li><p class="recordLocator"></p><span>Airline Confirmation</span></li></ul></div><div class="departureTime"><ul><li class="leave"><ul><li><p class="City"></p><span>Origin</span></li><li><p class="date"></p><span>Date | Time</span></li><li><p class="time"></p></li></ul></li><li class="arrive"><ul><li><p class="City"></p><span>Destination</span></li><li><p class="date"></p><span>Date | Time</span></li><li><p class="time"></p></li></ul></li></ul></div></div>');
                         $('#departureDetails #itinerary-accordian #departure-travel #seg'+countDept+'.list-group .departureDetails .airline').text(segvalue.airlinecode);
                        $('#printdiv .departureDetails .row #seg'+ countDept +'.list-group .departureDetails .airline').text(segvalue.airlinename);
                        $('#departureDetails #itinerary-accordian #departure-travel #seg'+ countDept +'.list-group .departureDetails .flightNumber, #printdiv .departureDetails .row #seg'+ countDept +'.list-group .departureDetails .flightNumber').text(segvalue.flightnumber);

                        $('#departureDetails #itinerary-accordian #departure-travel #seg'+ countDept +'.list-group .departureDetails .duration, #printdiv .departureDetails .row #seg'+ countDept +'.list-group .departureDetails .duration').text(segvalue.traveltime);

                        $('#departureDetails #itinerary-accordian #departure-travel #seg'+ countDept +'.list-group .departureDetails .recordLocator,#printdiv .departureDetails .row #seg'+ countDept +'.list-group .departureDetails .recordLocator').text(segvalue.confirmation);

                        $('#departureDetails #itinerary-accordian #departure-travel #seg'+ countDept +'.list-group .departureTime .leave .City, #printdiv .departureDetails .row #seg'+ countDept +'.list-group .departureTime .leave .City').text(segvalue.fromcitycode);

                        $('#departureDetails #itinerary-accordian #departure-travel #seg'+ countDept +'.list-group .departureTime .leave .date, #printdiv .departureDetails .row #seg'+ countDept +'.list-group .departureTime .leave .date').text(segvalue.departure_datetime);

                        $('#departureDetails #itinerary-accordian #departure-travel #seg'+ countDept +'.list-group .departureTime .arrive .City, #printdiv .departureDetails .row #seg'+ countDept +'.list-group .departureTime .arrive .City').text(segvalue.tocitycode);

                        $('#departureDetails #itinerary-accordian #departure-travel #seg'+ countDept +'.list-group .departureTime .arrive .date, #printdiv .departureDetails .row #seg'+ countDept +'.list-group .departureTime .arrive .date').text(segvalue.arrival_datetime);
                    
                })
            }
            function create_return_segs(legkey, segs_arr) {
                var legsKeyLength = Object.keys(legkey).length;
                console.log(legsKeyLength)
                console.log(legkey)
                $.each(segs_arr, function (segkey, segvalue) {
                    var segKeyLength = Object.keys(segkey).length;
                    console.log(segKeyLength);
                    console.log(segkey);
                    console.log(segs_arr);
                    console.log(segvalue);
                    countReturn++
                    console.log(countReturn)
                    $('#return-travel').append('<div class="list-group" id="segReturn'+countReturn+'"><div class="departureDetails"><ul><li><p class="airline"></p><span>Airline</span></li><li><p class="flightNumber"></p><span>Flight Number</span></li><li><p class="duration"></p><span>Flight Duration</span></li><li><p class="recordLocator"></p><span>Airline Confirmation</span></li></ul></div><div class="departureTime"><ul><li class="leave"><ul><li><p class="City"></p></li><li><p class="date"></p></li><li><p class="time"></p></li></ul></li><li class="arrive"><ul><li><p class="City"></p></li><li><p class="date"></p></li><li><p class="time"></p></li></ul></li></ul></div></div>')
                    $('#printdiv .returnDetails .row').append('<div class="col-sm-12 segTitle"><h5>Flight '+ countDept +'</h5></div><div class="list-group" id="segReturn'+countReturn+'"><div class="departureDetails"><ul><li><p class="airline"></p><span>Airline</span></li><li><p class="flightNumber"></p><span>Flight Number</span></li><li><p class="duration"></p><span>Flight Duration</span></li><li><p class="recordLocator"></p><span>Airline Confirmation</span></li></ul></div><div class="departureTime"><ul><li class="leave"><ul><li><p class="City"></p><span>Origin</span></li><li><p class="date"></p><span>Date | Time</span></li><li><p class="time"></p></li></ul></li><li class="arrive"><ul><li><p class="City"></p><span>Destination</span></li><li><p class="date"></p><span>Date | Time</span></li><li><p class="time"></p></li></ul></li></ul></div></div>');
                    
                        $('#departureDetails #itinerary-accordian #return-travel #segReturn'+countReturn+'.list-group .departureDetails .airline').text(segvalue.airlinecode);
                        $('#printdiv .returnDetails .row #segReturn'+countReturn+'.list-group .departureDetails .airline').text(segvalue.airlinecode);

                        $('#departureDetails #itinerary-accordian #return-travel #segReturn'+countReturn+'.list-group .departureDetails .flightNumber, #printdiv .returnDetails .row #segReturn'+countReturn+'.list-group .departureDetails .flightNumber').text(segvalue.flightnumber);

                        $('#departureDetails #itinerary-accordian #return-travel #segReturn'+countReturn+'.list-group .departureDetails .duration, #printdiv .returnDetails .row #segReturn'+countReturn+'.list-group .departureDetails .duration').text(segvalue.traveltime);

                        $('#departureDetails #itinerary-accordian #return-travel #segReturn'+countReturn+'.list-group .departureDetails .recordLocator, #printdiv .returnDetails .row #segReturn'+countReturn+'.list-group .departureDetails .recordLocator').text(segvalue.confirmation);

                        $('#departureDetails #itinerary-accordian #return-travel #segReturn'+countReturn+'.list-group .departureTime .leave .City, #printdiv .returnDetails .row #segReturn'+countReturn+'.list-group .departureTime .leave .City').text(segvalue.fromcitycode);

                        $('#departureDetails #itinerary-accordian #return-travel #segReturn'+countReturn+'.list-group .departureTime .leave .date, #printdiv .returnDetails .row #segReturn'+countReturn+'.list-group .departureTime .leave .date').text(segvalue.departure_datetime);

                        $('#departureDetails #itinerary-accordian #return-travel #segReturn'+countReturn+'.list-group .departureTime .arrive .City, #printdiv .returnDetails .row #segReturn'+countReturn+'.list-group .departureTime .arrive .City').text(segvalue.tocitycode);

                        $('#departureDetails #itinerary-accordian #return-travel #segReturn'+countReturn+'.list-group .departureTime .arrive .date, #printdiv .returnDetails .row #segReturn'+countReturn+'.list-group .departureTime .arrive .date').text(segvalue.arrival_datetime);
                })
            }
        })
    }
}
function setAddTravelersPage(){
    setTimeout(function(){
        $('body').find('li#address-book-page').addClass('active')
        console.log($('#fileUpload').val());
    },10)
    $('#fileUpload').change(function(){
        console.log($('#fileUpload').val())
        var path = $('#fileUpload').val();
        var filename = path.match(/[^\\/]*$/)[0];
        $('.file-return').text(filename);
        $("#addBulkTravelersButton").removeClass('hide');
        /*function makeBulkTable(){
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
                if (regex.test($("#fileUpload").val().toLowerCase())) {
                    if (typeof (FileReader) != "undefined") {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var table = $("<table id='bulkLoad'/>");
                            var rows = e.target.result.split("\n");
                            for (var i = 0; i < rows.length; i++) {
                                var row = $("<tr />");
                                var cells = rows[i].split(",");
                                for (var j = 0; j < cells.length; j++) {
                                    var cell = $("<td />");
                                    cell.html(cells[j]);
                                    row.append(cell);
                                }
                                table.append(row);
                            }
                            $("#bulkTable").html('');
                            $("#bulkTable").append(table);
                            $("#addBulkTravelersButton").removeClass('hide');
                        }
                        reader.readAsText($("#fileUpload")[0].files[0]);
                    } else {
                        alert("This browser does not support HTML5.");
                    }
                } else {
                    alert("Please upload a valid CSV file.");
                }
        }
        makeBulkTable();*/
    })
    var data = system_output.affiliate_user_list;
    var dataNew = []
    $.each(data, function(key,value){
        console.log(key,value)
        dataNew.push( {
            user_id : value.user_id,
            f_name : value.f_name, 
            m_initial : value.m_initial, 
            l_name: value.l_name,
            dob: value.dob,
            gender : value.gender, 
            email: value.email,
            phone: value.phone,
            known_number: value.known_number,
        });
    });
    data_obj = dataNew;
    var table = $('#addTravelers').DataTable({
        "aaData": data_obj,
        "order": [[ 1, "desc" ]],
        "select":true,
        "pageLength": 8,
        "info": false,
        "aoColumns": [
            { 
                "title": "User ID",
                "mDataProp": "user_id",
                "visible": false
            },
            { 
                "title": "First Name",
                "mDataProp": "f_name",
                "visible": true
            },
            { 
                "title": "Middle Initial",
                "mDataProp": "m_initial",
                "visible": true
            },
            { 
                "title": "Last Name",
                "mDataProp": "l_name",
                "visible": true
            },
            { 
                "title": "DOB",
                "mDataProp": "dob",
                "visible": false
            },
            { 
                "title": "Gender",
                "mDataProp": "gender",
                "visible": false
            },
            { 
                "title": "Email",
                "mDataProp": "email",
                "visible": true
            },
            { 
                "title": "Phone Number",
                "mDataProp": "phone",
                "visible": true
            },
            { 
                "title": "Known Travel Number",
                "mDataProp": "known_number",
                "visible": false
            }      
        ] //data changes to mDataProp
    });
    //Add traveler function
    $('#addTravelers tbody').on( 'click', 'tr', function () {
        $('#addTravelers tbody tr').removeClass('selected');
        $(this).addClass('selected');
        $('#tabs a[href="#personal-info"]').tab('show');
        $( "#datepicker" ).datepicker({dateFormat: "yyyy-mm-dd"});
        //Move table data over to fields//
        var data = table.row( this ).data();
        console.log(data)
        $('#userID').val(data.user_id);
        $('#firstName').val(data.f_name);
        $('#middleName').val(data.m_initial);
        $('#lastName').val(data.l_name);
        $('#datepicker').val(data.dob);
        $('#gender').val(data.gender);
        $('#email-address').val(data.email);
        $('#phone').val(data.phone);
    } );
    //change text from file select//
    
    $('.yes').click( function () {
       table.rows('.selected').remove().draw( false );
       $('.remove').addClass('hide');
       $('.no').trigger('click');
    });
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
    var data = system_output.site_list;
   /*var site_list = [
        {
            e_site_id:'tempotrip',
            display_name: 'Tempotrip.com',
            hostedhostname: 'az.dev.andy.wwwtempotrip.optionstravel.com'
        },
        {
            e_site_id:'militarytogo',
            display_name: 'Militarytogo.com',
            hostedhostname: 'az.dev.andy.wwwmilitarytogo.optionstravel.com'
        },
        {   
            e_site_id:'sandboxx',
            display_name: 'Sandboxx.tempotrip.com',
            hostedhostname: 'sandboxx.tempotrip.com'
        },
        {
            e_site_id:'ena',
            display_name: 'ENA.tempotrip.com',
            hostedhostname: 'ena.tempotrip.com'
        }
    ];*/
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
$(window).load(function(){
    $("input").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    })
});
//Global JS File//
