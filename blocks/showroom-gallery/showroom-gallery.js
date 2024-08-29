export default () => {
  const galleryWrapEl = document.querySelector('.showroom-gallery-wrap')

  if (galleryWrapEl) {
    const sliderEl = galleryWrapEl.querySelector('.showroom-gallery')
    const scrollbarEl = galleryWrapEl.querySelector('.showroom-gallery-scrollbar')

    new Swiper(sliderEl, {
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
  }
}