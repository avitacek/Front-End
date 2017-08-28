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

var hasTouch = 'ontouchstart' in window;
    END_EV = hasTouch ? 'touchend' : 'click'; //public so no new "var"
    MOVE_EV = hasTouch ? 'touchmove' : 'mousemove'; // read mousemove isnt the same as touchmove
        
var START_EV = hasTouch ? 'touchstart' : 'mousedown', 
        // but....it's the best solution I have
    CANCEL_EV = hasTouch ? 'touchcancel' : 'touchcancel';

function checkPage(){
	if ($('body').attr('id')=== 'landing-page'){
		
	}else if ($('body').attr('id') === 'profile-page'){
		
	}else if ($('body').attr('id') === 'myTrips-page'){
		setTripsPage();
	}
    else if ($('body').attr('id') === 'all-trips-page'){
        setAllTripsPage();
    }
}
function setTripsPage(){
     var table = $('#myTrips').DataTable({
    	"ajax": '../js/ajax/my_trips.json',
    	"select": true,
    	"order": [[ 7, "desc" ]],
        "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": true,
            },
            {
                "targets": [ 1 ],
                "visible": false,
            },
            {
                "targets": [ 2 ],
                "visible": false
            },
            {
                "targets": [ 3 ],
                "visible": true,
            },
            {
                "targets": [ 4 ],
                "visible": false
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
                "visible": true,
            },
            {
                "targets": [ 8 ],
                "visible": true,
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
                "visible": true,
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
                "visible": true,
            },
            {
                "targets": [ 15 ],
                "visible": false
            },
            {
                "targets": [ 16 ],
                "visible": false
            },
            {
                "targets": [ 17 ],
                "visible": false,
            },
            {
                "targets": [ 18 ],
                "visible": true,
            },
            {
                "targets": [ 19 ],
                "visible": true,
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
            }
        ]
    });
    $('#myTrips tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        $('#myTrips tbody tr').removeClass('selected');
        $(this).addClass('selected')
        $('#deptHeader .City').text(data[0]);
        $('#deptHeader .CityCountry').text(data[1]);
        $('#arrvHeader .City').text(data[11]);
        $('#arrvHeader .CityCountry').text(data[12]);

        $('#departure-travel .departureDetails .airline').text(data[3]);
        $('#departure-travel .departureDetails .flightNumber').text(data[4]);
        
        $('#departure-travel .departureDetails .recordLocator').text(data[6]);

        $('#departure-travel .departureTime .leave .date').text(data[7]);
        $('#departure-travel .departureTime .leave .time').text(data[8]);
        $('#departure-travel .departureTime .arrive .date').text(data[9]);
        $('#departure-travel .departureTime .arrive .time').text(data[10]);

        $('#return-travel .departureDetails .airline').text(data[14]);
        $('#return-travel .departureDetails .flightNumber').text(data[15]);
        $('#return-travel .departureDetails .duration').text(data[16]);
        $('#return-travel .departureDetails .recordLocator').text(data[17]);

        $('#return-travel .departureTime .leave .date').text(data[18]);
        $('#return-travel .departureTime .leave .time').text(data[19]);
        $('#return-travel .departureTime .arrive .date').text(data[20]);
        $('#return-travel .departureTime .arrive .time').text(data[21]);

        //add print data//
        $('.departureDetails .depart .City').text(data[0]);
        $('.departureDetails .depart .time').text(data[8]);
        $('.departureDetails .depart .CityCountry').text(data[1]);
        $('.departureDetails .depart .airline').text(data[3]);
        $('.departureDetails .depart .flightNumber').text(data[4]);
        $('.departureDetails .depart .date').text(data[7]);
        $('.departureDetails .arrive .City').text(data[11]);
        $('.departureDetails .arrive .time').text(data[10]);
        $('.departureDetails .arrive .CityCountry').text(data[12]);

        $('.returnDetails .depart .City').text(data[11]);
        $('.returnDetails .depart .time').text(data[19]);
        $('.returnDetails .depart .CityCountry').text(data[12]);
        $('.returnDetails .depart .airline').text(data[14]);
        $('.returnDetails .depart .flightNumber').text(data[15]);
        $('.returnDetails .depart .date').text(data[20]);
        $('.returnDetails .arrive .City').text(data[0]);
        $('.returnDetails .arrive .time').text(data[21]);
        $('.returnDetails .arrive .CityCountry').text(data[1]);

        console.log(data);
        switchDepartDuration(data[5]);
        switchReturnDuration(data[16]);
    });
    setTimeout(function(){
    	var tableRow = $('#myTrips tbody tr:first-child');
    	$(tableRow).trigger('click');
    },500);
    
    function switchDepartDuration(a){
        var dHours = Math.trunc(a/60);
        var dMinutes = a % 60;
        $('#departure-travel .departureDetails .duration').text(dHours +"h "+ dMinutes + "m");
        $('.print-wrapper .departureDetails .duration').text(dHours +"h "+ dMinutes + "m");

        console.log(dHours +"h "+ dMinutes + " m");
    }
    function switchReturnDuration(b){
        var rHours = Math.trunc(b/60);
        var rMinutes = b % 60;
        $('#return-travel .departureDetails .duration').text(rHours +"h "+ rMinutes + "m");
        $('.print-wrapper .returnDetails .duration').text(rHours +"h "+ rMinutes + "m");
        console.log(rHours +" h "+ rMinutes + " m");
    }
}
function setAllTripsPage(){
     var table = $('#allTrips').DataTable({
        "ajax": '../js/ajax/all_trips.json',
        "select": true,
        "order": [[ 0, "desc" ]],
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
                "visible": true
            },
            {
                "targets": [ 3 ],
                "visible": false
            },
            {
                "targets": [ 4 ],
                "visible": false
            },
            {
                "targets": [ 5 ],
                "visible": true
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
                "visible": true
            },
            {
                "targets": [ 10 ],
                "visible": true,
            },
            {
                "targets": [ 11 ],
                "visible": false
            },
            {
                "targets": [ 12 ],
                "visible": false
            },
            {
                "targets": [ 13 ],
                "visible": true
            },
            {
                "targets": [ 14 ],
                "visible": false
            },
            {
                "targets": [ 15 ],
                "visible": false
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
                "visible": true
            },
            {
                "targets": [ 21 ],
                "visible": true
            },
            {
                "targets": [ 22 ],
                "visible": false
            },
            {
                "targets": [ 23 ],
                "visible": false
            },
            {
                "targets": [ 24 ],
                "visible": true
            }
        ]
    });
    $('#allTrips tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        $('#allTrips tbody tr').removeClass('selected');
        $(this).addClass('selected')
        $('#travellerName .traveller_name').text(data[0]);
        $('#travellerName .traveller_email').text(data[1]);
        $('#deptHeader .City').text(data[2]);
        $('#deptHeader .CityCountry').text(data[3]);
        $('#arrvHeader .City').text(data[15]);
        $('#arrvHeader .CityCountry').text(data[14]);

        $('#departure-travel .departureDetails .airline').text(data[5]);
        $('#departure-travel .departureDetails .flightNumber').text(data[6]);
        $('#departure-travel .departureDetails .recordLocator').text(data[8]);

        $('#departure-travel .departureTime .leave .date').text(data[11]);
        $('#departure-travel .departureTime .leave .time').text(data[10]);
        $('#departure-travel .departureTime .arrive .date').text(data[11]);
        $('#departure-travel .departureTime .arrive .time').text(data[12]);

        $('#return-travel .departureDetails .airline').text(data[16]);
        $('#return-travel .departureDetails .flightNumber').text(data[17]);
        $('#return-travel .departureDetails .duration').text(data[18]);
        $('#return-travel .departureDetails .recordLocator').text(data[19]);

        $('#return-travel .departureTime .leave .date').text(data[20]);
        $('#return-travel .departureTime .leave .time').text(data[21]);
        $('#return-travel .departureTime .arrive .date').text(data[22]);
        $('#return-travel .departureTime .arrive .time').text(data[23]);

        //add print data//
        $('.traveller').text(data[0]);
        $('.departureDetails .depart .City').text(data[3]);
        $('.departureDetails .depart .time').text(data[11]);
        $('.departureDetails .depart .CityCountry').text(data[4]);
        $('.departureDetails .depart .airline').text(data[5]);
        $('.departureDetails .depart .flightNumber').text(data[6]);
        $('.departureDetails .depart .date').text(data[10]);
        $('.departureDetails .arrive .City').text(data[14]);
        $('.departureDetails .arrive .time').text(data[11]);
        $('.departureDetails .arrive .CityCountry').text(data[15]);

        $('.returnDetails .depart .City').text(data[14]);
        $('.returnDetails .depart .time').text(data[22]);
        $('.returnDetails .depart .CityCountry').text(data[15]);
        $('.returnDetails .depart .airline').text(data[16]);
        $('.returnDetails .depart .flightNumber').text(data[17]);
        $('.returnDetails .depart .date').text(data[21]);
        $('.returnDetails .arrive .City').text(data[3]);
        $('.returnDetails .arrive .time').text(data[4]);
        $('.returnDetails .arrive .CityCountry').text(data[3]);

        console.log(data);
        changeDepartDuration(data[7]);
        changeReturnDuration(data[18]);
    });
    setTimeout(function(){
        var tableRow = $('#allTrips tbody tr:first-child');
        $(tableRow).trigger('click');
    },500);
    
    function changeDepartDuration(a){
        var dHours = Math.trunc(a/60);
        var dMinutes = a % 60;
        $('#departure-travel .departureDetails .duration').text(dHours +"h "+ dMinutes + "m");
        $('.print-wrapper .departureDetails .duration').text(dHours +"h "+ dMinutes + "m");

        console.log(dHours +"h "+ dMinutes + " m");
    }
    function changeReturnDuration(b){
        var rHours = Math.trunc(b/60);
        var rMinutes = b % 60;
        $('#return-travel .departureDetails .duration').text(rHours +"h "+ rMinutes + "m");
        $('.print-wrapper .returnDetails .duration').text(rHours +"h "+ rMinutes + "m");
        console.log(rHours +" h "+ rMinutes + " m");
    }
}
$(document).ready(function(){
	checkPage()
});

//Global JS File//
