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
                        spaceBetween={40}
                        modules={[FreeMode]}
                        freeMode={true}
                        breakpoints={{
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 64,
                            }
                        }}
                        className='mySwiper w-auto h-full'
                    >
                        {popularContent.map((data, index) => (
                            <SwiperSlide key={index} className='max-w-[250px] min-w-[150px] w-fulloverflow-hidden'>
                                <div className='bg-red-500'>
                                    <div>
                                        <img className='w-full h-full object-cover' src={data.img} alt="" />
                                    </div>
                                    <div className='flex mt-4'>
                                        <div className='basis-[75%] h-full'>
                                            <h2 className='line-clamp-3 text-md'>{data.textContent}</h2>
                                        </div>
                                        <div className='basis-[25%] text-center text-[80px] font-semibold h-full bg-green-500 relative -top-1'>
                                            {index + 1}
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