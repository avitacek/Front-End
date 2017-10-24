$(document).ready(function() {
    $( "#dates-from" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
    $( "#dates-to" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
    var slideScroll;
	var hasTouch = 'ontouchstart' in window,
		END_EV = hasTouch ? 'touchend' : 'click'; 
		var slideWidth = $('#meeting-maker').width();
		var slideLength = $('.slide').length;
		console.log(slideLength)
		$(".slide").css("width", slideWidth - 0 + 'px')
		$(".slider").css("width", slideWidth * slideLength)
});

var slideScroll, $currSlide, mySlideIdx;
var lastPageNum = 0;
var $lastPage = $('.slider:first-child');
var $slideElems;
var $lastPageId = null;

var hasTouch = 'ontouchstart' in window;
		        END_EV = hasTouch ? 'touchend' : 'click'; //public so no new "var"
		        MOVE_EV = hasTouch ? 'touchmove' : 'mousemove'; // read mousemove isnt the same as touchmove
        
var START_EV = hasTouch ? 'touchstart' : 'mousedown', 
    // but....it's the best solution I have
    CANCEL_EV = hasTouch ? 'touchcancel' : 'touchcancel';

$(document).ready(function(){
	$lastPage= $('.slider:first-child');
	initListeners();
	initVariables();
});


(function() {
	function load() {
		
		if ($('body').attr('id') === 'meetingMaker-page'){
			slideScroll = new IScroll('#wrapper', {
			scrollX: true, 
			scrollY: false, 
			mouseWheel: false,
			momentum: false,
			snap: 'div.slide',
			hScrollbar : true,
			snapThreshold : 250,
			bounce : false,
			});

			slideScroll.on('scrollEnd', function () {
				addActiveClass();
	  
			});
			onScrollEndCustom();
		}
		else{

		}
	}
	
	window.addEventListener('load', load, false);
	
})();
function addActiveClass(){
        var currentSection = slideScroll.currentPage.pageX;
        var currentPageName = document.getElementById('slide'+currentSection); 
        $('.slide').removeClass('active');
        $(currentPageName).addClass('active');
        console.log('add Active Called')
        checkNav();
}
function resetNav(){
	$('.indicatorNav ul li').removeClass('active')
}
function checkNav(){
	console.log('check Nav Called')
	if($('#slide0').hasClass('active')){
		resetNav()	
		$('.slide0Indi').addClass('active');
	}
    if($('#slide1').hasClass('active')){
		resetNav()
		$('.slide1Indi').addClass('active');
	}
	if($('#slide2').hasClass('active')){
		resetNav()
		$('.slide2Indi').addClass('active');
	}
	if($('#slide3').hasClass('active')){
		resetNav()
		$('.slide3Indi').addClass('active');
	}
	if($('#slide4').hasClass('active')){
		resetNav()
		$('.slide4Indi').addClass('active');
	}
	if($('#slide5').hasClass('active')){
		resetNav()
		$('.slide5Indi').addClass('active');
	}
}
function initListeners()
{
	$(".slide0Indi").on(END_EV, function (e) {
    	slideScroll.goToPage(0,0, 500);
    }); 
    $(".slide1Indi").on(END_EV, function (e) {
    	slideScroll.goToPage(1,0, 500);
    });
    $(".slide2Indi").on(END_EV, function (e) {
    	slideScroll.goToPage(2,0, 500);	
    });
    $(".slide3Indi").on(END_EV, function (e) {
    	slideScroll.goToPage(3,0, 500);	
    });
    $(".slide4Indi").on(END_EV, function (e) {
    	slideScroll.goToPage(4,0, 500);	
    });
    //Start the selecgtion buttons//
    // step buttons//
    $(".slide a.limited-time").on(END_EV, function (e) {
    	$('#slide1 .dates').removeClass('hide');
    	slideScroll.next();	
    
    });
    $(".slide a.unlimited-time").on(END_EV, function (e) {
    	$('#slide1 .dates').addClass('hide');
    	slideScroll.next();	
    });
    // step buttons//
    $(".slide a.next").on(END_EV, function (e) {
    	slideScroll.next();
   
    });
    $(".slide a.previous").on(END_EV, function (e) {
    	slideScroll.prev();	
   
    });
}  
function initVariables(){
	var hasTouch = 'ontouchstart' in window;
        END_EV = hasTouch ? 'touchend' : 'click'; //public so no new "var"
        MOVE_EV = hasTouch ? 'touchmove' : 'mousemove'; // read mousemove isnt the same as touchmove
        
    var START_EV = hasTouch ? 'touchstart' : 'mousedown', 
        // but....it's the best solution I have
        CANCEL_EV = hasTouch ? 'touchcancel' : 'touchcancel';
}      

function onScrollEndCustom($currPage, $lastPage){
	addActiveClass();
}
