import React from 'react'
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

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
                spaceBetween={15}
                modules={[FreeMode]}
                freeMode={true}
                className='mySwiper h-full relative bg-green-500'>
                {trendingTag.map((data) => (
                    <SwiperSlide key={data} className='w-auto'>
                        <div className='bg-red-500 text-center'>
                            <a href="#" className='text-white'>{data}</a>
                        </div> 
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
