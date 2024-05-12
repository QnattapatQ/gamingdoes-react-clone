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
    const [swiperIndex, setSwiperIndex] = useState(null);

    const handleSlideIndexChange = (swiper) => {  // function สำหรับรับต่า index ของ slide ปัจจุบัน
        setCurrentIndexOfSlide(swiper.realIndex)
    }


    useEffect(() => {
        console.log(curentIndexOfSlide)
    }, [curentIndexOfSlide]);

    useEffect(() => {
        if (swiperIndex !== null) {
            const handleSlideChange = () => {
            const activeIndex = swiperIndex.realIndex;
            const slidesCount = swiperIndex.slides.length;
            const nonActiveIndexes = Array.from(Array(slidesCount).keys()).filter(index => index !== activeIndex);
            // console.log(nonActiveIndexes);
          };
    
          swiperIndex.on('slideChange', handleSlideChange);
    
          return () => {
            swiperIndex.off('slideChange', handleSlideChange);
          };
        }
    }, [swiperIndex]);


    return (
        <div>
            <Swiper
            onSwiper={setSwiperIndex}
                ref={swiperRef}
                effect={'coverflow'}
                loop={true}
                centeredSlides={true}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 50,
                    depth: 500,
                    modifier: 1.5,
                }}
                slidesPerView={2}
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
                                <div>
                                    <img className='w-full' src={data.img} alt="" />
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