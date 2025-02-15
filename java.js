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
document.addEventListener('DOMContentLoaded', function () {
    const blocks = document.querySelectorAll('.box-wrap .block');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    blocks.forEach(block => {
        observer.observe(block);
    });
});
