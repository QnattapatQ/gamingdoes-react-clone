import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import watchData from './watchData.js';

const WatchSlide = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                loop={true}
                centeredSlides={true}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 10,
                    depth: 500,
                    modifier: 1.5,
                }}
                slidesPerView={1}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='mySwiper h-full w-full relative'
            >
                {watchData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-fit'>
                            <img src={data.img} alt="" />
                        </div>
                    </SwiperSlide>  
                ))}
            </Swiper>
        </div>
    )
}

export default WatchSlide