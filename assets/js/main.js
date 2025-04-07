// Testimonial Slider
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 3,
        responsive: {
            1000: { items: 3 },
            980: { items: 2 },
            768: { items: 2 },
            650: { items: 1 }
        },
        pagination: true,
        navigation: false,
        slideSpeed: 1000,
        autoplay: true
    });
});

// Testimonials Slider
$(document).ready(function () {
    $("#testimonials-slider").owlCarousel({
        items: 8,
        responsive: {
            1000: { items: 3 },
            980: { items: 2 },
            768: { items: 2 },
            650: { items: 1 }
        },
        pagination: false,
        navigation: false,
        slideSpeed: 1000,
        autoplay: true
    });
});

// Left & Right Sliders
$(document).ready(function () {
    $("#left-slider").owlCarousel({
        items: 1,
        loop: true,
        slideSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 1000,
        dots: false,
        nav: false
    });

    $("#right-slider").owlCarousel({
        items: 1,
        loop: true,
        slideSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 1000,
        dots: false,
        nav: false
    });
});

// Network Slider
$(document).ready(function () {
    $('#network-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items:4,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 }
        }
    });
});
