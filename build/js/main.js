const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

// Swiper
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
  pagination: {
    el: '.swiper-pagination'
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    300: {
      slidesPerView: 1
    },

    // when window width is >= 640px
    768: {
      slidesPerView: 2
    },

    976: {
      slidesPerView: 3
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
  threshold: 0.75
});

observer.observe(hero);
