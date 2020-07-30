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



/********************************************

GA EVENTS - MAIN 

Example:

data-event="GAEvent" data-category="Home" data-label="CTA" data-action="Click" data-value="undefined"

- 	The above code should be pasted into the opening tag, as data-attributes,
	of whatever element you want to put a click event on.
	The below codes then grabs the data attributes you've set,
	and pipes it through GTM and GA

********************************************/
$(document).ready(function(){

	$("[data-event='GAEvent']").click(function() {
		var evCat = $(this).attr('data-category') 	? $(this).attr('data-category') : '',
			evAct = $(this).attr('data-action') 	? $(this).attr('data-action') : '',
			evLab = $(this).attr('data-label') 		? $(this).attr('data-label') : '',
			evVal = $(this).attr('data-value') 		? $(this).attr('data-value') : '';

			try {

				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'GAEvent',
					'eventCategory': evCat,
					'eventAction': evAct,
					'eventLabel': evLab,
					'eventValue': evVal,
				});
				console.log("GA Event fired - Event Category: ["+evCat+"], Event Label: ["+evLab+"], Event Action: ["+evAct+"]");

			} catch (e) {
				console.log("GA Event Error");
			}
	});
});