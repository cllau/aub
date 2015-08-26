/* Header Resize function
----------------------------------------------------- */
function header_resize() {
    var height = $(window).height();
    var headersize = (100 * height) / 100;
    headersize = parseInt(headersize) + 'px';
    $("header#header").css('height',headersize);
}

$(document).ready(function(){

  	/* Header Resize initiation
  	----------------------------------------------------- */
	header_resize();
	$(window).bind('resize', header_resize);
  
  	enquire.register("screen and (min-width:768px)", {
  		match : function() {
  			
  			//go 
  			
  		}     
	});
  	
  	$(".royalSlider").royalSlider({
		autoScaleSlider: true,
		// autoScaleSliderWidth: 960,
		autoScaleSliderHeight: 520,
		
		loop: true,
		
		// controlsInside: false,
		
		imageScaleMode: 'fill',
		thumbsFitInViewport: false,
		
		navigateByClick: true,
		keyboardNavEnabled: true,
		arrowsNav: true,
		sliderDrag: true,
		sliderTouch: true,
		
		globalCaption: true,
		
		
		fullscreen: {
			// fullscreen options go gere
			enabled: true,
			buttonFS: true,
			nativeFS: false
		}
		
	}); 
  
	/* Append css class position: fixed to Nav
	------------------------------------------------------- */
	var top = $('nav').offset().top - parseFloat($('nav').css('marginTop').replace(/auto/, 100));
	$(window).scroll(function (event) {
	// what the y position of the scroll is
	var y = $(this).scrollTop();
	
	// whether that's below the form
	if (y >= top) {
	  // if so, ad the fixed class
	  $('nav').addClass('fixie');
	  $('nav .slim').addClass('active');
	} else {
	  // otherwise remove it
	  $('nav').removeClass('fixie');
	  $('nav .slim').removeClass('active');
	}
	});
	
	/* Toggle
	------------------------------------------------------- */
	$('#toggle_one').click(function(){
	  $("html, body").animate({ scrollTop: $(window).height()}, 300);
	  return false;
	});
	
	
	/* Scroll View
	------------------------------------------------------- */
	$.fn.scrollView = function () {
	return this.each(function () {
	  $('html, body').animate({
	    scrollTop: $(this).offset().top
	  }, 1000);
	});
	}
	
	$('nav a.slim').click(function (event) {
	event.preventDefault();
	$('#header').scrollView(1000);
	});
	
	$('a#link_introduction').click(function (event) {
	event.preventDefault();
	$('#introduction').scrollView(1000);
	});
	
	$('a#link_casestudies').click(function (event) {
	event.preventDefault();
	$('#casestudies').scrollView(1000);
	});
	
	$('a#link_people').click(function (event) {
	event.preventDefault();
	$('#people').scrollView(1000);
	});
	
	$('a#link_technology').click(function (event) {
	event.preventDefault();
	$('#technology').scrollView(1000);
	});
	  
	$('a#link_process').click(function (event) {
	  event.preventDefault();
	  $('#process').scrollView(1000);
	});
	
	$('a#link_callout').click(function (event) {
	event.preventDefault();
	$('#callout').scrollView(1000);
	});
  

}); /* End of Document Ready Functions */



