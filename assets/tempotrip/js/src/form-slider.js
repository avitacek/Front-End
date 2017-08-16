(function( $ ) {
    $( document ).ready(function(e) {
        // start doc ready          
        var myScroll;
        var hasTouch = 'ontouchstart' in window,
            END_EV = hasTouch ? 'touchend' : 'click'; 
    });
})(jQuery);

var hasTouch = 'ontouchstart' in window;
        END_EV = hasTouch ? 'touchend' : 'click'; //public so no new "var"
        MOVE_EV = hasTouch ? 'touchmove' : 'mousemove'; // read mousemove isnt the same as touchmove
        
    var START_EV = hasTouch ? 'touchstart' : 'mousedown', 
        // but....it's the best solution I have
        CANCEL_EV = hasTouch ? 'touchcancel' : 'touchcancel';


     

