$(document).on('ready', function() {
	$(document).on('click','.slideshow img',function() {
		var photo = this;
		$(this).focus();
		$(this).siblings().css('height','50px');
		$(this).css('display','block').css('margin','auto');
		$(this).after('<button id="next">Next</button>');
		$(this).after('<button id="back">Back</button>');
		$('#next').css('float','right');
		$('#back').css('float','left');

			photo.on('blur', function() {
			$('#next').remove();
			$('#back').remove();
		});

	});

	
});