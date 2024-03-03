$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    $('.slider2').slick({
        fade: true,
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
        dots:true,
        autoplay:true,
        autoplaySpeed:10000
    });
});
