export default () => {
  const galleryWrapEl = document.querySelector('.showroom-gallery-wrap')

  if (galleryWrapEl) {
    const sliderEl = galleryWrapEl.querySelector('.showroom-gallery')
    const scrollbarEl = galleryWrapEl.querySelector('.showroom-gallery-scrollbar')

    const sliderInstance = new Swiper(sliderEl, {
      slidesPerView: 'auto',
      freeMode: true,
      watchOverflow: true,
      scrollbar: {
        el: scrollbarEl,
        dragClass: 'showroom-gallery-scrollbar__drag',
        draggable: true
      },
      pagination: {
        el: '.showroom-gallery-pagination',
        type: 'fraction',
        currentClass: 'showroom-gallery-pagination__current',
        totalClass: 'showroom-gallery-pagination__total',
        formatFractionCurrent: number => number >= 10 ? number.toString() : '0' + number,
        formatFractionTotal: number => number >= 10 ? number.toString() : '0' + number,
      }
    })

    initFancyboxGallery(sliderInstance)
  }
}

function initFancyboxGallery(sliderInstance) {
  const sliderEl = sliderInstance.el
  const gallery = [...sliderEl.querySelectorAll('.showroom-gallery-slide__img')]
    .map(img => ({src: img.getAttribute('src')}))

  sliderEl.addEventListener('click', ({target}) => {
    const slide = target.closest('.showroom-gallery-slide')

    if (slide) {
      const slideIndex = slide.dataset.index

      $.fancybox.open(gallery, {
        mobile: {
          clickSlide() {
            return "close"
          },
        },
      }, slideIndex)
    }
  })
}