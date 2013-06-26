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

// invisible elements of cast window
	$(".controls").hide();
	$(".player__title").hide();
	$(".video-progress").hide();
// controls on/off
	$('.hover-controls .media').hover(
		function(){
			$('.hover-controls .controls').slideDown();
			},
		function(){
			$('.hover-controls .controls').slideUp();
			}
	);

// media-gallery on/off

	$(".hover-controls .controls__playlist").click(function(){
		$(this).toggleClass('is-active');
		$(".hover-controls .media-gallery").toggleClass('is-active');
	});

// cast title and progress on/off
	
	$('.hover-window .media').hover(
		function(){
			$('.hover-window .player__title').show();
			$('.hover-window .video-progress').show();
			$('.player.hover-window').css('margin', '-24px 0 0');
			},
		function(){
			$(".hover-window .player__title").hide();
			$(".hover-window .video-progress").hide();
			$('.player.hover-window').css('margin', '0');
			}
	);

// player in chat window
	$('.widget .player').css('background', 'transparent');
	 $('.player.hover-color').hover(
		function(){
			$('.hover-color').css('background', '#fff');
			$('.hover-color .player__title').show();
			$('.player.hover-color').css('margin', '0 0 -20px');
			},
		function(){
			$('.player.hover-color').css('background', 'transparent');
			$(".hover-color .player__title").hide();
			$('.player.hover-color').css('margin', '0');
			}
	);

});