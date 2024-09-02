import './blocks/bundles/showroom.sass'

import '@fancyapps/fancybox'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'

import Swiper from 'swiper';
import {Pagination, Scrollbar, EffectFade, Autoplay, Navigation} from 'swiper'

Swiper.use([Pagination, Scrollbar, EffectFade, Autoplay, Navigation])
window.Swiper = Swiper

import 'swiper/swiper-bundle.css';

import showroomGallery from './blocks/showroom-gallery/showroom-gallery'
import productList from './blocks/product-list/product-list'

document.addEventListener('DOMContentLoaded', () => {
    showroomGallery()
    productList()
})