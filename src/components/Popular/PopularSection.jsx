import React from 'react'
import '../../App.css';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import popularContent from './popular-section.js';

const PopularSection = () => {
    return (
        <div className='bg-white py-16'>
            <div className='max-w-[1332px] mx-auto px-[70px]'>
                <div>
                    <h2 className='font-bold text-transparent uppercase text-xl bg-main-blue-linear bg-clip-text w-fit'>THIS WEEK'S POPULAR</h2>
                </div>
                <div className='mt-8'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={5}
                        modules={[FreeMode]}
                        freeMode={true}
                        className='mySwiper w-auto h-full'
                    >
                        {popularContent.map((data, index) => (
                            <SwiperSlide key={index} className='w-auto overflow-hidden'>
                                <div className='bg-red-500 w-fit'>
                                    <div className='w-[250px] h-[150px]'>
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div className='flex'>
                                        <div className='basis-[60%]'>
                                            <p className='line-clamp-3'>{data.textContent}</p>
                                        </div>
                                        <div className='basis-[40%]'>
                                            <p>{index + 1}</p>    
                                        </div>
                                    </div>    
                                </div> 
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default PopularSection