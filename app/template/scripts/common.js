$(document).ready(function($) {

	$('.header__wrap').slick({
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right-white"></i></button>',
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left-white"></i></button>',
		dots: true
	});
	
	$('.lang__select img').click(function(event) {
		$('.lang__list').toggle();
	});

	$( ".tabs" ).tabs();

	$('.clients__list').slick({
		slidesToShow: 5,
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right-white"></i></button>',
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left-white"></i></button>',
		responsive: [{
		 	breakpoint: 1185,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		    }}, {
		    breakpoint: 750,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		    }}, {
		    breakpoint: 500,
		    settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		    }
		}]
	})

	$('.product__slider').slick({
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right-white"></i></button>',
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left-white"></i></button>',
		dots: true

	})

	$('.team__list').slick({
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right-white"></i></button>',
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left-white"></i></button>',
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [{
		 	breakpoint: 1185,
		    settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true
		    }}, {
		    breakpoint: 750,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true
		    }}, {
		    breakpoint: 500,
		    settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true
		    }
		}]

	})

	$(".up").on("click",function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


	var mobileButton = $('.panel__button'),
		mobileNav = $('.panel__nav');

	mobileButton.click(function(event) {
		mobileNav.toggle();
	});
});