import React from 'react'
import { useSwiper } from 'swiper/react';
import './style.css'
import slideContent from '../../../public/slide-content';

const SwiperNavButton = ({ currentIndex }) => {

    const swiper = useSwiper();

    return (
        <div className='swiper-btn-click w-[100px] absolute right-[3%] bottom-[5%] bg-[rgba(255,255,255,0.2)] rounded-full z-[5] border-white border-[1px] h-[48px] overflow-hidden'>
            <div className={`${currentIndex === 0 ? 'opacity-50' : 'opacity-100'} swiper-button-prev`} onClick={() => swiper.slidePrev()}></div>
            <div className={`${currentIndex === slideContent.length - 1 ? 'opacity-50' : 'opacity-100'} swiper-button-next`} onClick={() => swiper.slideNext()}></div>
        </div>   
    )
}

export default SwiperNavButton