export default() => {
    new Swiper('.product-list-item-slider', {
        slidesPerGroup: 1,
        threshold: 30,
        pagination: {
            el: '.product-list-item-slider-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

}