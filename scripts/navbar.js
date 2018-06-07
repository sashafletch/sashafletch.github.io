var heroImg = document.querySelector('img.hero');
var nav = document.getElementsByTagName('nav')[0];

if (heroImg) {
  window.addEventListener('scroll', function(){
    if(window.scrollY > heroImg.height){
      nav.classList.add('colored-in');
      nav.classList.add('greyNavItem');
    }
      if(window.scrollY <= heroImg.height){
      nav.classList.remove('colored-in');
    }
  });

}
