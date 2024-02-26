import React from 'react'
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const TrendingSwiper = () => {

    const trendingTag = [
        "ROV",
        "Overwatch 2",
        "Stadia",
        "Titanfall 2",
        "GTA",
        "Nintendo",
        "Marvel",
        "Valorant",
        "Dota 2",
    ];
    
    return (
        <div className='w-full'>
            <Swiper
                slidesPerView={trendingTag.length}
                spaceBetween={8}
                className='mySwiper h-full relative bg-green-500'>
                {trendingTag.map((data) => (
                    <SwiperSlide key={data} className='inline-block'>
                        <div className='bg-red-500 text-center'>
                            <a href="#" className='text-white'>{data}</a>
                        </div> 
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
