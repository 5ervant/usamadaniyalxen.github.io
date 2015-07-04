/* http://blog.bassta.bg/2013/05/smooth-page-scrolling-with-tweenmax/ */

$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 0.8;			//Scroll time
	var scrollDistance = 140;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
		//var valScroll = $(window).scrollTop();
		//$('.cuadros2').stop().css({top:valScroll*0.3});
        //$('.bg1').stop().css({top:valScroll*0.65});
		
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: 'swim',	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
	
	
	var $contact = $('.contact, .menu_resp');		//Window object
	
	$contact.on("mousewheel DOMMouseScroll", function(event){
		event.stopPropagation();
		event.preventDefault();	
												
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $contact.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($contact, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: 'easeOutQuad',	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});