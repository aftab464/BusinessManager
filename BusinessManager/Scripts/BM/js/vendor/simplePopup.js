// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



/*
* Popup Script
* File: jquery.simplePopup.js
* Version: 1.0.0
*/
(function ($) {

    $.fn.simplePopup = function (options) {

    var defaults = $.extend({
    }, options);
        
    /******************************
    Private Variables
    *******************************/         
        
    var object = $(this);
    var settings = $.extend(defaults, options);
        
    /******************************
    Public Methods
    *******************************/         
        
    var methods = {

        init: function() {
        return this.each(function () {
            methods.appendHTML();
            methods.setEventHandlers();
            methods.showPopup();
        });
        },

        /******************************
        Append HTML
        *******************************/            

        appendHTML: function() {

        // if this has already been added we don't need to add it again
        if ($('.simplePopupBackground').length === 0) {
            var background = '<div class="simplePopupBackground"></div>';
            $('body').prepend(background);
        }

        if(object.find('.simplePopupClose').length === 0) {
            var close = '<div class="simplePopupClose"></div>';
            object.prepend(close);
        }
        },

        /******************************
        Set Event Handlers
        *******************************/            

        setEventHandlers: function() {

        $(".simplePopupClose, .simplePopupBackground").on("click", function (event) {
            methods.hidePopup();
        });

        $(window).on("resize", function(event){ 
            methods.positionPopup();
        });             

        },

        showPopup: function() {
        $(".simplePopupBackground").css({
            "opacity": "0.7"
        });
        $(".simplePopupBackground").fadeIn("fast");
        object.fadeIn("slow");
        methods.positionPopup();
        },

        hidePopup: function() {
        $(".simplePopupBackground").fadeOut("fast");
        object.fadeOut("fast");
        },          

        positionPopup: function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var popupWidth = object.outerWidth();                
        var popupHeight = object.outerHeight();

        var topPos = (windowHeight / 2) - (popupHeight / 2);
        var leftPos = (windowWidth / 2) - (popupWidth / 2);
        if(topPos < 30) topPos = 30;
        
        object.css({
            "position": "absolute",
            "top": topPos,
            "left": leftPos
        });
        },          

    };
        
    if (methods[options]) { // $("#element").pluginName('methodName', 'arg1', 'arg2');
        return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof options === 'object' || !options) {   // $("#element").pluginName({ option: 1, option:2 });
        return methods.init.apply(this);  
    } else {
        $.error( 'Method "' +  method + '" does not exist in simple popup plugin!');
    } 
    };

})(jQuery);


