$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  $(document).scroll(function(){
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('#navbar').css('background-color', '#ffffff');
      $('.dropdown-content').css('background-color', '#ffffff');
      $('.nav_main li').css('color', '#000000');
      $('#nav_about a').css('color', '#000000');
      $('#nav_resume a').css('color', '#000000');
    } else {
      $('#navbar').css('background-color', 'transparent');
      $('.dropdown-content').css('background-color', 'rgba(250, 250, 250, 0.7)');
      $('.nav_main li').css('color', '#ffffff');
      $('#nav_about a').css('color', '#ffffff');
      $('#nav_resume a').css('color', '#ffffff');
    }
  });
});

$(document).ready(function() {
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  $(document).scroll(function(){
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('.nav_mobile').css('background-color', '#ffffff');
      $('.menuToggle span').css('background-color', '#e0e0e0');
    } else {
      $('.nav_mobile').css('background-color', 'transparent');
      $('.menuToggle span').css('background-color', '#ffffff');
    }
  });
});
