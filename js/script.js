$(function() {
    //caches a jQuery object containing the header element
    var header = $("nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 120) {
            header.removeClass('hide').addClass("show");
        } else {
            header.removeClass("show").addClass('hide');
        }
    });
  
});