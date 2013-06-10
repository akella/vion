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

	$(".js-tab-cont").hide();
	//$(".chat__icons a:first").addClass("js-chat-tabs");
	$(".js-tab1").show();
	$(".chat__icons a:first").addClass("is-active");
	// $('.chat__icons a').click(function(e) {
	// 	$(".chat__tab-items div").hide();
	// 	$(".chat__icons a").removeClass("js-chat-tabs");
	// 	$(this).addClass("js-chat-tabs");
	// });
    $(".chat__icons a").click(function(){
    	var index = $(this).attr("data-tab");
    	$(".js-tab-cont").hide();
    	$(".chat__icons a").removeClass("is-active");
    	$(this).addClass("is-active");
    	$(index).show();
    	//alert(index);
    });

	


});