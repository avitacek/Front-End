
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

    $(document).ready(function () {
        $(".navCase, .sideBarNav").click(function () {
            $("body").toggleClass("hamburgerNavActive");
        });
        $("#adminAccordian").click(function () {
            $("#adminNav").toggleClass("open");
            $(this).toggleClass("open");
        });
        $("#travellerAccordian").click(function () {
            $("#travellerNav").toggleClass("open");
            $(this).toggleClass("open");
        });

        //Dynamic admin menu creation//
        var data = system_output.user_menus;

        var getMenuItem = function (itemData) {
            var item = $("<li id='" + itemData.id + "'>")
                    .append(
                            $("<i>", {
                                class: itemData.fontA
                            }),
                            $("<ul", {
                                class: itemData.fontA
                            }),
                            $("<a>", {
                                class: itemData.class,
                                target: itemData.target,
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
