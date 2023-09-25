import { animateSlideContent } from './gsap';

const slides = document.querySelectorAll('.swiper-slide.banner-slide-wrapper');

function showSlideContent(params: any) {
  slides.forEach((slide) => {
    if (params.activeIndex == slide?.attributes[3]?.value) {
      //   // const src = slide.getAttribute('src');
      const content = slide.querySelector('.grid.h-full');
      if (!!content) {
        content.innerHTML = `
        <div class="w-52 pt-5 px-5 bg-green-700 relative animate-shine" style="width:208px; padding:20px">
        <p class="text-2xl font-bold text-amber-500 h-16">Billboard</p>
        <h2 class="text-white text-3xl min-h-[150px] font-extrabold">
          Dịch vụ về biển quảng cáo ngoài trời
        </h2>
        <p class="text-white text-xs text-justify">
          Biển quảng cáo là một cấu trúc quảng cáo ngoài trời lớn, thường được tìm thấy ở những khu vực có
          mật độ giao thông cao như dọc theo những con đường đông đúc. Các biển quảng cáo hiển thị quảng
          cáo lớn cho người đi bộ và lái xe đi qua. Thông thường, các thương hiệu sử dụng biển quảng cáo
          để xây dựng thương hiệu của họ hoặc để quảng cáo cho các sản phẩm mới của họ.
        </p>
      </div>
          `;
      }
    }
  });
}

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
    on: {
      // init: (el: any) => animateSlideContent(el.slides[el.activeIndex], 0),
      // slideChangeTransitionStart: (el: any) => animateSlideContent(el.slides[el.activeIndex], 0),
      init: showSlideContent,
      slideChange: (params: any) => showSlideContent(params),
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
