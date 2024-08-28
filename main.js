import './blocks/bundles/showroom.sass'

document.addEventListener('DOMContentLoaded', () => {
  cardList()
  productList()

  function cardList() {
    const cards = document.querySelectorAll('.card-list-item')

    cards.forEach(function (cards) {
      cards.addEventListener('click', function () {
        cards.classList.toggle('flip')
      })
    })
  }

  function productList() {
    new Swiper('.product-list-item-slider', {
      slidesPerGroup: 1,
      pagination: {
        el: '.product-list-item-slider-pagination',
        type: 'bullets',
        clickable: true,
      },
    })
  }
})