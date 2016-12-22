var _windowWidth = window.innerWidth || $(window).width();
var _view = 0;
if (_windowWidth < 768) _view = 320
else if (_windowWidth >= 768 && _windowWidth < 1024) _view = 768;
else if (_windowWidth >= 1024 && _windowWidth < 1280) _view = 1024;
else if (_windowWidth >= 1280 && _windowWidth < 1400) _view = 1280;
else _view = 1920;


/** 
* Ready Function---------------STARTS
*/
$(function () {

 $('.appNameTooltip').powerTip({
        placement: 'n',
        smartPlacement: true
 });


 $('.valueTooltip').powerTip({
     placement: 'n',
     mouseOnToPopup:true
 });
    
 $('.riskTooltip').powerTip({
     placement: 'n',
     mouseOnToPopup: true
 });
    $('.valueTooltip').data('powertip', function () {
        var url = document.location.origin + "/Home/RiskValue";
        return 'Value is an indication of quality, likelihood </br>of a good user experience, and how </br>beneficial the app might be to users. </br>The higher the Value score, the better the </br>app in terms of how it satisfied our Value </br>questions.</br><a style="color: white;" href="' + url + '">Click here to read more about our review </br>process</a>';
    });
    $('.riskTooltip').data('powertip', function () {
        var url = document.location.origin + "/Home/RiskValue";
        return 'Risk is associated with the level of uncertainty on </br>the reliability of content and operation of the app, </br>and potential risks around users data. </br>The higher the risk score, the riskier the app </br>could be based on our Risk questions. </br>(It should be noted, that our assessment looks </br>for statements or evidence in the app that </br>indicate reduced risk. </br>The absence of these statements only indicates a </br>possibility of risk, and not the likelihood).</br><a style="color: white;" href="' + url + '">Click here to read more about our review process</a>';
    });
    $('.appNameTooltip').data('powertip', function () {
        var a = this;
        var appname = a.dataset.appname;
        return appname;
    });


    $('.downloadLinkTooltip').powerTip({
     placement: 'n',
     mouseOnToPopup: true
    });
    $('.downloadLinkTooltip').data('powertip', function () {
        var downloadLink = this.dataset.downloadlink;
        return downloadLink;
    });
    $('.publishernameTooltip').powerTip({
     placement: 'n',
     smartPlacement: true
    });
    $('.publishernameTooltip').data('powertip', function () {
        var publisherName = this.dataset.publishername;
        return publisherName;
    });
    // // Submenu Show/Hide Function Starts
    // $(".mainMenu").click(function (e) {
    // 	$(".submenu").slideToggle();
    // 	$(this).toggleClass("currentMainMenu");
    // 	e.preventDefault();
    // });

    // $(".closeIcon").click(function (e) {
    // 	$(".submenu").slideUp();
    // 	$(".mainMenu").removeClass("currentMainMenu");
    // 	e.preventDefault();
    // });
    // // Submenu Show/Hide Function Ends

    //$('.north').powerTip({ placement: 'n' });
    //$('.north-west-alt').powerTip({ placement: 'nw-alt' });
    //$('.north-east-alt').powerTip({ placement: 'ne-alt' });
    // // Login Container Show/Hide Function Starts
    // $(".loginBtn").click(function (e) {
    // 	$(".loginWrapp").slideToggle();
    // 	$(this).toggleClass("currentMainMenu");
    // 	e.preventDefault();
    // });
    $(".boardCol #rmAbout").click(function () {
        var $this = $(this);
        $this.toggleClass("active");
        if ($this.hasClass('active')) {
            $this.text('Read Less');
        } else {
            $this.text('Read More');
        }
        $(".boardCol .teamDetail p span").slideToggle();
    });

    $(".aboutContainer #rmAbout").click(function () {
        var $this = $(this);
        $this.toggleClass("active");
        if ($this.hasClass('active')) {
            $this.text('Read Less');
        } else {
            $this.text('Read More');
        }
        $(".aboutContainer .teamDetail p span").slideToggle();
    });
    //for mobile 


    if ($('.toggleMenu').length > 0) {
        $('nav').on('click', '.toggleMenu', function (e) {

            e.preventDefault();
            var $this = $(this);
            if ($('.nav').is(":visible")) {
                $this.next().stop().slideUp();
                $this.find('.arrow').removeClass('open');
            }
            else {
                $this.next().stop().slideDown();
                $this.find('.arrow').addClass('open');
            }
        }); //click ends
    } //Exists

    /**
    * Hide the Menu when clicked outside
    */
    $('body').on('click', function (e) {
        if (_view <= 768) {
            if ($('.nav').is(":visible")) {
                var selectedElement = e.target;
                if (!selectedElement.closest('nav')) {
                    $('.nav').slideUp();
                    $('nav').find('.arrow').removeClass('open');
                }

            }
        }
    }); //click ends

    if ($('.toggleMenu').length > 0) {
        $(".currentSection").on('click', '.toggleMenu', function (e) {

            if (_view <= 768) {
                e.preventDefault();
                var $this = $(this);
                if ($this.find('.open').length > 0) {
                    $this.next().stop().slideUp();
                    $this.find('.arrowMenu').removeClass('open');
                }
                else {
                    $this.next().stop().slideDown();
                    $this.find('.arrowMenu').addClass('open');
                }
            }

        }); //click ends
    } //Exists

    /**
    * Hide the Menu when clicked outside
    */
    $('body').on('click', function (e) {
        if (_view <= 768) {
            if ($('.categorySection #side').is(":visible")) {
                var selectedElementN = $(e.target);
                if (!selectedElementN.closest('.currentSection').length) {
                    $('#side').slideUp();
                    $('.currentSection').find('.arrowMenu').removeClass('open');
                }
            }
        }
    });


    // Drop down 
    /*if ($('.dropdown').length > 0) {
        $('.dropdown').each(function () {
            $(this).ddslick({
                width: '100%'

            });
        })
    }*///Exists

    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    var time = 150;
    var distance = 270;

    function wheel(event) {
        // if (event.wheelDelta) delta = event.wheelDelta / 120;
        // else if (event.detail) delta = -event.detail / 3;

        // handle();
        // if (event.preventDefault) event.preventDefault();
        // event.returnValue = false;
    }

    function handle() {

        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, time);
    }


    // $(document).keydown(function (e) {

    // 	switch (e.which) {
    //         //up
    //         case 38:
    //         $('html, body').stop().animate({
    //         	scrollTop: $(window).scrollTop() - distance
    //         }, time);
    //         break;

    //             //down
    //             case 40:
    //         $('html, body').stop().animate({
    //         	scrollTop: $(window).scrollTop() - distance
    //         }, time);
    //         break;

    //             //down
    //             case 40:
    //             $('html, body').stop().animate({
    //             	scrollTop: $(window).scrollTop() + distance
    //             }, time);
    //             break;
    //         }
    //     }); 

    // hide #back-top first
    $(".back-to-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.back-to-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    //}); //Ready Function ends


    // PopUp
    $('#loginHeader1,#loginHeader2').click(function () {


        $('#loginConent').simplePopup();
        $('#loginForm')[0].reset();
        $('label.error').hide();


        if ($('#resetCancel').is(':visible')) {
            $('#resetCancel').trigger('click');
        }

    });


    $('#signupHeader1,#signupHeader2').click(function () {

        $('#signupConent').simplePopup();
        $('#signupForm')[0].reset();
        $("<label id='genderError' for='Gender' class='error'>Please choose different value</label>").appendTo('#Gender');
        $('label.error').hide();
    });

   
    $('#editProfileBtn').click(function () {
        $("#EditProfilePopUp").simplePopup();
    });

    $('.fancybox').fancybox({
        prevEffect: 'none',
        nextEffect: 'none',

        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    // Show Reset Div
    // $('.forgotLink a').click(function(){

    // 	$('.loginWrapp').fadeOut('fast');	
    // 	$('.resetWrapp').fadeIn('fast');

    verticalAlignCall();


    //var timer = document.querySelector('.timer');
    //if (timer) {
    //    timer.onclick = function () {
    //        swal("", "Your changes have been saved!", "success");
    //        $('button.confirm').hide();
    //        setTimeout(swal.close, 2000);
    //    };
    //}

    //var check = document.querySelector('.check');
    //if (check) {
    //    check.onclick = function () {
    //        swal("", "Review has been marked for checking!", "success");
    //        $('button.confirm').hide();
    //        setTimeout(swal.close, 2000);
    //    };
    //}
    //var publishReview = document.querySelector('.publishReview');
    //if (publishReview) {
    //    publishReview.onclick = function () {
    //        swal({
    //            title: "",
    //            text: "Publishing a review will make it public, and will send out purchase/registration links to the developer of this app if this is the first review. ARE YOU SURE?",
    //            type: "warning",
    //            showCancelButton: true,
    //            confirmButtonColor: '#DD6B55',
    //            confirmButtonText: 'Confirm',
    //            closeOnConfirm: false
    //        },
    //        function () {
    //            swal("", "Your review is published", "success");
    //            $('button.confirm').hide();
    //            setTimeout(swal.close, 2000);
    //        });
    //    };
    //}



   //// var nextBtn = document.querySelector('#nextBtn');
   // if (nextBtn) {
   //     nextBtn.onclick = function () {
   //         swal("", "You cannot proceed without determining the level of the app. Please double-check that you have answered all questions correctly. Escalate this app to someone else if it persists", "warning");
   //     };
   // }

   // var levlNxtBtn = document.querySelector('#levlNxtBtn');
   // if (levlNxtBtn) {
   //     document.querySelector('#levlNxtBtn').onclick = function () {
   //         swal("", "This tool is meant for level 1 or 2 apps. Please return to the AppPlatform page to select another review tool", "warning");
   //     };
   // }


    // Publish Button Toggle
    //$(".toggleBtn").click(function () {
    //    var $this = $(this);
    //    $this.toggleClass("active");
    //    if ($this.hasClass('active')) {
    //        $this.text('Unpublish');
    //    } else {
    //        $this.text('Publish');
    //    }
    //});

    // Mark to be checked Button Toggle
    //var someImg = $("#appShowcase li img");
    //
    // var $this = $(this);
    //for (var image in someImg) {

    //}
    //if (someImg.width() > someImg.height()) {
    //    $("#appShowcase li img").addClass('Landscape');
    //}
    //else if (someImg.width() < someImg.height()) {
    //    $("#appShowcase li img").addClass('portrait');
    //}



    $(".toggleBtnChk").click(function () {
        var $reviewMarkCheckBtn = $('#reviewMarkCheckBtn[style*="cursor"]');
        if ($reviewMarkCheckBtn.css("cursor") != "default")
        {
            var $this = $(this);
            $this.toggleClass("active");
            //if ($this.hasClass('active')) {
            //    $this.text('Unmark to be checked');
            //} else {
            //    $this.text('Mark to be checked');
            //}
        }
        });


    // YesNo Button Function Call
    bindButtons();
    bindButtonsScale();
    bindButton();

    // Datepicker
    $("#datepicker").datepicker();
    $("#tDL").datepicker();
    $('#reviewDatepicker').datepicker();

    if (_view >= 320 && _view < 768) {
        $('.postheadingContainer h2 a').each(function (index) {
            var appName = $(this).text();
            if (appName.length > 20) {
                $(this).text(appName.substr(0, 20) + "...");
            }
        });
        $('.downloadApps').each(function (index) {
            var appName = $(this).text();
            if (appName.length > 15) {
                $(this).text(appName.substr(0, 12) + "...");
            }
        });
    }

    //for tabs

    if (_view >= 768 && _view < 1024) {

        $('.postheadingContainer h2 a').each(function (index) {
            var appName = $(this).text();
            if (appName.length > 30) {
                $(this).text(appName.substr(0, 29) + "...");
            }
        });
        $('.downloadApps').each(function (index) {
            var appName = $(this).text();
            if (appName.length > 15) {
                $(this).text(appName.substr(0, 12) + "...");
            }
        });
    }

    //for desktop

    if (_view >= 1024 && _view < 1280) {
        $('.postheadingContainer h2 a').each(function (index) {
            var appName = $(this).text();
            if (appName.length > 50) {
                $(this).text(appName.substr(0, 49) + "...");
            }
        });
        $('.downloadApps').each(function (index) {
            var appName = $(this).text();
            if (appName.length > 15) {
                $(this).text(appName.substr(0, 12) + "...");
            }
        });
    }

    //for higher resolutions
    if (_view >= 1280) {

        $('.postheadingContainer h2 a').each(function (index) {
            var appName = $(this).text();

            if (appName.length > 50) {
                $(this).text(appName.substr(0, 49) + "...");
            }
        });
        $('.downloadApps').each(function (index) {
            var appName = $(this).text();
            if (appName.length > 15) {
                $(this).text(appName.substr(0, 15) + "...");
            }
        });
    }


    // Tool Tips placement
    $('.north').powerTip({ placement: 'n' });
    $('.north-west-alt').powerTip({ placement: 'nw-alt' });
    $('.north-east-alt').powerTip({ placement: 'ne-alt' });
    
   
    // Responsive Tabs
    // RESPONSIVEUI.responsiveTabs();
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // CheckBox Selection My Recommendation page
    $('.appselectionWrapp input[type="checkbox"]').click(function () {
        if ($(this).attr("value") == "appname") {
            $(".appname").toggle();
        }
        if ($(this).attr("value") == "dates") {
            $(".appdate").toggle();
        }
    });

    $("#timeline").click(function () {
        $(".patientappsRecommended").hide();
        $(".patientTimeline").show();
    });

    $("#appRecommended").click(function () {

        $(".patientTimeline").hide();
        $(".patientappsRecommended").show();

    });
    // Header Sorting All Patients page
    $(".phCol a").click(function () {
        if ($('i', this).hasClass('downArrow')) {
            $("i", this).removeClass("downArrow");
            $("i", this).addClass("upArrow");
        }
        else {
            $("i", this).removeClass("upArrow");
            $("i", this).addClass("downArrow");
        }
    });
}); //Ready Function ends



/**
* LOAD FUNCTION---------------STARTS
*/
$(window).load(function () {

    /*var previousScroll = 0,
	headerOrgOffset = $('.bannerContent').height() - 50;
	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
		if (currentScroll > headerOrgOffset) {
			if(_view < 768){
				if (currentScroll > previousScroll) {
					$('.headerAction').slideUp();
				} else {
					$('.headerAction').slideDown();
				}
			}	
		} 
		previousScroll = currentScroll;

	});*/
    headerOrgOffset = $('.bannerContent').height() + $('header').height() + 52;
    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (_view < 768) {
            if (currentScroll > headerOrgOffset) {
                $('.headerAction').slideUp();
            }
            else {
                $('.headerAction').slideDown();
            }
        }
    });

    $("#appShowcaseinner, #similarApps").mCustomScrollbar({
        axis: "x",
        theme: "dark-3",
        advanced: { autoExpandHorizontalScroll: true }
    });

    $("#downloadedApp, #prescribedApp").mCustomScrollbar({
        axis: "y",
        theme: "dark-3",
        advanced: { autoExpandVerticalScroll: true }
    });

    verticalAlignCall();

    var someImg = $("#appShowcase li img");
   
    someImg.each(function (li) {

        if (someImg[li].width > someImg[li].height) {

            $("#appShowcase li  #" + "Image_" + li + "").addClass('Landscape');
        }
        else if (someImg[li].width < someImg[li].height) {

            $("#appShowcase li  #" + "Image_" + li + "").addClass('portrait');
        }
    });

    var someImg = $("#appShowcase li img");
   
    someImg.each(function (li) {

        if (someImg[li].width > someImg[li].height) {

            $("#appShowcase li  #" + "Image_" + li + "").addClass('Landscape');
        }
        else if (someImg[li].width < someImg[li].height) {

            $("#appShowcase li  #" + "Image_" + li + "").addClass('portrait');
        }
    });

    var someImg = $("#appShowcase li img");
   
    someImg.each(function (li) {

        if (someImg[li].width > someImg[li].height) {

            $("#appShowcase li  #" + "Image_" + li + "").addClass('Landscape');
        }
        else if (someImg[li].width < someImg[li].height) {

            $("#appShowcase li  #" + "Image_" + li + "").addClass('portrait');
        }
    });

});// Load function ends


/**
 * RESIZE FUNCTION---------------STARTS
 */
$(window).resize(function () {


    var re_windowWidth = window.innerWidth || $(window).width();
    var re_view = 0;
    if (re_windowWidth < 768) re_view = 320;
    else if (re_windowWidth >= 768 && re_windowWidth < 1024) re_view = 768;
    else if (re_windowWidth >= 1024 && re_windowWidth < 1280) re_view = 1024;
    else if (re_windowWidth >= 1280 && re_windowWidth < 1400) re_view = 1280;
    else re_view = 1920;
    if (_view != re_view) {

        //_review

        //for mobile 
       
        if (re_view >= 320 && re_view < 768) {
            $('.postheadingContainer h2 a').each(function (index) {
                var appName = $(this).text();
                if (appName.length > 20) {
                    $(this).text(appName.substr(0, 20) + "...");
                }
            });
            $('.downloadApps').each(function (index) {
                var appName = $(this).text();
                if (appName.length > 15) {
                    $(this).text(appName.substr(0, 12) + "...");
                }
            });
        }

        //for tabs

        if (re_view >= 768 && re_view < 1024) {

            $('.postheadingContainer h2 a .downloadApps').each(function (index) {
                var appName = $(this).text();
                if (appName.length > 30) {
                    $(this).text(appName.substr(0, 29) + "...");
                }
            });
            $('.downloadApps').each(function (index) {
                var appName = $(this).text();
                if (appName.length > 15) {
                    $(this).text(appName.substr(0, 12) + "...");
                }
            });
        }

        //for desktop

        if (re_view >= 1024 && re_view < 1280) {
            $('.postheadingContainer h2 a').each(function (index) {
                var appName = $(this).text();
                if (appName.length > 50) {
                    $(this).text(appName.substr(0, 49) + "...");
                }
            });
            $('.downloadApps').each(function (index) {
                var appName = $(this).text();
                if (appName.length > 15) {
                    $(this).text(appName.substr(0, 14) + "...");
                }
            });
        }

        //for higher resolutions
        if (re_view >= 1280) {
            $('.postheadingContainer h2 a').each(function (index) {
                var appName = $(this).text();

                if (appName.length > 50) {
                    $(this).text(appName.substr(0, 49) + "...");
                }
            });
            $('.downloadApps').each(function (index) {
                var appName = $(this).text();
                if (appName.length > 15) {
                    $(this).text(appName.substr(0, 15) + "...");
                }
            });
        }
        /**
         * MAIN MENU ADJUSTMENT
         */
        if (re_windowWidth > 768) {
            $('ul.nav').removeAttr('style');
            var $toggleMenu = $('.toggleMenu');
            if ($toggleMenu.find('.open').length > 0) {
                $toggleMenu.find('.arrow').removeClass('open');
            }


            $toggleMenu.next().stop().slideDown();
            $toggleMenu.find('.arrowMenu').addClass('open');
        }

        if (re_windowWidth < 768) {
            $('#side').removeAttr('style');
            var $toggleMenu = $('.toggleMenu');
            if ($toggleMenu.find('.open').length > 0) {
                $toggleMenu.find('.arrow').removeClass('open');
            }


            if ($toggleMenu.find('.open').length > 0) {
                $toggleMenu.next().stop().slideUp();
                $toggleMenu.find('.arrowMenu').removeClass('open');
            }
        }



        /**
         * keep View and WindowWidth variables at the end of if
         * @type {[type]}
         */
        _view = re_view;
        _windowWidth = re_windowWidth;
    } //if view != re_view

    // Place the container vertically align
    verticalAlignCall();

}); //Resize Function ends


// $("html").addClass("js");
// $(function() {
// 	$("#side").accordion({initShow: "#current", uri: "relative", splitUrl: '/'});
// 	$("html").removeClass("js");
// });

$("html").addClass("js");
$(function () {
    $("#side").accordion({ initShow: "#current", uri: "relative", splitUrl: '/' });
    $("html").removeClass("js");
});

/* Scroll Function */

$(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    var windowHeight = $(window).height();
    var wrapperHeight = $('.wrapper').height();
    var footerHeight = $('footer').height();
    var mainHeight = (wrapperHeight - footerHeight - windowHeight) + 35;

    if (scrollPosition > mainHeight) {
        $('.back-to-top a').addClass('positionRealtive');
        $('.back-to-top p').css("display", "block");
        $('.nextBtn.sections').fadeOut().hide();
       
    }
    else {
        $('.back-to-top a').removeClass('positionRealtive');
        $('.back-to-top p').css("display", "none");
        $('.nextBtn.sections').fadeIn();
        
    }
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.back-to-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


});

//}); //Ready Function ends

function verticalAlignCall() {
    // Place the container vertically align
    var signupWrapp = $('.closeBetaWrapp').outerHeight();
    var topPos = (signupWrapp / 2);

    var winHeight = $(window).height();
    if (winHeight <= signupWrapp) {
        $(".closeBetaWrapp").css({ "left": "0%", "top": "0%", "margin-top": "50px", "margin-bottom": "50px", "position": "static", "margin-left": "auto", "margin-right": "auto" });
    }
    else {
        $(".closeBetaWrapp").css({ "top": "50%", "margin-top": -topPos, "position": "absolute", "left": "50%", "margin-left": "-233px" });
    }


}
// YesNo Button Function Call
function bindButtons() {
    //$('.yesnoBtn button').click(function (e) {
    //    var thisObj = $(this);
    //    //$('.yesnoBtn button').removeClass('selected');
    //    thisObj.addClass('selected').siblings().removeClass('selected');
    //    var val = thisObj.attr('id') == 'yes' ? true : false;
    //    //do something with val
    //})
}


// YesNo Button Function Call
function bindButtonsScale() {
    $('.lefCol .lhBtn').click(function (e) {
        var thisObj = $(this);
        //$('.lefCol .lhBtn').removeClass('selected');
        thisObj.removeClass('disabled').addClass('selected').siblings().addClass('disabled');
        //var val = thisObj.attr('id')=='yes' ? true : false;    
        //do something with val
    })
}

// YesNo Button Function Call
function bindButton() {
    $('.rightCol .svBtn').click(function (e) {
        var thisObj = $(this);
        //$('.rightCol .svBtn').removeClass('select');
        thisObj.removeClass('disable').addClass('select').siblings().addClass('disable');
        //var val = thisObj.attr('id')=='yes' ? true : false;    
        //do something with val
    })
}