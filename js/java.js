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
