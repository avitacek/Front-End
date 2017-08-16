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
            sub: null
        }, {
            name: 'Travellers',
            link: '1',
            sub: null
        }, {
            name: 'Reports',
            link: '2',
            sub: null
        }, {
            name: 'Booking Sites',
            link: '3',
            sub: null
        },{
            name: 'Trips',
            link: '4',
            sub: null
        }, {
            name: 'Settings',
            link: '5',
            sub: null
        },
        {
            name: 'Support',
            link: '6',
            sub: null
        }]
    };
    var getMenuItem = function (itemData) {
        var item = $("<li>")
            .append(
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
   //$menu.menu();
   //$menu.addClass('open');

   $( "#adminAccordian" ).trigger( "click" );
   $( "#travellerAccordian" ).trigger( "click" );
});

//Global Navigation JS File//
