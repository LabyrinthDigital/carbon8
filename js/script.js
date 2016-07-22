$(function() {

$(".fancybox").fancybox({

	beforeShow : function() {
	       var alt = this.element.find('img').attr('alt');
	       
	       this.inner.find('img').attr('alt', alt);
	       
	       this.title = alt;
	   },
	   
    helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.85)'
                }
            }
        }
});


$(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 300) {
		$('#top').removeClass('hide');
    }else {
      	$('#top').addClass('hide');
    }
});

  $('#top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
  

});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});