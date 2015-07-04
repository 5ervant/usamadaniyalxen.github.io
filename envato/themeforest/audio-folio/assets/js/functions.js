/* ==============================================================

   Author: UDX
   Author URL: http://themeforest.net/user/UDX
   Template: Audio Folio - One Page Music Template
   Template URL: #
   Version: 1.0

   ============================================================== */
function cancelEvent(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}
"use strict";
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var menu = 0
$(function() {
    if ($('.contact_form').size() > 0) {
        $('.contact_form').validate({
            submitHandler: function() {
                var myObject = {
                    nombre: $("#nombre").val(),
                    lng: $("#lng").val(),
                    email: $("#email").val(),
                    mensaje: $("#mensaje").val(),
                };
                $('.contact_form button').attr('disabled', 'disabled');
                $.ajax({
                    url: './php/send_mail.php',
                    type: "POST",
                    data: myObject,
                    dataType: "json",
                    success: function(data) {
                        $("#nombre").val("");
                        $("#email").val("");
                        $("#mensaje").val("");
                        alert(data.msg);
                        $('.contact_form button').removeAttr('disabled');
                    }
                });

            }
        });
    }

    $('.btn_menu').click(function(e) {

        if (menu == 0) {
            $('.menu_resp').fadeIn(500);
        }
    });

    $('.btn_close_resp').click(function(e) {
        $('.menu_resp').fadeOut(500);
        menu = 0
    });

    $('.btn_down').click(function(e) {
        var winHeight = $(window).innerHeight();
        $('html,body').animate({
            scrollTop: winHeight
        }, 2000);
    });
    $('.contact').hide();


    $('.item_service1').mouseenter(function(e) {
        //$(this).children('audio').animate({volume:0},500);
        $(this).children('audio')[0].pause();
        $(this).children('audio')[0].currentTime = 0;
        $(this).children('audio')[0].play();
        $(this).children('audio').stop().animate({
            volume: 1
        }, 500);
    });
    $('.item_service1').mouseleave(function(e) {
        $(this).children('audio').stop().animate({
            volume: 0
        }, 800);
        //$(this).children('audio')[0].currentTime = 0;
    });

    $('.item_service1').click(function(e) {
        var thisHref = $(this).attr('data-id');
        $('#' + thisHref + '').fadeIn(300);
        $('#' + thisHref + ' .contenido_popup').addClass('popup_abierto');
    });


    $('.closeme, .btn_close, .close_contact_resp').click(function(e) {
        $('.popup, .contact').fadeOut(300);
        $('.contenido_popup').removeClass('popup_abierto');

    });


    $('.content_head a, .audio_button').mouseenter(function(e) {
        //$(this).children('audio').animate({volume:0},500);
        $(this).children('audio')[0].pause();
        $(this).children('audio')[0].currentTime = 0;
        $(this).children('audio')[0].play();
        $(this).children('audio').stop().animate({
            volume: 1
        }, 0);
    });
    $('.content_head a, .audio_button').mouseleave(function(e) {
        $(this).children('audio').stop().animate({
            volume: 0
        }, 800);
        //$(this).children('audio')[0].currentTime = 0;
    });

    if (isMobile.any()) {

    } else {
        $('html,body').mousemove(function(xy) {

            winHeight = $(window).innerHeight();
            winHeight2 = Math.ceil(winHeight / 145.5) * 145.5;
            winWidth = $(window).innerWidth();
            middle = winWidth / 2
            middleHeight = winHeight / 2
            pageX = (xy.pageX);
            pageY = (xy.pageY);
            middle2 = pageX - middle;
            middle3 = pageY - middleHeight;
            /* $('.text_shadow').each(function(index, element) {
				var thisPos = $(this).offset().top;
				var thisCenter = $(this).height()/2
				var thisPosCenter = pageY-(thisPos+thisCenter);
				
				$(this).css({'text-shadow':''+-((middle2*0.01))+'px '+-((thisPosCenter*0.01))+'px 0 rgba(24,230,152,0.5)' })
			});*/
            var $textShadow = $('.text_shadow')
            for (var i = 0; i < $textShadow.length; i++) {
                var thisPos = $($textShadow[i]).offset().top;
                var thisCenter = $($textShadow[i]).height() / 2;
                var thisPosCenter = pageY - (thisPos + thisCenter);
                //$($textShadow[i]).css({'text-shadow': '' + -((middle2 * 0.01)) + 'px ' + -((thisPosCenter * 0.01)) + 'px 0 rgba(24,230,152,0.5)'});

                TweenMax.to($textShadow[i], .5, {
                    css: {
                        textShadow: '' + -((middle2 * 0.02)) + 'px ' + -((thisPosCenter * 0.02)) + 'px 0 rgba(24,230,152,0.5)'
                    }
                });
            };

            var $boxShadow = $('.box-shadow');
            for (var i = 0; i < $boxShadow.length; i++) {
                var thisPos = $($boxShadow[i]).parent().offset().top;
                var thisCenter = $($boxShadow[i]).height() / 2
                var thisPosCenter = pageY - (thisPos + thisCenter);
                var thisPosLeft = $($boxShadow[i]).parent().offset().left;
                var thisCenterLeft = $($boxShadow[i]).width() / 2
                var thisPLeft = pageX - (thisPosLeft + thisCenterLeft);
                TweenMax.to($boxShadow[i], 0.5, {
                    css: {
                        left: -thisPLeft * 0.02,
                        top: -thisPosCenter * 0.02
                    }
                });
            };


            TweenMax.to($(".bg1"), .7, {
                css: {
                    left: -((middle2 * 0.015))
                }
            });
            TweenMax.to($(".cuadros1"), .7, {
                css: {
                    left: -(middle2 * 0.035)
                }
            });
            TweenMax.to($(".cuadros2"), .7, {
                css: {
                    left: -(middle2 * 0.025)
                }
            });
            TweenMax.to($('.content_path1, .content_path2, .parallax1'), .7, {
                css: {
                    x: -(middle2 * 0.035)
                }
            });
            TweenMax.to($('.parallax2'), .7, {
                css: {
                    x: -(middle2 * 0.025)
                }
            });
        });

    }

    $('.btn_more').click(function(e) {
        var currentHref = $('.current_slide').attr('data-href');
        $('' + currentHref + '').fadeIn(300);
        $('' + currentHref + ' .contenido_popup').addClass('popup_abierto');
    });

});

if (!(navigator.appVersion.indexOf("Mac") != -1)) {

    $(window).mousewheel(function(event, delta) {
        if (delta < 0) {
            $('html,body').stop().animate({
                scrollTop: '+=140'
            }, 800, 'easeOutCubic');
        } else {
            $('html,body').stop().animate({
                scrollTop: '-=140'
            }, 800, 'easeOutCubic');
        }
        return false;
    });

    $('.popup').mousewheel(function(event, delta) {
        event.stopPropagation();
        if (delta < 0) {
            $('.popup').stop().animate({
                scrollTop: '+=140'
            }, 800, 'easeOutCubic');
        } else {
            $('.popup').stop().animate({
                scrollTop: '-=140'
            }, 800, 'easeOutCubic');
        }
        return false;
    });

    $('.contact').mousewheel(function(event, delta) {
        event.stopPropagation();
        if (delta < 0) {
            $('.contact').stop().animate({
                scrollTop: '+=140'
            }, 800, 'easeOutCubic');
        } else {
            $('.contact').stop().animate({
                scrollTop: '-=140'
            }, 800, 'easeOutCubic');
        }
        return false;
    });
} else {

}


$(window).scroll(function(e) {
    TweenMax.to($('.box-shadow'), 0, {
        css: {
            left: 0,
            top: 0
        }
    });
    TweenMax.to($('.text_shadow'), 0, {
        css: {
            textShadow: '0 0 0 rgba(24,230,152,0.5)'
        }
    });

});



$(window).load(function(e) {
    setTimeout(function() {
        $('.after_load').show();
    }, 800);

    setTimeout(function() {
        $('.loader').fadeOut('slow');
        $('.bg1').css('background-position', '0 0')
        $('.cuadros1').css('background-position', '50% 0')
        $('.cuadros2').css('background-position', 'calc(50% - 75px) 75px');
        setTimeout(function() {
            $('.content_1').css('transform', 'translateY(0)').animate({
                opacity: 1
            }, 2000, 'easeOutCubic');
        }, 700);
        setTimeout(function() {
            $('.points1').animate({
                opacity: 1
            }, 1000);
        }, 2000);
    }, 800);
});



$(window).bind('load resize', function() {
    var winHeight = $(window).innerHeight();
    var winHeight2 = Math.ceil(winHeight / 145.5) * 145.5;
    var winWidth = $(window).innerWidth();
    var middle = winWidth / 2
    var middleHeight = winHeight / 2
    var middle2000 = middle - 1000
    var aboutHeight = $('.about').innerHeight();
    var servicesHeight = $('.services').innerHeight();
    var folioHeight = $('.process ').innerHeight();
    $('.content').css('min-height', winHeight);
    //var railWidth = $('.mejs-time-rail').width();
    if (winWidth > 600) {
        $('.about,.services').height('auto');
        setTimeout(function() {
            $('.about').height(Math.ceil(aboutHeight / 145.5) * 145.5);
        }, 5);

        setTimeout(function() {
            $('.services').height(Math.ceil(servicesHeight / 145.5) * 145.5);
            $('.process').height(Math.ceil(folioHeight / 145.5) * 145.5);
        }, 5);
    } else {
        $('.about, .services, .process').height('auto').css('margin-bottom', 100);
    }

    //setTimeout(function(){
    //$('.mejs-time-rail').width(railWidth-20);
    //},5);

    if (isMobile.any()) {
        $('.btn_start, .btn_down, .content_1 h4').hide();
    } else {



        var valScroll = $(window).scrollTop();
        if (winWidth > 600) {
            setTimeout(function() {
                var abouTop = $('#path2').offset().top;
                var servTop = $('#path3').offset().top;
                var fourthTop = $('#path4').offset().top;
                skrollr.init({
                    smoothScrollingDuration: 5000,
                    constants: {
                        valinit: function() {
                            return $(window).height() / 2;
                        },
                        secondval: function() {
                            return abouTop - ($(window).height() * 0.5);
                        },
                        thirdval: function() {
                            return servTop - ($(window).height() * 0.5);
                        },
                        fourthval: function() {
                            return fourthTop - ($(window).height() * 0.5);
                        }

                    }
                });
            }, 20);
        }

        if (winWidth <= 600) {
            skrollr.init().destroy();
        }


    }

    if (winWidth > 768) {
        $('.menu_resp').hide();
        if (menu == 1) {
            menu = 0
        }
    }

    if (winWidth > 600) {
        $('.first-content').height(winHeight2);

    } else {
        $('.first-content').height(500);
    }

    var contactHeight = $('.contact').height();
    $('.content_contact, .content_experience').css('min-height', contactHeight);
});




$(window).bind('load resize scroll', function() {
    var winHeight = $(window).innerHeight();
    var winHeight2 = Math.ceil(winHeight / 145.5) * 145.5;
    var valScroll = $(window).scrollTop();

    $('.list_menu_resp a.anchor_resp').each(function(index, element) {
        var thisHref = $(this).attr('href');
        var hrefPos = $('' + thisHref + '').offset().top;
        var hrefHeight = $('' + thisHref + '').innerHeight();
        var hrefEnd = hrefPos + hrefHeight;
        if (valScroll > hrefPos - 170 && valScroll < hrefEnd + 150) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
        $(this).click(function(e) {
            cancelEvent(e);
            $('.menu_resp').fadeOut(400);
            menu = 0
            $('html,body').stop().animate({
                scrollTop: hrefPos - 100
            }, 3000, 'easeInOutQuart');
        });
    });


    if (isMobile.any()) {

    } else {
        //TweenMax.to($(".cuadros2"), 0, {css: {top: (valScroll*0.3)}});
        //TweenMax.to($(".bg1"), 0, {css: {top: (valScroll*0.65)}});
        $('.cuadros2').stop().css({
            top: valScroll * 0.45
        });
        $('.bg1').stop().css({
            top: valScroll * 0.75
        });

        if (valScroll >= winHeight2) {
            $('.content_head').css('position', 'fixed');
        } else {
            $('.content_head').css('position', 'absolute');
        }
        var pathPos = $('.content_path1').offset().top;


        $('.content_head .anchor').each(function(index, element) {
            var thisHref = $(this).attr('href');
            var hrefPos = $('' + thisHref + '').offset().top;
            var hrefHeight = $('' + thisHref + '').innerHeight();
            var hrefEnd = hrefPos + hrefHeight;
            if (valScroll > hrefPos - 500 && valScroll < hrefEnd + 50) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
            $(this).click(function(e) {
                cancelEvent(e);
                $('html,body').stop().animate({
                    scrollTop: hrefPos - 140
                }, 3000, 'easeInOutQuart');
            });
        });
    }
});


function openAll() {
    $('#all_folio').fadeIn(300);
    $('#all_folio .contenido_popup').addClass('popup_abierto');
}



function toContact() {
    $('.contact').fadeIn(300);
    $('.menu_resp').fadeOut(300)
}



/*----Audiofolio function of the slider--*/
$(function() {
    $('.audio_folio, .video_folio').mediaelementplayer({
        audioHeight: 63,
        alwaysShowControls: true,
        features: ['playpause', 'current', 'progress', 'duration']
    });


    var $firstSlide = $('.slide:first');
    var $lastSlide = $('.slide:last')
    $('.slide').hide();
    $firstSlide.show().addClass('current_slide');
    $firstSlide.children('.item_folio').addClass('item_activo');


    $('.btn_next').click(function(e) {
        if ($lastSlide.hasClass('current_slide')) {
            $('.mejs-pause').trigger('click');
            $('.current_slide').children('.item_folio').removeClass('item_activo');
            setTimeout(function() {
                $('.current_slide').hide().removeClass('current_slide');
                $firstSlide.show().addClass('current_slide');
                setTimeout(function() {
                    $firstSlide.children('.item_folio').addClass('item_activo');
                }, 100);
            }, 400);

        } else {
            var $nextSlide = $('.current_slide').next('.slide');
            $('.mejs-pause').trigger('click');
            $('.current_slide').children('.item_folio').removeClass('item_activo');
            setTimeout(function() {
                $('.current_slide').hide().removeClass('current_slide');
                $nextSlide.show().addClass('current_slide');
                setTimeout(function() {
                    $nextSlide.children('.item_folio').addClass('item_activo');
                }, 100);
            }, 400);
        }
    });

    $('.btn_prev').click(function(e) {
        if ($firstSlide.hasClass('current_slide')) {
            $('.mejs-pause').trigger('click');
            $('.current_slide').children('.item_folio').removeClass('item_activo');
            setTimeout(function() {
                $('.current_slide').hide().removeClass('current_slide');
                $lastSlide.show().addClass('current_slide');
                setTimeout(function() {
                    $lastSlide.children('.item_folio').addClass('item_activo');
                }, 100);
            }, 400);

        } else {
            var $prevSlide = $('.current_slide').prev('.slide');
            $('.mejs-pause').trigger('click');
            $('.current_slide').children('.item_folio').removeClass('item_activo');
            setTimeout(function() {
                $('.current_slide').hide().removeClass('current_slide');
                $prevSlide.show().addClass('current_slide');
                setTimeout(function() {
                    $prevSlide.children('.item_folio').addClass('item_activo');
                }, 100);
            }, 500);

        }
    });


    $('.folio_list li').click(function(e) {
        var thisId = $(this).attr('data-id');
        var $thisId = $('' + thisId + '');
        $('.popup').fadeOut(300);
        setTimeout(function() {
            $('.mejs-pause').trigger('click');
            $('.current_slide').children('.item_folio').removeClass('item_activo');
            setTimeout(function() {
                $('.current_slide').hide().removeClass('current_slide');
                $thisId.show().addClass('current_slide');
                setTimeout(function() {
                    $thisId.children('.item_folio').addClass('item_activo');
                }, 100);
            }, 500);
        }, 500);
    });
});


function backToHome() {
    $('.popup').fadeOut(300);
    $('.content_experience').animate({
        opacity: 0
    }, 1000);
    setTimeout(function() {
        $('.content_experience').hide().empty();
        $('.main_content').show().animate({
            opacity: 1
        }, 1000);
    }, 1000);

}