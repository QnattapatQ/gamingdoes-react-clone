// Import Swiper React components
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'
import slideContent from '../../../public/slide-content';
import SwiperNavButton from './SwiperNavButton';
import { useEffect, useState } from 'react';


const SlideShow = ({ getIndex }) => {

    const [curentIndexOfSlide, setCurrentIndexOfSlide] = useState(0); // State รับค่า Index จาก Slide ปัจจุบัน

    const handleSlideChange = (swiper) => {  // function สำหรับรับต่า index ของ slide ปัจจุบัน
        setCurrentIndexOfSlide(swiper.realIndex)
    }

    useEffect(() => {
        getIndex(curentIndexOfSlide)
    },[curentIndexOfSlide]);

    return (
        <div className='h-full relative bg-black max-lg:bg-transparent'>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                }}
                pagination={{
                    clickable: true,
                }}
                speed={500}
                onSlideChange={handleSlideChange}
                className='mySwiper h-full w-full relative'

            >
                {slideContent.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div className='w-full h-full relative'>
                            <div className='absolute z-[5] flex justify-center items-center gap-4 top-8 max-xl:top-6 left-0 pl-[60px] max-2xl:pl-[40px] max-xl:pl-[24px] max-lg:static max-lg:justify-start max-lg:pl-4 max-lg:pt-6'>
                                <div className='inline-block z-1 text-[10px]'>
                                    <a className='text-[10px]' href="#">{data.tag.tag1}</a>
                                </div>
                                <div className='inline-block z-1 text-[10px]'>
                                    BY <a className='text-[10px]' href="#">{data.tag.tag2}</a>
                                </div>
                            </div>
                            <a href="#">
                                <div className='w-full h-full relative'>
                                    <div className='absolute bg-blue-linear inset-0 max-lg:hidden'></div>
                                    <div className='h-full max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:gap-4'>
                                        <div className='max-md:-mb-[8%]'>
                                            <div className='absolute pt-[60px] w-[58%] pl-[60px] max-2xl:pl-[40px] max-xl:w-[68%] max-xl:pt-[48px] max-xl:pl-[24px] max-lg:static max-lg:w-full max-lg:pl-4 max-lg:pt-4 max-lg:pr-4'>
                                                <h2 className='text-[40px] font-medium max-2xl:text-[28px] txt-mitr leading-[1.4] max-lg:text-[26px]'>{data.textContent}</h2>
                                            </div>
                                        </div>
                                        <div className='h-full max-lg:h-auto'>
                                            <img className='h-full w-full object-cover' src={data.img} alt="" />
                                        </div>
                                    </div>
                                </div>  
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperNavButton currentIndex={curentIndexOfSlide}/>
            </Swiper>
        </div>
    )
}

export default SlideShow