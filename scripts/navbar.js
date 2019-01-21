$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  $(document).scroll(function(){
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('#navbar').css('background-color', '#ffffff');
      $('.large-nav-item').css('background-color', '#ffffff');
      $('.nav_main li').css('color', '#4c4c4c');
      $('#nav_about a').css('color', '#4c4c4c');
      $('#nav_resume a').css('color', '#4c4c4c');
      $('#navbar').css('box-shadow', '0 2px 2px -2px rgba(0,0,0,.2)');
      $('#projectnav').css('display', 'block');
    } else {
      $('#navbar').css('background-color', 'transparent');
      $('.large-nav-item').css('background-color', 'rgba(250, 250, 250, 0.7)');
      $('.nav_main li').css('color', '#ffffff');
      $('#nav_about a').css('color', '#ffffff');
      $('#nav_resume a').css('color', '#ffffff');
      $('#navbar').css('box-shadow', 'none');
      $('#projectnav').css('display', 'none');
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
