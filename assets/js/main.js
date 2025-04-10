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
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        dots: false,
        nav: false
    });

    $("#right-slider").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        dots: false,
        nav: false
    });
});



  $('.carousel-testimonia').owlCarousel({
    loop:true,
    margin:0,
    items:4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})


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
//Scroll Percentage
document.addEventListener("DOMContentLoaded", function () {
    const scrollPercent = document.querySelector(".scroll-count-percent");
    const progressCircle = document.querySelector(".progress__value");
    const percentText = document.querySelector(".percent-number-text");
    const radius = progressCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
  
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`;
  
    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      progressCircle.style.strokeDashoffset = offset;
      percentText.textContent = Math.round(percent);
    }
  
    window.addEventListener("scroll", function () {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentValue = (scrollTop / docHeight) * 100;
  
      // Show scroll circle only after some scroll
      if (scrollTop > 100) {
        scrollPercent.classList.add("active");
      } else {
        scrollPercent.classList.remove("active");
      }
  
      setProgress(scrollPercentValue);
    });
  });

  //Go to btn
  document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("btnScrollTop");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        scrollTopBtn.classList.remove("d-none");
      } else {
        scrollTopBtn.classList.add("d-none");
      }
    });
  
    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

  //switzeland main crousel
  $(document).ready(function(){
    $("#iccCarousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      smartSpeed: 800,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        768: { items: 1 }
      }
    });
  });
