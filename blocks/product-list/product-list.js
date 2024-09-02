export default() => {
    new Swiper('.product-list-item-slider', {
        slidesPerGroup: 1,
        threshold: 30,
        autoplay: {
            delay: 5000,
        },
        effect: isDesktop() ? 'fade' : 'slide',
        allowTouchMove: !isDesktop(),
        pagination: {
            el: '.product-list-item-slider-pagination',
            type: 'bullets',
            clickable: true,
        },
        on: {
            init(swiper) {
                const navItems = swiper.el.querySelectorAll('.product-list-item-slider-nav-item')

                navItems.forEach((navItem, index) => {
                    navItem.addEventListener('mouseenter', () => {
                        swiper.slideTo(index)
                    })
                    navItem.addEventListener('mouseleave', () => {
                        swiper.autoplay.start()
                    })
                })
            }
        }
    });
}

function isDesktop() {
    return window.innerWidth >= 1280
}