import './blocks/bundles/showroom.sass'

import showroomGallery from './blocks/showroom-gallery/showroom-gallery'
import productList from './blocks/product-list/product-list'

document.addEventListener('DOMContentLoaded', () => {
    showroomGallery()
    productList()
})