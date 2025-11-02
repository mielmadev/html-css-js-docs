
/* Menu hamburguesa */

let menu = document.querySelector('.cabecera-nav');
let botonHamburguesa = document.querySelectorAll('.hamburguesa');

botonHamburguesa.addEventListener(
  'click',
  function(e){
    e.preventDefault();
    menu.classList.tooggle('mostrar');
  },
  false
);





/* CÓDIGO jQuery, no tocar porque está correcto */
$(document).ready(function(){

  // Slider
	var imagesLength = $('.slider-image').length;
	var imagesActiva = 0;

	$('.slider-button-right').on('click',function(){
		imagesActiva = imagesActiva + 1;

		$('.slider-image.activa').removeClass('activa');
		$('.slider-image').eq(imagesActiva).addClass('activa');

		if(imagesActiva == imagesLength-1){
			$('.slider-button-right').addClass('hidden');
		}

		$('.slider-button-left').removeClass('hidden');
	});

	$('.slider-button-left').on('click',function(){
		imagesActiva = imagesActiva - 1;

		$('.slider-image.activa').removeClass('activa');
		$('.slider-image').eq(imagesActiva).addClass('activa');

		if(imagesActiva == 0){
			$('.slider-button-left').addClass('hidden');
		}

		$('.slider-button-right').removeClass('hidden');
	});

	/*news-events buttons*/

	$('.news').on('click',function(){
      $('.sec-news').removeClass('novisto');
	  $('.sec-events').toggleClass('novisto');
	  if($('.sec-events').hasClass('novisto')) {
		$('.sec-events').removeClass('visto');
		$('.sec-news').addClass('visto');
	  } else {
		$('.sec-news').removeClass('visto');
	  }
	});

	$('.events').on('click',function(){
      $('.sec-events').removeClass('novisto');
	  $('.sec-news').toggleClass('novisto');
	  if($('.sec-news').hasClass('novisto')) {
		$('.sec-news').removeClass('visto');
		$('.sec-events').addClass('visto');
	  } else {
		$('.sec-events').removeClass('visto');
	  }
    });

  //Más detalles en Staff
	$('.more-detail').on('click', function(){
		$(this).parent().prev().toggleClass('hidden');
	});

});
