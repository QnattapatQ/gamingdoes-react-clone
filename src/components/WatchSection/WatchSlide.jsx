import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import watchData from './watchData.js';
import { FaPlay } from "react-icons/fa";
import { useRef, useEffect, useState } from 'react';

const WatchSlide = ({ setCurrentIndexOfImage }) => {

    const [curentIndexOfSlide, setCurrentIndexOfSlide] = useState(0); // State รับค่า Index จาก Slide ปัจจุบัน

    const handleSlideIndexChange = (swiper) => {  // function สำหรับรับต่า index ของ slide ปัจจุบัน
        setCurrentIndexOfSlide(swiper.realIndex)
    }

    useEffect(() => {
        setCurrentIndexOfImage(curentIndexOfSlide)
    }, [curentIndexOfSlide]);

    return (
        <div>
            <div className='pt-4 pb-6'>
                <Swiper
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={-430}
                    slidesPerView={3}
                    modules={[Pagination, Navigation]}
                    onSlideChange={handleSlideIndexChange}
                    className='mySwiper h-full w-full relative'
                >
                    {watchData.map((data, index) => (
                        <SwiperSlide key={index} className={`${curentIndexOfSlide !== index ? 'z-[-10]' : ''}`}>
                            {({ isActive }) => {
                                return (
                                    <div className={`${isActive ? 'scale-[1]' : 'scale-[0.5]'} w-full h-full duration-500 top-0 bottom-0 z-[-100] relative`}>
                                        <div className='relative border border-[rgba(255_255_255_/_15%)]'>
                                            <img className='w-full h-full z-[1]' src={data.img} alt="" />
                                            <a href='#' className={`${isActive ? 'block' : 'hidden'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
                                                <div className='p-4 w-[6vw] h-[6vw] border-white rounded-full border flex items-center justify-center bg-white backdrop-filter backdrop-blur-md bg-opacity-20'>
                                                    <FaPlay className='text-white text-[2.5vw] ml-[10%]'/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className={`${isActive ? 'block' : 'hidden'} pt-4`}>
                                            <h2 className='text-3xl text-white font-bold'>{data.topic}</h2>    
                                        </div>
                                        <div className={`${isActive ? 'block' : 'hidden'} flex gap-4 mt-2 text-white text-[10px]`}>
                                            <p>BY KKMTC</p>
                                            <p>NEWS</p>
                                        </div>
                                    </div>
                                )
                            }}
                        </SwiperSlide>  
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default WatchSlide