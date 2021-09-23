$(document).ready(function(){
	$('.test-popup').magnificPopup({
		type:'image'
	});

	$('.single_slide').owlCarousel({
		items:1,
		loop:true,
		dots:false,
		nav:true
	});
	$('.concern_item_slide').owlCarousel({
		items:4,
		loop:true,
		dots:false,
		nav:false,
		autoplay:true,
    	autoplayTimeout:1000,
    	autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			575:{
				items:2
			},
			768:{
				items:3
			},
			991:{
				items:4
			} 
		}  
	});

	// fixedMenu js
	$(window).scroll(function(){
		var value = $(this).scrollTop();
		console.log(value);
	
		if(value > 100){
			$('.al_header_section').addClass('fixedMenu');
		}else{
			$('.al_header_section').removeClass('fixedMenu');
		}
	});

	// topup js
	$(".topup a").click(function(){
		$('html,body').animate({
				scrollTop:0
			}, 1000);
		return false;
	
	});
	// mobile-menu-icon
	$('.mobile_menu a').click(function(){
		$('.menu').slideToggle(1000);
		return false;
	});
}); 

$(document).ready(function(){
	$(window).scroll(function(){
		var value = $(this).scrollTop();
		console.log(value);
		if(value > 500){
			 $('.header-section').addClass('fixedMenu');
		}else{
			$('.header-section').removeClass('fixedMenu');
		}

		
	 	if(value>400){
	 		$('.topup').show();
	 	}else{
	 		$('.topup').hide();
	 	}
	});
});