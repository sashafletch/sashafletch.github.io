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



// var mobile = window.matchMedia('(max-width: 574px)');
// function myFunction(mobile) {
//   if (mobile.matches) {
//     window.addEventListener('scroll', function(){
//       if(window.scrollY > heroImg.height){
//
//       }
//     })
//   }
// }
//
// window.addEventListener('scroll', function(){
//   if(responsive.matches)
// })
