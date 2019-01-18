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

	//form
	// $('').mask('(000) 000-0000');
	$('input[name=phone]').mask('(0NN) NNN NN NN', {
            'translation': {
                0: {
                    pattern: /[0]/
                },
                N: {
                    pattern: /[0-9*]/
                }
            }
        });
	$('#callback').on('click', function(e){
		e.preventDefault();
	});
});