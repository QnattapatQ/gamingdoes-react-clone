import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import watchData from './watchData.js';
import { FaPlay } from "react-icons/fa";
import './style.css';
import { GrPrevious, GrNext } from "react-icons/gr";
import { useEffect, useState } from 'react';

const WatchSlide = ({ setCurrentIndexOfImage }) => {

    const [curentIndexOfSlide, setCurrentIndexOfSlide] = useState(0); // State รับค่า Index จาก Slide ปัจจุบัน

    const handleSlideIndexChange = (swiper) => {  // function สำหรับรับต่า index ของ slide ปัจจุบัน
        setCurrentIndexOfSlide(swiper.realIndex)
    }

    useEffect(() => {
        setCurrentIndexOfImage(curentIndexOfSlide)
    }, [curentIndexOfSlide]);

    const nextSlide = () => {
        if(curentIndexOfSlide < watchData.length - 1){
            setCurrentIndexOfSlide((prevCount) => prevCount + 1)
        }
    }

    return (
        <div className='pt-8'>
            <div>
                <Swiper
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={2.1}
                    navigation={{
                        nextEl: '.my-custom-next',
                        prevEl: '.my-custom-prev',
                    }}
                    breakpoints={{
                        360: {
                            slidesPerView: 2.1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2.3,
                        },
                        992: {
                            slidesPerView: 3.6,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Navigation]}
                    onSlideChange={handleSlideIndexChange}
                    className='mySwiper h-full w-full relative pt-4 pb-6 max-xl:pb-2 duration-500'
                >
                    {watchData.map((data, index) => (
                        <SwiperSlide key={index} className={`${curentIndexOfSlide !== index ? 'z-[-10]' : ''} pt-2 pb-10`}>
                            {({ isActive }) => {
                                return (
                                    <div className={`${isActive ? 'scale-[1] mx-0' : 'scale-[0.5]'} w-full h-full duration-500 ease top-0 bottom-0 z-[-100] relative`}>
                                        <a href="#">
                                            <div className='margin-x'>
                                                <div className='relative border border-[rgba(255_255_255_/_15%)]'>
                                                    <img className='w-full h-full z-[1]' src={data.img} alt="" />
                                                    <a href='#' className={`${isActive ? 'block' : 'hidden'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
                                                        <div className='p-6 border-white rounded-full border flex items-center justify-center bg-white backdrop-filter backdrop-blur-md bg-opacity-20'>
                                                            <FaPlay className='text-white text-[36px] ml-[10%] max-xl:text-[36px] max-2xl:text-3xl'/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={`${isActive ? 'block' : 'hidden'} pt-4`}>
                                                    <h2 className='text-3xl text-white font-bold max-2xl:text-2xl max-xl:text-center max-md:text-[22px]'>{data.topic}</h2>    
                                                </div>
                                                <div className={`${isActive ? 'block' : 'hidden'} flex w-full gap-4 mt-2 text-white text-[10px] max-xl:justify-center`}>
                                                    <p>BY KKMTC</p>
                                                    <p>NEWS</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }}
                        </SwiperSlide>  
                    ))}
                    <div className='max-w-[1332px] mx-auto px-4'>
                        <div className='px-[70px] max-2xl:px-10 max-xl:px-6 max-md:px-2'>
                            <div className='flex items-center justify-between'>
                                <div className='my-custom-prev bg-[rgba(255_255_255_/_15%)] w-[56px] h-[56px] border border-white rounded-full flex items-center justify-center cursor-pointer'><GrPrevious className='text-white text-4xl'/></div>
                                <div className='my-custom-next bg-[rgba(255_255_255_/_15%)] w-[56px] h-[56px] border border-white rounded-full flex items-center justify-center cursor-pointer'><GrNext className='text-white text-4xl'/></div>
                            </div>
                        </div>
                    </div>  
                </Swiper>
            </div>
        </div>
    )
}

export default WatchSlide