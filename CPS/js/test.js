$(document).ready(function(){
	$('.carousel').carousel();
	$('html').niceScroll({
		cursorcolor:'#0295f9',
		cursorwidth:10,
		cursorborderradius:0,
		cursorborder:'1px solid #0295f9'
	});
	$(window).on("load",function(){
		if($(window).width() < 576){
			$('nav').removeClass("sm-height");
			$('.nav-item').addClass("padding-top");
			$('.first').addClass("hide");
		}else{
			$('nav').addClass("sm-height");
			$('.nav-item').removeClass("padding-top");
			$('.first').removeClass("hide");
		}
		var winh = $(window).height(),
		navh = $('.navbar').innerHeight();
		$('.slider , .carousel-item').height(winh - navh);
	});
	$(window).resize(function(){
		if($(window).width() < 576){
			$('nav').removeClass("sm-height");
			$('.nav-item').addClass("padding-top");
			$('.first').addClass("hide");
		}else{
			$('nav').addClass("sm-height");
			$('.nav-item').removeClass("padding-top");
			$('.first').removeClass("hide");
		}
		var winh = $(window).height(),
		navh = $('.navbar').innerHeight();
		$('.slider , .carousel-item').height(winh - navh);
	});
	$('.slider .arrow i').click(function(){
		$('html,body').animate({
			scrollTop: $('.our-services').offset().top-50
		},1000);
	});
	$(document).on('keydown',function(e){
		console.log(e.keyCode);
		if(e.keyCode == 48 || e.keyCode == 96){
			$('html,body').animate({
			scrollTop: $('.slider').offset().top
			},1000);
		}
		if(e.keyCode == 49 || e.keyCode == 97){
			$('html,body').animate({
			scrollTop: $('.our-services').offset().top-50
			},1000);
		}
		if(e.keyCode == 51 || e.keyCode == 98){
			$('html,body').animate({
			scrollTop: $('.how').offset().top-50
			},1000);
		}
		if(e.keyCode == 52 || e.keyCode == 99){
			$('html,body').animate({
			scrollTop: $('.about').offset().top-50
			},1000);
		}
		if(e.keyCode == 53 || e.keyCode == 100){
			$('html,body').animate({
			scrollTop: $('.our-team').offset().top-50
			},1000);
		}
		if(e.keyCode == 54 || e.keyCode == 101){
			$('html,body').animate({
			scrollTop: $('.contact-us').offset().top-50
			},1000);
		}
	});
	$(window).scroll(function() {

		$(".slideanim").each(function(){

			 var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();

			if (pos < winTop + 600) {

				 $(this).addClass("slide_two");
			}

		});
	
	});
});