/********************************************

NOTES

********************************************/


/********************************************

LOADING SCREEN
	
********************************************/

$(window).on("load", function() {
	var load_delay = 1000;

	if($('#loading_screen').length){
		$('#loading_screen').delay(load_delay).fadeOut('slow');
	}
});

/********************************************

PAGE BACKGROUND HANDLER
	-	Grabs height of page on load, then sets
		background element to 100% height;
	
********************************************/
$(window).on("load", function() {
	var page_height = $('html').height();
	$('.--dma_bg').css('height',page_height);
});


/********************************************

UNHIDE AFTER LOAD
	
	- 	For any elements that have issues 
		with flashes of styling on load, set them to 
		display:none in the CSS file, then use .show()
		on them here to override.

********************************************/
$(document).ready(function(){
	//Modals
		$('.modal').show();
		$('.modal_overlay').show();

	//Sidebar Nav
		$('#nav_sidebar').show();

	//General
		$('.load_hide').show();
});


/********************************************

KEYBOARD COMMAND CODES

esc_key = 27;
enter_key = 13;
********************************************/

/***** UNIVERSAL KEYBOARD CLICK *****/
	$(document).ready(function(){
		var enter_key = 13;
		var focused = $(':focus');

		$(document).keyup(function(e) {
		  if (e.keyCode == enter_key){
		  	e.preventDefault();
		  	$(focused).click();
		  }
		});
	});



/********************************************

BASIC FORM CODE

********************************************/

/***** BUTTON/SUBMIT *****/
$(document).ready(function(){
	//SUBMIT BUTTON
	$('form button.submit').click(function(e){
		$(this).siblings('input[type="submit"]').click();
	});
});





/********************************************

NAVIGATION

********************************************/
/*
$(document).ready(function(){

	//SIDEBAR NAV
		//OPEN
			$('.nav_button').click(function(){
				if($('#nav_sidebar').hasClass('active')){
					//Close
					$('#nav_sidebar').removeClass('active');
					$('#nav_overlay').removeClass('active');
				} else {
					//Open
					$('#nav_sidebar').addClass('active');
					$('#nav_overlay').addClass('active');
				}

				//page body transforms
				if ($(this).data('body-transform')) {
					var body_transform = $(this).data('body-transform');
					//must set attribute with .attr() function to update within DOM
					$('#body_wrapper').attr('data-body-transform', body_transform);
				}
			});
		//CLOSE
			//Allows closing the menu by clicking outside of it.
			$('#nav_overlay').click(function(){
				if($('#nav_sidebar').hasClass('active')){
					$('#nav_sidebar').removeClass('active');
					$('#nav_overlay').removeClass('active');
					$('#body_wrapper').attr('data-body-transform', '0');
				}
			});

			//Close menu after clicking link/button
			$('#nav_sidebar a').click(function(){
				if($('#nav_sidebar').hasClass('active')){
					$('#nav_sidebar').removeClass('active');
					$('#nav_overlay').removeClass('active');
					$('#body_wrapper').attr('data-body-transform', '0');
				}
			});

			//ESC Key Close
			var esc_key = 27;
			$(document).keyup(function(e) {
			  if (e.keyCode == esc_key && $('#nav_sidebar').hasClass('active')){
			  	e.preventDefault();
				$('#nav_sidebar').removeClass('active');
				$('#nav_overlay').removeClass('active');
				$('#body_wrapper').attr('data-body-transform', '0');
			  }
			});
});
*/

/********************************************

MODALS

	NOTES
	- 	Which modal is called is controlled by the data-modal attribute.
		A button with data-modal="thank_you" will open the corresponding 
		modal with data-modal="thank_you"

********************************************/
$(document).ready(function(){
	
	//MODALS

		//OPEN
			$('body').on('click','.modal_open',function(e) {
				e.preventDefault();
				var modal_get = $(this).data('modal');
				$('.modal_overlay').addClass('active');
				$('.modal[data-modal="'+modal_get+'"]').addClass('active');
			});

			$('body').on('click','.video_modal_open',function(e) {
				e.preventDefault();
				var video_id = $(this).data('video-id');
				$('.modal.video iframe').attr('src', 'https://www.youtube.com/embed/' + video_id + '?rel=0');
				$('.modal_overlay').addClass('active');
				$('.modal.video').addClass('active');
			});


		//CLOSE
			$('body').on('click','.modal_overlay',function(e) {
				e.preventDefault();
				$('.modal_overlay').removeClass('active');
				$('.modal').removeClass('active');

				//only affects video modals
				setTimeout(
					function() 
					{
						$('.modal.video iframe').attr('src', '');
					}, 500);
			});

			$('body').on('click','.modal_close',function(e) {
				e.preventDefault();
				$('.modal_overlay').removeClass('active');
				$('.modal').removeClass('active');
				setTimeout(
					function() 
					{
						$('.modal.video iframe').attr('src', '');
					}, 500);
			});

		//ESC Key Close
			var esc_key = 27;

			$(document).keyup(function(e) {
			  if (e.keyCode == esc_key && $('.modal_overlay').hasClass('active')){
			  	e.preventDefault();
			  	$('.modal_overlay').removeClass('active');
			  	$('.modal').removeClass('active');
			  	setTimeout(
			  		function() 
			  		{
			  			$('.modal.video iframe').attr('src', '');
			  		}, 500);
			  }
			});



		//Global offsite link modal - affects all links on site
		//Uncomment to use
		/*
			$('body').on('click','a',function(e) {
				if($(this).hasClass('offsite_send_cta')){
					$('.modal_overlay').removeClass('active');
			  		$('.modal').removeClass('active');
				}else{
					//console.log('link click');
		        	//e.preventDefault();
		        	var href = $(this).attr('href');
		        	//Update site var with new site's name
		        	var site = "http://framework.oxfordcommunications.com.php73-39.lan3-1.websitetestlink.com";
		        	console.log(href);
		        	if (href.indexOf("http") >= 0) {
		        		if(href.indexOf(site) >= 0 || href.indexOf("rackcdn.com") >= 0){
		        			console.log('onsite link');
		        		}else{
		        			console.log('offsite link');
		        			e.preventDefault();
		        			$('.offsite_send_cta').attr('href', href);

		        		}
		        	}
				}

	        	
	        });
        */


		
	
});





/********************************************

NOTICES / BANNERS / WARNINGS

********************************************/
$(document).ready(function(){	
	/***** Cookie Notice *****/
		if($('#cookie_notice').length){
			if (sessionStorage.getItem("cookie_notice") != "set") {
				$('#cookie_notice').addClass('active');
			}

			$('#cookie_notice .close>i').click(function(){
				$('#cookie_notice').removeClass('active');
				sessionStorage.setItem("cookie_notice", "set");
			});
		}

});

/********************************************

LINK FORMATTERS

********************************************/
	
	/********************************************
	TAB INDEX

		- Allows <a> elements without an href to be tab-able
	********************************************/
	$(document).ready(function(){
		$('a[tabindex]').each(function(){
			console.log('Manual tab-index on page');
		});

		$('a:not(a[href])').each(function(){
			$(this).attr('tabindex', '0');
			//console.log('tab index added');
		});

		$('a[href="#"]').each(function(){
			$(this).attr('tabindex', '0');
			//console.log('tab index added');
		});
	});

	/********************************************
	LINK TARGET="_BLANK"

		- Scans page for links that lead outside the site and 
		automatically sets them to open in a new tab.
	********************************************/
	$(document).ready(function(){
		$('a[href]').each(function(){
			var href = $(this).attr('href');
			var target = $(this).attr('target');
			if (href.startsWith('/') || href.startsWith('#')) {
				
			} else {
				$(this).attr('target', '_blank');
				console.log('absolute link caught');
			}
		})
	});

	/********************************************
	LINK REL="NOOPENER"

		- This code sets rel="noopener" for all links with target="_blank"
		This keeps the new page isolated from the first page, which is more secure
		and keeps resources freed up.  Works in conjunction with the TARGET code above.
	********************************************/
	$(document).ready(function(){
		$('a[target="_blank"]').attr('rel','noopener');
	});

/********************************************

IMAGE FORMATTERS

********************************************/
	/********************************************
	ALT TAG FALLBACK
	********************************************/
	$(document).ready(function(){
		$('img:not(img[alt])').each(function(){
			$(this).attr('alt', '');
			//console.log('tab index added');
		});
		
	});


/********************************************

Scroll To

	- .scroll_buffer - autoscrolls user with 100px of space above target
	- .scroll_flush - autoscrolls user exactly to target

********************************************/
$(document).ready(function(){

	//Scroll To - on page load
		var target = location.hash;
		var body_wrapper = $('#body_wrapper');
		//console.log(target);

		if(target != ""){
			//console.log('autoscroll start');
			
			$('html,body').animate({
				scrollTop: body_wrapper.offset().top
			}, 0);
			
			//console.log('autoscroll top');
			
			$('html,body').animate({
				scrollTop: $(target).offset().top-0
			}, 1500);

			//console.log('autoscroll end');
		}

	//Scroll To - on click - buffer
		$('.scroll_buffer').click(function(e) {
			e.preventDefault();
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top-100
					}, 1000);
					return false;
				}
			}
		});

	//Scroll To - on click - flush
		$('.scroll_flush').click(function(e) {
			e.preventDefault();
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});	
});






/********************************************

SLIDERS

********************************************/
$(document).ready(function(){

//Product Slider
	if($('.product_slider').length){
		
		console.log('Product Slider active');
		var product_slider_thumbs = new Swiper('.product_slider_thumbs', {
			slidesPerView: 3,
			loopedSlides: 3, //looped slides should be the same
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			observeParents: true,
		});
		var product_slider = new Swiper('.product_slider', {
			loop: true,
			roundLengths: true,
			spaceBetween: 65,
			loopedSlides: 3, //looped slides should be the same
			navigation: {
				nextEl: '.product_slider .swiper-button-next',
				prevEl: '.product_slider .swiper-button-prev',
			},
			thumbs: {
				swiper: product_slider_thumbs,
			},
		});
	}


});


/********************************************

GA AUTO-TAGGER CODE

********************************************/
$(document).ready(function(){
	/***** NAV *****/
		var category	= "Nav";
		var action		= "Click";
		var value		= "NULL";

		$('.--dma_header a').autotagger(category, action, value);

	/***** FOOTER *****/
		var category	= "Footer";
		var action		= "Click";
		var value		= "NULL";

		$('.--dma_footer  a').autotagger(category, action, value);

	/***** INITIALIZE *****/
		$('html').eventfire_ready();

});
