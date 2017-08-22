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
    	"order": [[ 3, "desc" ]]
    });
    var tableRow = $('#myTrips tbody tr:first-child');

     $('#myTrips tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        $('#myTrips tbody tr').removeClass('selected');
        $(this).addClass('selected')
        $('.deptCity').text(data[0]);
        $('.returnCity').text(data[1]);
        $('.tripType').text(data[2]);
        $('.deptDate').text(data[3]);
        $('.returnDate').text(data[4]);
        $('.costs').text(data[5]);
        console.log(data);
    });
   // $('#myTrips tbody tr:first-child').trigger('click');
}
$(document).ready(function(){
	checkPage()
});

//Global JS File//
