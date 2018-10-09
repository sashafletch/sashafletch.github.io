$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  $('.header-bg').css('top', -(scrollTop * 1.25) + 'px');
});
