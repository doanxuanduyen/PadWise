export const setupSwiper = () => {
  const defaultSetting = {
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };
  new Swiper('.mySwiper', {
    ...defaultSetting,
    slidesPerView: 1,
  });

  new Swiper('.swiper-section-contact', {
    ...defaultSetting,
    slidesPerView: 2,
    breakpoints: {
      1366: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
    },
  });

  new Swiper('.related-swiper', {
    ...defaultSetting,
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
    },
  });
};
