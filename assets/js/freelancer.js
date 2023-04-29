// (function() {
//   "use strict"; // Start of use strict

//   var scrollToTop = document.querySelector('.scroll-to-top');
  
//   if (scrollToTop) {
    
//     // Scroll to top button appear
//     window.addEventListener('scroll', function() {
//       var scrollDistance = window.pageYOffset;

//       if (scrollDistance > 100) {
//         scrollToTop.style.display = 'block';
//       } else {
//         scrollToTop.style.display = 'none';
//       }
//     });
//   }

//   var mainNav = document.querySelector('#mainNav');

//   if (mainNav) {

//     var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
//     if (navbarCollapse) {
      
//       var collapse = new bootstrap.Collapse(navbarCollapse, {
//         toggle: false
//       });
      
//       var navbarItems = navbarCollapse.querySelectorAll('a');
      
//       // Closes responsive menu when a scroll trigger link is clicked
//       for (var item of navbarItems) {
//         item.addEventListener('click', function (event) {
//           collapse.hide();
//         });
//       }
//     }

//     // Collapse Navbar
//     var collapseNavbar = function() {

//       var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

//       if (scrollTop > 100) {
//         mainNav.classList.add("navbar-shrink");
//       } else {
//         mainNav.classList.remove("navbar-shrink");
//       }
//     };
//     // Collapse now if page is not at top
//     collapseNavbar();
//     // Collapse the navbar when page is scrolled
//     document.addEventListener("scroll", collapseNavbar);
//   }

// })(); // End of use strict



$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Mentor.", "Open-Source Contributor.", "Frontend Developer.", "Good listener.", "Reader."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["Mentor.", "Open-Source Contributor.", "Frontend Developer.", "Good listener.", "Reader."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});