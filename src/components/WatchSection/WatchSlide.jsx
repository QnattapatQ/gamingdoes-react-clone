import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import watchData from './watchData.js';
import { useRef, useEffect, useState } from 'react';

const WatchSlide = () => {

    const swiper = useSwiper();

    const swiperRef = useRef(null);

    const [curentIndexOfSlide, setCurrentIndexOfSlide] = useState(0); // State รับค่า Index จาก Slide ปัจจุบัน
    const [slideActive, setSlideActive] = useState(false); // State รับค่า Index จาก Slide ปัจจุบัน
    const [countSlide, setCountSlide] = useState(0); // State รับค่า Index จาก Slide ปัจจุบัน
    const [swiperIndex, setSwiperIndex] = useState(null);

    const handleSlideIndexChange = (swiper) => {  // function สำหรับรับต่า index ของ slide ปัจจุบัน
        setCurrentIndexOfSlide(swiper.realIndex)
    }


    return (
        <div className='w-full h-full'>
            <Swiper
                ref={swiperRef}
                loop={true}
                centeredSlides={true}
                grabCursor={true}
                spaceBetween={-450}
                slidesPerView={3}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                onSlideChange={handleSlideIndexChange}
                className='mySwiper h-full w-full relative'
            >
                {watchData.map((data, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => {
                            return (
                                <div className={`${isActive ? 'scale-[1] z-[200]' : 'scale-[0.5]'} w-full h-full duration-500 top-0 bottom-0 z-[-100]`}>
                                    <img className='w-full h-full z-[1]' src={data.img} alt="" />
                                    <div className={`${isActive ? 'block' : 'hidden'}`}>
                                        <h2>{data.topic}</h2>    
                                    </div>
                                </div>
                            )
                        }}
                    </SwiperSlide>  
                ))}
            </Swiper>
        </div>
    )
}

export default WatchSlide