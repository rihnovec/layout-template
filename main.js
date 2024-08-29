import './blocks/bundles/showroom.sass'

import '@fancyapps/fancybox'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'

import Swiper from 'swiper';
import {Pagination, Scrollbar, EffectFade} from 'swiper'

Swiper.use([Pagination, Scrollbar, EffectFade])
window.Swiper = Swiper

import 'swiper/swiper-bundle.css';

import showroomGallery from './blocks/showroom-gallery/showroom-gallery'
import productList from './blocks/product-list/product-list'
import cardList from './blocks/card-list/card-list'

document.addEventListener('DOMContentLoaded', () => {
    showroomGallery()
    cardList()
    productList()
})