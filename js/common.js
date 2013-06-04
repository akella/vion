$(document).ready(function() {
	$('#scrollbar1').tinyscrollbar();

	$(function() {

		$('.select, .radio_light input:radio, .radio_dark input:radio').styler({
			browseText: 'Обзор...',
			zIndex: '50'
		});
	});
	$('.video-player').hover(
		function(){
			$('.video-player__more').fadeIn();
			},
		function(){
			$('.video-player__more').fadeOut();
			}
	);
});