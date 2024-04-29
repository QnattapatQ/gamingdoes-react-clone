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
        <div className='bg-white pt-16 pb-6 max-xl:pb-16 border-b-2'>
            <div className='max-w-[1332px] mx-auto px-4'>
                <div className='px-[70px] max-2xl:px-10'>
                    <h2 className='font-bold text-transparent uppercase text-xl bg-main-blue-linear bg-clip-text w-fit'>THIS WEEK'S POPULAR</h2>
                </div>
                <div className='mt-8'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={40}
                        modules={[FreeMode]}
                        freeMode={true}
                        breakpoints={{
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 64,
                            },
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            }
                        }}
                        className='mySwiper w-auto pt-2 px-[70px] max-2xl:px-10'
                    >
                        {popularContent.map((data, index) => (
                            <SwiperSlide key={index} className='max-w-[250px] min-w-[200px] w-full'>
                                <div className='relative'>
                                    <div className= 'absolute -top-2 -right-4'>
                                        <img className='w-[50px] h-[50px]' src={data.boxImg} alt="" />
                                        <p className='absolute text-[13px] top-[6px] text-center leading-[12px] text-main-blue'><span className='font-semibold'>{data.views}</span> views</p>
                                    </div>
                                    <div className='z-[3]'>
                                        <a href="#">
                                            <img className='' src={data.img} alt="" />
                                        </a>
                                    </div>
                                    <div className='flex mt-4 overflow-hidden'>
                                        <div className='relative pr-4'>
                                            <a href="#" className='hover:text-main-blue'>
                                                <h2 className='line-clamp-3 text-md font-prompt text-base max-xl:text-sm font-medium'>{data.textContent}</h2>
                                            </a>
                                            <div className='mt-3 flex gap-4'>
                                                <a className='text-[10px] text-main-blue' href="#">BY {data.ref}</a>
                                                <a className='text-[10px] text-main-blue decoration-dashed' href="#">NEWS</a>
                                            </div>
                                        </div>
                                        <div className='w-[25%] basis-auto text-center text-[90px] font-bold relative h-full -top-10 text-main-blue z-[-2] max-xl:text-[60px] max-xl:-top-5'>
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