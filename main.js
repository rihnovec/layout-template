import './blocks/bundles/showroom.sass'

import showroomGallery from './blocks/showroom-gallery/showroom-gallery'
import productList from './blocks/product-list/product-list'
import cardList from './blocks/card-list/card-list.js'
import {isDesktop} from './blocks/helpers/isDesktop.js'

document.addEventListener('DOMContentLoaded', () => {
    showroomGallery()
    productList()

    if (!isDesktop()) {
        cardList()
    }
})