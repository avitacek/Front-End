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
	$(".navCase, .sideBarNav").click(function(){
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
            link: '/profile.html',
            fontA:'fa fa-home fa-lg',
            sub: null
        }, {
            name: 'Travellers',
            link: '1',
            fontA:'fa fa-users fa-lg',
            sub: null
        }, {
            name: 'Reports',
            link: '2',
            fontA:'fa fa-bar-chart fa-lg',
            sub: null
        }, {
            name: 'Flights',
            link: '3',
            fontA:'fa fa-plane fa-lg',
            sub: null
        },{
            name: 'Trips',
            link: '/mytrips.html',
            fontA:'fa fa-briefcase fa-lg',
            sub: null
        }, {
            name: 'Settings',
            link: '5',
            fontA: 'fa fa-cog fa-lg',
            sub: null
        },
        {
            name: 'Support',
            link: '6',
            fontA: 'fa fa-life-ring fa-lg',
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
		            href: itemData.link,
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
