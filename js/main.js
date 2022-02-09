// $(window).scroll(function () {
//   $(".anime-block").each(function () {
//     var elPos = $(this).offset().top;
//     var topOfWindow = $(window).scrollTop();
//     if (elPos < topOfWindow + 700) {
//       $(this).addClass("fadeInUp");
//     }
//   });
// });

let header = document.querySelector('header');
let mobileMenuBtn = document.querySelector('.header__burger');
let mobileMenu = document.querySelector('.header__menu');
let bodyStyle = document.querySelector('body').style;

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  header.classList.toggle('visible');
  if (mobileMenu.className == 'header__menu active') {
    bodyStyle.overflow = 'hidden';
  }
  else
    bodyStyle.overflow = 'visible';
});

[].forEach.call(mobileMenu.children, function (item) {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    bodyStyle.overflow = 'visible';
    header.classList.remove('visible');
  })
});