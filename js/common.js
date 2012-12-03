$(document).ready(function() {
	$('#scrollbar1').tinyscrollbar();

	$(function() {

		$('.select, input:radio').styler({
			browseText: 'Обзор...',
			zIndex: '50'
		});
	});
	
});