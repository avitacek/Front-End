//Global Navigation JS File//
var windowW = window.innerWidth;
var windowH = window.innerHeight;

//Touch Click VARS//
var hasTouch = 'ontouchstart' in window;
  	END_EV = hasTouch ? 'touchend' : 'click'; //public so no new "var"
  	MOVE_EV = hasTouch ? 'touchmove' : 'mousemove'; // read mousemove isnt the same as touchmove
    
var START_EV = hasTouch ? 'touchstart' : 'mousedown', 
// but....it's the best solution I have
  	CANCEL_EV = hasTouch ? 'touchcancel' : 'touchcancel';
//Touch Click VARS END//

$(document).ready(function(){
	$(".navCase").click(function(){
    	$("body").toggleClass("hamburgerNavActive");
	});
	$("#adminAccordian").click(function(){
    	$("#adminNav").toggleClass("open");
	});
	$("#travellerAccordian").click(function(){
    	$("#travellerNav").toggleClass("open");
	});
});

//Global Navigation JS File//
