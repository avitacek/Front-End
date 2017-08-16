$( document ).ready(function() {
    var data = {
        menu: [{
            name: 'Profile',
            link: '0',
            sub: null
        }, {
            name: 'My Trips',
            link: '1',
        }, {
            name: 'My Travellers',
            link: '2',
        }, {
            name: 'All Trips',
            link: '3',
        },{
            name: 'Approvals',
            link: '4',
        }, {
            name: 'Vince',
            link: '5',
        },
        {
            name: 'Andy',
            link: '6',
        },
        {
            name: 'Settings',
            link: '7',
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
    
    var $menu = $("#tab-menu");
    $.each(data.menu, function () {
        $menu.append(
            getMenuItem(this)
        );
    });
   $menu.menu();
});