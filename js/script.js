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