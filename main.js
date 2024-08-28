import './blocks/bundles/showroom.sass'

import productList from './blocks/product-list/product-list'
import cardList from './blocks/card-list/card-list'

document.addEventListener('DOMContentLoaded', () => {
    cardList()
    productList()
})