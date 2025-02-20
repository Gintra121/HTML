$(document).ready(function(){
  $('.click').click(function(){
      $(this).toggleClass('.clicked');
      $('.navblock').toggleClass('nav-toggle');
  });
  $(window).on('scroll', function(){
      $('.click').removeClass('.clicked');
      $('.navblock').removeClass('nav-toggle');
      if($(window).scrollTop()>30){
          $('header').addClass('header-online');
      } else{
          $('header').removeClass('header-online');
      }
  });

});

// for disappeared and appera when scroll
document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".box-wrap .block");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  blocks.forEach((block) => {
    observer.observe(block);
  });
});
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

