$(document).ready(function(){
	//mobile btn menu
	$('.burger').on('click', function(){
		$('header').toggleClass('active');
		$(this).toggleClass('active');
		$('.header-content').on('click', function(e){
			e.stopPropagation();
		});
	});
	//mobile menu ovarlay
	$('header').on('click', function(){
		$(this).toggleClass('active');
		$('.burger').toggleClass('active');
	});

	//lightbox
	$('.advantages-lightboxes img').on('click', function(){
		$('.lightbox-ovarlay').fadeIn().css({'display':'flex'});
		$('.lightbox-ovarlay img').attr('src', $(this).attr('src'));
	});
	$('.lightbox-ovarlay').on('click', function(){
		$(this).fadeOut();
	});
});