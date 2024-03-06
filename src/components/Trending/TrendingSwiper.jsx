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
                slidesPerView={'auto'}
                spaceBetween={5}
                modules={[FreeMode]}
                freeMode={true}
                className='mySwiper w-auto h-full pr-10'>
                {trendingTag.map((data) => (
                    <SwiperSlide key={data} className='w-auto overflow-hidden'>
                        <div className='border bg-[rgba(255_255_255_/_10%)] hover:bg-[rgba(255_255_255_/_20%)] border-[rgba(255_255_255_/_20%)] rounded-full overflow-hidden'>
                            <a href="#" className='text-white font-semibold py-[5px] px-4'>{data}</a>
                        </div> 
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
