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

	//nav menu 

	$('nav li a').on('click', function(e){
		e.preventDefault();
		$('header, .burger').toggleClass('active');
		var elScrollTo = $(this).attr("data-section");
		if(elScrollTo == 'cart'){
			$('.cart-overlay').fadeIn();
		} else{
			$("html, body").animate({
			    scrollTop: $('#' + elScrollTo).offset().top
			}, 1000);
		}
	});

	//lightbox
	$('.advantages-lightboxes img').on('click', function(){
		$('.lightbox-ovarlay').fadeIn().css({'display':'flex'});
		$('.lightbox-ovarlay img').attr('src', $(this).attr('src'));
	});
	$('.lightbox-ovarlay').on('click', function(){
		$(this).fadeOut();
	});

	//item popup 
	$('.catalog-items .item').on('click', function(){
		$('.item-overlay').fadeIn().css({'display':'flex'});
		var title = $(this).find('h3').text();
		var descr = $(this).find('p').text();
		var price = $(this).find('.price').text();
		var image = $(this).find('img').attr('src');
		$('.item-content img').attr('src', image);
		$('.item-content .caption').text(title);
		$('.item-content .descr').text(descr);
		$('.item-content .bottom .price').text(price);

		$('.item-content .close').on('click', function(){
			$(this).parents('.item-overlay').fadeOut();
		});
		
	});
	$('.item-content .buy').on('click', function(){
		var parent = $(this).parents('.item-overlay');
		parent.fadeOut();
		var getImg = parent.find('img').attr('src');
		var nameItem = parent.find('.caption').text();
		var getPrice = parent.find('.price').text();

		var setImg = $('<img>').attr('src', getImg);
		var nameItem = $('<div class="name-item"></div>').text(nameItem);
		var setPrice = $('<div class="price"></div>').text(getPrice);
		$('.cart-order').append(setImg, nameItem, setPrice);

		$('.add-product').css({'left': '20px'});
		setTimeout(function(){
			$('.add-product').css({'left': '-100%'});
		}, 3000);
	});
	$('.item-overlay').on('click', function(){
		$(this).fadeOut();
	});

	$('.item-content').on('click', function(e){
		e.stopPropagation();
	});
	//form
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
	$('#callback').submit(function(e){
		// e.preventDefault();
		$.ajax({
			type: "POST",
			url: "callback.php",
			data: $(this).serialize()
			// ,success: function(data){
			// 	console.log(data + 'hi im work');
			// }
		}).done(function(){
			$('#callback').parent().before('<div class="request-has-been-sent">Ваш запрос отправлен</div>');
			$('#callback').remove();

		});
		return false;
	});

	//cart
	$('.cart-btn').on('click', function(){
		$('.cart-overlay').fadeIn();
	});
	$('.cart-overlay, .cart-content .close-popup').on('click', function(){
		$('.cart-overlay').fadeOut();
	});
	$('.cart-content').on('click', function(e){
		e.stopPropagation();
	});

	$('#cart').submit(function(e){
		// e.preventDefault();
		var dataOrder = {
			name: $('input[name]').val(),
			phone: $('input[phone]').val(),
			delivery: $('select[delivery]').val(),
			adress: $('input[adress]').val()
		};
		$('.cart-order .name-item').each(function(index){
			dataOrder['nameItem' + index] = $(this).text();
		});

		$.ajax({
			type: "POST",
			url: "order.php",
			data: $(this).serialize(),
			success: function(data){
				console.log(data + 'hi im work');
			}
		}).done(function(){
			// $('#callback').parent().before('<div class="request-has-been-sent">Ваш запрос отправлен</div>');
			$('#cart').remove();

		});
		// return false;
	});

});