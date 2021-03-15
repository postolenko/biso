var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 12000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendArrows: $(".navs")
        });
    }

});