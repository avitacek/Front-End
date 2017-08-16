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
    	$(this).toggleClass("open");
	});
	$("#travellerAccordian").click(function(){
    	$("#travellerNav").toggleClass("open");
    	$(this).toggleClass("open");
	});

	//Dynamic admin menu creation//
	var data = {
        menu: [{
            name: 'Overview',
            link: '0',
            fontA:'fa fa-home',
            sub: null
        }, {
            name: 'Travellers',
            link: '1',
            fontA:'fa fa-users',
            sub: null
        }, {
            name: 'Reports',
            link: '2',
            fontA:'fa fa-bar-chart',
            sub: null
        }, {
            name: 'Booking Sites',
            link: '3',
            fontA:'fa fa-plane',
            sub: null
        },{
            name: 'Trips',
            link: '4',
            fontA:'fa fa-briefcase',
            sub: null
        }, {
            name: 'Settings',
            link: '5',
            fontA: 'fa fa-cog',
            sub: null
        },
        {
            name: 'Support',
            link: '6',
            fontA: 'fa fa-life-ring',
            sub: null
        }]
    };
    var getMenuItem = function (itemData) {
        var item = $("<li>")
            .append(
            	$("<i>",{
            		class: itemData.fontA
            	}),
		        $("<a>", {
		            href: '#' + itemData.link,
		            html: itemData.name
		        }));
        if (itemData.sub) {
            var subList = $("<ul>");
            $.each(itemData.sub, function () {
                subList.append(getMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    };
    
    var $menu = $("#dynamic-menu");
    $.each(data.menu, function () {
        $menu.append(
            getMenuItem(this)
        );
    });
});

//Global Navigation JS File//
