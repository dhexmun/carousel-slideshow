const swiper = new Swiper('.swiper', {
   autoplay: {
      display: 4000,
      disableOnInteraction: true,
   },
  loop: true,

  // Pagination Dots
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation Arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
