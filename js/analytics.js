/********************************************

GA AUTO-TAGGER

********************************************/

$(document).ready(function() {
	console.log('analytics start');

	/***** NAVIGATION *****/	
		/***** HEADER *****/
			$('.--dma_header a').each(function(){
				if($(this).attr('data-event')){
					//nothing
				} else {

					//console.log notification
						console.log('GA Auto-Tagger: nav link');
					//label grabber
						if($(this).children().is('img')){
							var label = "Logo";
						} else {
							var label = $(this).text();
							var label = label.replace(/\ /g, "-");
						}
					
					$(this).attr('data-event', 'GAEvent');
					$(this).attr('data-category', 'Nav');
					$(this).attr('data-label', label);
					$(this).attr('data-action', 'Click');
					$(this).attr('data-value', '');

				}
			});

		/***** FOOTER *****/
			$('.--dma_footer a').each(function(){
				if($(this).attr('data-event')){
					//nothing
				} else {

					//console.log notification
						console.log('GA Auto-Tagger: footer link');
					//label grabber
						if($(this).children().is('img')){
							var label = "Logo";
						} else {
							var label = $(this).text();
							var label = label.replace(/\ /g, "-");
						}
					
					$(this).attr('data-event', 'GAEvent');
					$(this).attr('data-category', 'Footer');
					$(this).attr('data-label', label);
					$(this).attr('data-action', 'Click');
					$(this).attr('data-value', '');

				}
			});

});