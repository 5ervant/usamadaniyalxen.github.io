/* ==============================================================

   Author: UDX
   Author URL: http://themeforest.net/user/UDX
   Template: Monday - Creative HTML5 Template
   Template URL:#
   Version: 1.0

   ============================================================== */
//Preloader -------------------------
$(window).load(function() {
    $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
        //$(toggle_el).toggleClass("open-sidebar");
    });

    $('#status').fadeOut();

    var hash = window.location.hash;
    var $navigator = navigator.userAgent;


    if (hash === '#services' && $navigator.toLowerCase().indexOf('firefox') !== -1) {
        console.log($navigator);
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 0);
    }
    $('#preloader').delay(350).fadeOut('slow');

    //$('html, body').css("overflow-x","hidden");

});

var nice = false;
var obj = window;

$(document).ready(function() {
    $('.work-filter').click(function() {
        setTimeout(function() {
            $('html').getNiceScroll().resize();
        }, 1000);
    });

    positionShare();

    function positionShare() {
        if ($('.share-btn').length == 0) {
            return;
        }

        var share = $('.share-toggle');
        var shareBtn = $('.share-btn');

        share.offset({
            top: shareBtn.offset().top + shareBtn.height() / 2 - 15,
            left: shareBtn.offset().left - share.width()
        });
    }

    $(window).resize(function() {
        positionShare();
    });

    if ($('#fullpage').length !== 0) {
        $('#fullpage').fullpage({
            anchors: ['firstPage'],
            sectionsColor: false,
            autoScrolling: false,
            css3: true
        });
    }

    $("[id^='video-']").each(function() {
        $(this).get(0).play();
    });

    /* Partners CAROUSEL ------------------- */
    $('.flexcarousel').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 320,
        itemMargin: 1,
        minItems: 1,
        maxItems: 8,
        keyboard: true,
        touch: true
    });

    $('.flexslider').flexslider({
        animation: "fade",
        keyboard: true,
        touch: true
    });

    var $navBtn = $("#sidebar-toggle");
    var menu = $('nav.menu');
    var menuTimer;
    var $awTrigger = $(".aw-trigger");

    /* SIDEBAR > MENU ------------------------------- */
    $navBtn.on('click', function(e) {
        $('.overlay-share').fadeOut();
        $('#sidebar-toggle').removeClass("appear");
        lib.noSwipe = false;
        clearInterval(menuTimer);
        var prevPos = menu.offset().left;
        $(this).toggleClass('slide-open');

        var posLeft = 240;
        if ($(window).width() < 340) {
            posLeft = 195;
        } else if ($(window).width() < 480) {
            posLeft = 235;
        }


        if ($(this).hasClass('slide-open')) {
            lib.swipe = 'right';
            $(this).animate({
                "top": "-56px"
            }, 800, "easeInOutExpo");
            $('.logo').animate({
                "left": 10,
                opacity: 1
            }, {
                duration: 175,
                queue: false
            });
            $('.menu').animate({
                "left": 0,
                opacity: 1
            }, {
                duration: 500,
                queue: false
            });

            $('.container').animate({
                "left": posLeft,
                opacity: 1
            }, {
                duration: 100,
                queue: false
            });

            $navBtn.animate({
                "left": posLeft,
                opacity: 1
            }, {
                duration: 150,
                queue: false
            });

            if ($(window).width() < 480) {
                $awTrigger.animate({
                    opacity: 0,
                    "left": 0
                }, {
                    duration: 550,
                    queue: false
                });
            }

        } else {
            lib.swipe = 'left';
            $(this).animate({
                "top": "0"
            }, 800, "easeInOutExpo");
            $('.logo').animate({
                "left": -300,
                opacity: 0
            }, {
                duration: 100,
                queue: false
            });
            $('.menu').animate({
                "left": -300,
                opacity: 0
            }, {
                duration: 500,
                queue: false
            });

            $('.container').animate({
                "left": 0,
                opacity: 1
            }, {
                duration: 100,
                queue: false
            });

            $navBtn.animate({
                "left": 0,
                opacity: 1
            }, {
                duration: 100,
                queue: false
            });

            if ($(window).width() < 480) {
                $awTrigger.animate({
                    opacity: 1,
                    "left": 0
                }, {
                    duration: 550,
                    queue: false
                });
            }
        }

        e.preventDefault();
    });

    var $shareBtn = $(".share-btn");
    var $shareToggle = $(".share-toggle");

    $shareBtn.click(function() {
        $shareToggle.toggleClass("open-share");
        $shareBtn.toggleClass("opacity", "no-color");
    });

    /* FADEOUT MENU on SCROLL ----------------------  */
    function nav_move() {
        if ($(window).scrollTop() > 30) {
            $navBtn.addClass('opacity', 2000);
        } else {
            $navBtn.removeClass('opacity', 2000);
        }
    }

    $(window).bind('scroll', nav_move);


    /* ANCHOR SCROLL -------------------------------- */
    jQuery.fn.anchorAnimate = function(settings) {

        settings = jQuery.extend({
            speed: 1100
        }, settings);

        return this.each(function() {
            var caller = this;
            $(caller).click(function(event) {
                event.preventDefault();
                var locationHref = window.location.href;
                var elementClick = $(caller).attr("href");

                var destination = $(elementClick).offset().top;
                $("html:not(:animated),body:not(:animated)").animate({
                    scrollTop: destination
                }, settings.speed, function() {
                    window.location.hash = elementClick
                });
                return false;
            })
        })
    };

    var $anchor = $(".goto");
    $anchor.anchorAnimate();


    /* INVIEW - ANIMATION  ------------------------------------ */
    var $anim = $(".animated");

    $anim.css('opacity', '0');
    $anim.bind('inview', function(event, isVisible, visibleX, visibleY) {

        if (isVisible) {
            $anim.each(function() {
                $(this).stop().animate({
                    opacity: "1"
                }, 300);
                $(this).addClass('fadeInUp');
            });
        } else {
            $(this).stop().animate({
                opacity: "0"
            }, 300);
            $(this).removeClass('fadeInUp');
        }
    });


    /* LINKS ACTIVE ---------------------------------- */
    var $linkactive = $("#sidebar nav.menu li a");
    $linkactive.click(function() {
        $linkactive.removeClass("active");
        $(this).addClass("active");
    });


    /* TOUCH EVENT ----------------------------------- */
    $('.taphover').on("touchstart", function(e) {
        "use strict";
        var link = $(this);
        if (link.hasClass('hover')) {
            link.removeClass('hover');
            return true;
        } else {
            link.parent().removeClass('web');
            link.addClass("hover");
            return true;
        }
    });


    $('.hover').hover(function() {
        $(this).addClass('flip');
        $(".overlay-home, .overlay-main").addClass("appear");
    }, function() {
        $(this).removeClass('flip');
        $(".overlay-home, .overlay-main").removeClass("appear");
    });


    /* SHARE main -------------------------- */
    $(".toggle-share, .overlay-share").click(function() {
        $(".overlay-share").fadeToggle(), 1500;
        $("#sidebar-toggle, .toggle-share").toggleClass("appear");
    });

});

//* PARALLAX ------------------------------------------- */
var big_image;
$(document).ready(function() {
    responsive = $(window).width();

    if (responsive >= 768) {
        big_image = $(".parallax-background").find('img');
        $(window).on('scroll', function() {
            parallax();
        });
    }

});

var parallax = function() {
    var current_scroll = $(this).scrollTop();

    oVal = ($(window).scrollTop() / 3);
    big_image.css('top', oVal);
};


/* MAC-PC CLASS ------------------------------------ */
$(window).load(function() {
    if (navigator.appVersion.indexOf("Mac") != -1) {
        $('body').addClass('mac');
    } else {
        $('body').addClass('pc');
    }
});


var lib = {
    swipe: 'left',
    noSwipe: false,
    initGoogleMaps: function() {
        //* GMAPS ------------------------------------------- */
        var map;
        var initialize;
        var MY_MAPTYPE_ID = 'custom_style';


        initialize = function() {
            var latLng = new google.maps.LatLng(-37.817331, 144.955652); // coordonnées
            var myOptions = {
                zoom: 14,
                center: latLng,
                mapTypeId: google.maps.MapTypeId.TERRAIN, // HYBRID, ROADMAP, SATELLITE, TERRAIN
                maxZoom: 20
            };

            map = new google.maps.Map(document.getElementById('map'), myOptions);

            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: "Monday - Creative HTML5 Template",
                icon: "assets/img/marker.png"
            });

            var infoWindow = new google.maps.InfoWindow({
                position: latLng
            });

            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.open(map, marker);
            });

            google.maps.event.addDomListener(window, "resize", function() {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });

        };

        initialize();


        var styles = [{
            stylers: [{
                    hue: "#000000"
                }, {
                    saturation: -100
                }, {
                    lightness: -5
                }, {
                    gamma: 1.1
                }

            ]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                lightness: 100
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [
                /*{ visibility: "off" }*/
            ]
        }];

        map.setOptions({
            styles: styles
        });
    },
    initNicescroll: function(touch) {
        $("html").niceScroll({
            cursorcolor: "#222222",
            cursoropacitymax: 0.6,
            cursorwidth: 8
        });

        return this;
    },
    initAutoScroll: function() {
        var sections = $('section');
        var timer;
        var scrolling = false;

        $(window).bind('mousewheel', function(e) {
            if (scrolling === true) {
                $('html,body').stop();
                clearTimeout(timer);
            }
        });

        $(window).scroll(function(e) {
            clearTimeout(timer);

            var windowTop = $(document).scrollTop();
            var windowHeight = $(window).height();
            var documentHeight = $(document).height();

            if (windowHeight + windowTop >= documentHeight) {
                return;
            }

            timer = setTimeout(function() {
                var windowTop = $(document).scrollTop();
                var diff = null;
                var section = null;

                sections.each(function() {
                    var top = $(this).offset().top;
                    if (diff === null) {
                        diff = Math.abs(top - windowTop);
                        section = $(this);
                    } else if (diff > Math.abs(top - windowTop)) {
                        diff = Math.abs(top - windowTop);
                        section = $(this);
                    }
                });

                if (
                    section !== null && diff <= 250
                ) {
                    scrolling = true;
                    $('html,body').animate({
                        scrollTop: section.offset().top
                    }, 'easeinout', function() { // On complete
                        scrolling = false;
                    });
                }

            }, 1250);
        });
    },
    showCategories: function(container) {
        setTimeout(function() {
            $(container).addClass('show-cat');
        }, 1000);

        setTimeout(function() {
            $(container).removeClass('show-cat');
        }, 3000);
    },
    initSwipe: function() {
        $(".no-swipe").swipe({
            swipeLeft: function(event, direction, distance, duration, fingerCount) {
                lib.noSwipe = true;
            },
            swipeRight: function(event, direction, distance, duration, fingerCount) {
                lib.noSwipe = true;
            }
        });

        $("#wrapper").swipe({
            swipeLeft: function(event, direction, distance, duration, fingerCount) {
                if (
                    lib.swipe === 'left' || lib.noSwipe === true
                ) {
                    lib.noSwipe = false;
                    return;
                }
                $("#sidebar-toggle").trigger('click');
                lib.swipe = 'left';
            },
            swipeRight: function(event, direction, distance, duration, fingerCount) {
                if (
                    lib.swipe === 'right' || lib.noSwipe === true
                ) {
                    lib.noSwipe = false;
                    return;
                }
                $("#sidebar-toggle").trigger('click');
                lib.swipe = 'right';
            }
        });

        $("#sidebar").swipe({
            swipeLeft: function(event, direction, distance, duration, fingerCount) {
                if (lib.swipe === 'left') {
                    return;
                }
                $("#sidebar-toggle").trigger('click');
                lib.swipe = 'left';
            }
        });
    }
};