$(document).ready(function() {
	$('#scrollbar1').tinyscrollbar();
	$('#scrollbar2').tinyscrollbar();

	$(function() {

		$('.select, .radio_light input:radio, .radio_dark input:radio').styler({
			browseText: 'Обзор...',
			zIndex: '50'
		});

		$('.select').styler({
			zIndex: '50',
			width: '100%'
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
	
	$('.hover-window').hover(
		function(){
			$('.hover-window .player__title').show();
			$('.hover-window .video-progress').show();
			},
		function(){
			$(".hover-window .player__title").hide();
			$(".hover-window .video-progress").hide();
			}
	);

// player in chat window
	 $('.player.hover-color').hover(
		function(){
			$('.hover-color .player__title').show();
			},
		function(){
			$(".hover-color .player__title").hide();
			}
	);

// small-window hover
	
    $(".window .win__title").hide();
    $(".window .window__controls").hide();
    $('.window .window__content').hover(
    	function(){
    		$(".window .win__title").show();
    		$(".window .window__controls").show();
    		},
    	function(){
    		$(".window .win__title").hide();
    		$(".window .window__controls").hide();
    		}
    );

// buttons loading animation initializing

	$(".wrapper-button").click(function(){

		$(this).find(".preloader").addClass('is-loading');

	});

// buttons on the edge of the screen

	$(".wrapper-right").click(function(){

		$(this).addClass('is-active');

	});

	$(".wrapper-left").click(function(){

		$(this).addClass('is-active');

	});

});

