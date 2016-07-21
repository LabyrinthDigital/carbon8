$(function() {


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