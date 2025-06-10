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
// Testimonials Slider
$(document).ready(function () {
    $("#Icc-Pupblication").owlCarousel({
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
const swiper = new Swiper('.mySwiper', {
  loop: false,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


 // Initialize the Swiper for the right slider
 var swiperRight = new Swiper('.mySwipers', {
  slidesPerView: 1, // Number of slides visible at once
  spaceBetween: 10, // Space between slides
  loop: true, // Enable looping of slides
  autoplay: {
    delay: 5000, // Autoplay interval in milliseconds
  },
  pagination: {
    el: '.swiper-pagination', // Pagination element
    clickable: true, // Enable pagination clicks
  },  
});


$('.carousel-testimonia').owlCarousel({
    loop: true,
    margin: 0,
    items: 4,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    },
    onInitialized: setOwlWrapperLeft,
    onTranslated: setOwlWrapperLeft
});

function setOwlWrapperLeft() {
    // Set the left value of the owl-wrapper
    $('.carousel-testimonia .owl-wrapper').css('left', '21px');
}


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
    dots: true,            
    nav: false              
  });
});

  $(document).ready(function(){
      $('#customFullWidthCarousel').owlCarousel({
        items: 1,  // or 2, 3 depending on design
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
          autoplayTimeout: 1000, 
       smartSpeed: 800,
       
      });
    });
   document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Default to homepage

    // Get all nav links (main and dropdown)
    const allLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item');

    allLinks.forEach(link => {
      const linkHref = link.getAttribute('href');

      // Match exact page
      if (linkHref === currentPage) {
        link.classList.add('active');

        // If it's a dropdown-item, activate its parent dropdown too
        const parentDropdownMenu = link.closest('.dropdown-menu');
        if (parentDropdownMenu) {
          const parentNavLink = parentDropdownMenu.previousElementSibling;
          if (parentNavLink && parentNavLink.classList.contains('nav-link')) {
            parentNavLink.classList.add('active');
          }

          // Also mark parent nav-item (li)
          const parentNavItem = parentDropdownMenu.closest('.nav-item');
          if (parentNavItem) {
            parentNavItem.classList.add('active');
          }
        } else {
          // For top-level links like Home
          const parentNavItem = link.closest('.nav-item');
          if (parentNavItem) {
            parentNavItem.classList.add('active');
          }
        }
      }
    });
  });
$(document).ready(function () {
  $('.owl-main-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, // Time between slides
    autoplayHoverPause: true, // Pause on hover
    items: 1,
    nav: true,
    dots: true,
    navText: ["<", ">"],
    smartSpeed: 800 // Transition speed
  });
});

//thumblain-slide
 const slides = document.querySelectorAll('.thumbslide');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const textContainer = document.getElementById('slide-text');
  let currentIndex = 0;

  function showSlide(index) {
    if (!slides[index]) return;

    slides.forEach(slide => slide.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));

    slides[index].classList.add('active');
    thumbnails[index].classList.add('active');

    const title = slides[index].dataset.title;
    const link = slides[index].dataset.link;

    textContainer.innerHTML = `<h1>${title}</h1><a href="${link}" target="_blank">Visit Brand</a>`;

    currentIndex = index;
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => showSlide(index));
  });

  // Optional: Auto-scroll
  setInterval(() => {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }, 4000); // 4 seconds

  // Scroll thumbnails on arrow click
  function scrollThumbnails(direction) {
    const container = document.getElementById('thumbnails');
    const scrollAmount = 200;
    container.scrollLeft += direction * scrollAmount;
  }
//fade-tata
 const facts = [
      {
        text: "India’s first business history archive, Tata Central Archives, was set up in 1991.",
        link: "https://www.tata.com/newsroom/heritage/tata-central-archives-art",
        label: "The Art of Archiving",
        bg: "#043a5b"
      },
      {
        text: "Jamsetji Tata's Empress Mills, established in 1877, brought ring spindle technology to India.",
        link: "https://www.tata.com/newsroom/through-the-mill",
        label: "Through the Mill",
        bg: "#1ba2f5"
      },
      {
        text: "The Tata group has over 100 operating companies in seven business sectors.",
        link: "https://www.tata.com/business",
        label: "Explore Businesses",
        bg: "#00796b"
      }
    ];

 let factIndex = 0;

    function refreshFact() {
      const factBox = document.getElementById('factBox');
      const factText = document.getElementById('factText');
      const factLink = document.getElementById('factLink');

      // Add fade-out
      factText.classList.add('fade');
      factLink.classList.add('fade');

      // Wait for fade-out then update content
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % facts.length;
        const current = facts[currentIndex];

        factText.innerHTML = current.text;
        factLink.innerHTML = current.label;
        factLink.href = current.link;
        factBox.style.backgroundColor = current.bg;

        // Fade-in
        factText.classList.remove('fade');
        factLink.classList.remove('fade');
      }, 500);
    }
 
