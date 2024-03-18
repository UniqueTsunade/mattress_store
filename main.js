const swiper = new Swiper('.swiper', {
    // Optional parameters
  
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,


    breakpoints: {     
      950: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },

  });

  //mobil-nav-wrapper--open

  const mobileNavOpen = document.querySelector("#open-mobile-nav-btn");
  const mobileNavClose = document.querySelector("#close-mobile-nav-btn")
  const mobileMenu= document.querySelector(".mobile-nav__wrapper");

  mobileNavOpen.onclick = function () {
    mobileMenu.classList.add("mobile-nav__wrapper--open")
  }

  mobileNavClose.onclick = function () {
    mobileMenu.classList.remove("mobile-nav__wrapper--open")
  }



  
  
  