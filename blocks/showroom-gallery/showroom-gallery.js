import {isDesktop} from '../helpers/isDesktop.js'

export default () => {
  const galleryWrapEl = document.querySelector('.showroom-gallery-wrap')

  if (galleryWrapEl) {
    const sectionEl = galleryWrapEl.closest('.showroom-gallery-columns')
    const sliderEl = galleryWrapEl.querySelector('.showroom-gallery')
    const scrollbarEl = galleryWrapEl.querySelector('.showroom-gallery-scrollbar')
    const paginationEl = document.querySelector('.showroom-gallery-pagination')
    let canScroll = true, scrollTimeout

    const sliderInstance = new Swiper(sliderEl, {
      slidesPerView: 'auto',
      freeMode: true,
      watchOverflow: true,
      allowTouchMove: !isDesktop(),
      effect: isDesktop() ? 'fade' : 'slide',
      scrollbar: {
        el: scrollbarEl,
        dragClass: 'showroom-gallery-scrollbar__drag',
        draggable: true
      },
      pagination: {
        el: paginationEl,
        type: 'fraction',
        currentClass: 'showroom-gallery-pagination__current',
        totalClass: 'showroom-gallery-pagination__total',
        formatFractionCurrent: number => number >= 10 ? number.toString() : '0' + number,
        formatFractionTotal: number => number >= 10 ? number.toString() : '0' + number,
      },
      breakpoints: {
        1280: {
          slidesPerView: 1,
          freeMode: false
        }
      },
      on: {
        init: function(swiper) {
          if (isDesktop()) {
            swiper.customThumbs = [
              getThumbSlider({
                sliderSelector: '.showroom-gallery-thumb_1 .showroom-gallery-thumb-slider',
                initialSlide: 1
              }),
              getThumbSlider({
                sliderSelector: '.showroom-gallery-thumb_2 .showroom-gallery-thumb-slider',
                initialSlide: 2
              })
            ]
          }
        },

        slideChange: function(swiper) {
          if (isDesktop()) {
            const currentIndex = swiper.realIndex
            const thumbSrcIndexes = []

            if (currentIndex < swiper.slides.length - 1) {
              thumbSrcIndexes[0] = currentIndex + 1
            } else {
              thumbSrcIndexes[0] = Math.abs(currentIndex + 1 - swiper.slides.length)
            }

            if (currentIndex < swiper.slides.length - 2) {
              thumbSrcIndexes[1] = currentIndex + 2
            } else {
              thumbSrcIndexes[1] = Math.abs(currentIndex + 2 - swiper.slides.length)
            }

            swiper.customThumbs.forEach((thumb, index) => {
              thumb.slideTo(thumbSrcIndexes[index])
            })
          }
        }
      }
    })

    initFancyboxGallery(sliderInstance)

    if (sectionEl) {
      if (isDesktop()) {
        sectionEl.addEventListener('mousewheel', (event) => {
          if (!canScroll) {
            event.preventDefault()
            return false
          }

          const sliderEvent = event.deltaY > 0 ? 'slideNext' : 'slidePrev'

          if (sliderEvent === 'slidePrev' && !sliderInstance.isBeginning) {
            event.preventDefault()
          }

          if (sliderEvent === 'slideNext' && !sliderInstance.isEnd) {
            event.preventDefault()
          }

          sliderInstance[sliderEvent]()

          canScroll = false
          clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
            canScroll = true
          }, 300)
        })
      }
    }
  }
}

function getThumbSlider({sliderSelector, initialSlide}) {
  return new Swiper(sliderSelector, {
    effect: 'fade',
    allowTouchMove: false,
    initialSlide: initialSlide
  })
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