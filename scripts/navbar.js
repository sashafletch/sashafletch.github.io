var heroImg = document.querySelector('img.hero');
var nav = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function(){
  if(window.scrollY > heroImg.height){
    nav.classList.add('colored-in');
    nav.classList.add('greyNavItem');
  }
    if(window.scrollY <= heroImg.height){
    nav.classList.remove('colored-in');
  }
});

/*Burger Menu*/

function initCancelIcon(x){
  x.classList.toggle("change");
}

// if (typeof (window.Layout) == "undefined") {
//     window.Layout = new Object();
// }
//
// (function (Layout) {
//
//     //return
//     Layout.Init = Init;
//
//     function Init() {
//         InitMainNav();
//     }
//
//     function InitMainNav() {
//         var mainNav$ = $('#siteNav .mainNav:first');
//         var burger$ = $('#mainNavBurger');
//         var nodeToggles$ = mainNav$.find('.toggle');
//         burger$.on('click', function () {
//             if ($(this).hasClass('open')) {
//                 nodeToggles$.removeClass('open');
//                 burger$.removeClass('open');
//                 mainNav$.removeClass('open');
//             } else {
//                 burger$.addClass('open');
//                 mainNav$.addClass('open');
//             }
//         });
//         nodeToggles$.on('click', function (e) { _handleClick(e, false); });
//         nodeToggles$.on('keydown', function (e) { _handleClick(e, true); });
//
//
//         function _handleClick(e, isKeyPress) {
//             var key = e.keyCode || e.which;
//             if (isKeyPress && key !== 13) { return; }
//             e.preventDefault();
//             var this$ = $(e.currentTarget);
//             var sibToggles$ = this$.closest('li').siblings('li').find('.toggle');
//             var kidToggles$ = this$.siblings('ul').find('.toggle');
//             if (this$.hasClass('open')) {
//                 sibToggles$.removeClass('open');
//                 kidToggles$.removeClass('open');
//                 this$.removeClass('open');
//             } else {
//                 sibToggles$.not(this$).removeClass('open');
//                 kidToggles$.removeClass('open')
//                 this$.addClass('open');
//             }
//         }
//     }
//
//
// });
