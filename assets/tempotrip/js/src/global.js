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
}
function setTripsPage(){
     var table = $('#myTrips').DataTable({
    	"ajax": '../js/ajax/trips.json',
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
        $('#departure-travel .departureDetails .duration').text(data[5]);
        $('#departure-travel .departureDetails .recordLocator').text(data[6]);

        $('#departure-travel .departureTime .leave .date').text(data[7]);
        $('#departure-travel .departureTime .leave .time').text(data[8]);
        $('#departure-travel .departureTime .arrive .date').text(data[9]);
        $('#departure-travel .departureTime .arrive .time').text(data[10]);

        $('.returnCity').text(data[1]);
        $('.tripType').text(data[2]);
        $('.deptDate').text(data[3]);
        $('.returnDate').text(data[4]);
        $('.costs').text(data[5]);
        console.log(data);
    });
    setTimeout(function(){
    	var tableRow = $('#myTrips tbody tr:first-child');
    	$(tableRow).trigger('click');
    },10);
}
$(document).ready(function(){
	checkPage()
});

//Global JS File//
