const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.querySelector('header');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    hamburgerBtn.classList.toggle('toggle-btn');
    header.classList.toggle('bg-white');
  };

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', initApp);

///////////////////////////////////////////////
// Swiper //
//////////////////////////////////////////////

const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 400,
  lazyLoading: true,
  centerSlide: 'true',
  grabCursor: 'true',
  slidesPerView: 3,
  effect: 'slide',
  spaceBetween: 20, // 100px
  keyboard: {
    enabled: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination'
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    300: {
      slidesPerView: 1,
      autoplay: false
    },

    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      }
    },

    976: {
      slidesPerView: 3,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      }
    }
  }
});

///////////////////////////////////////////////
// Sticky Navigation //
//////////////////////////////////////////////

const header = document.querySelector('header');
const hero = document.getElementById('hero');

const stickyNav = (entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('sticky-nav');
    } else {
      header.classList.remove('sticky-nav');
    }
  });
};

const observer = new IntersectionObserver(stickyNav, {
  threshold: 0.5
});

observer.observe(hero);
