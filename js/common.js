$(document).ready(function() {
	$('#scrollbar1').tinyscrollbar();

	$(function() {

		$('.select, .radio_light input:radio, .radio_dark input:radio').styler({
			browseText: 'Обзор...',
			zIndex: '50'
		});
	});

// video-player 
	$('.video-player').hover(
		function(){
			$('.video-player__more').fadeIn();
			},
		function(){
			$('.video-player__more').fadeOut();
			}
	);
// tabs in chat 

	$(".js-tab-cont").hide();
	$(".js-tab1").show();
	$(".chat__icons a:first").addClass("is-active");
    $(".chat__icons a").click(function(){
    	var index = $(this).attr("data-tab");
    	$(".js-tab-cont").hide();
    	$(".chat__icons a").removeClass("is-active");
    	$(this).addClass("is-active");
    	$(index).show();
    });

// animation to equalizer on/off
	
	$(".equalizer__toggle").click(function(){
		$(this).toggleClass('on');
		if ($(this).hasClass('on')){
			$(".equalizer__handle").animate({left: "56%",}, 200 );
		}
		else{
			$(".equalizer__handle").animate({left: "0%",}, 200 );
		}
	});	

// media-gallery on/off

	$(".controls__playlist").click(function(){
		$(this).toggleClass('is-active');
		$(".media-gallery").toggleClass('is-active');
	});


});