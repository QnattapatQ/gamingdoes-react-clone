// Import Swiper React components
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'
import slideContent from '../../../public/slide-content';


const SlideShow = () => {
    return (
        <div className='h-full'>
            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                }}
                speed={500}
                navigation={true}
                className='h-full w-full relative'
            >
                {slideContent.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div className='w-full h-full relative bg-red-500'>
                            <div className='absolute bg-blue-linear inset-0 max-lg:hidden'></div>
                            <div className='h-full max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:gap-4'>
                                <div className='max-lg:h-full'>
                                    <div className='absolute z-1 flex justify-center items-center gap-4 top-5 left-0 pl-[60px] max-2xl:pl-[40px] max-xl:pl-[24px] max-lg:static max-lg:justify-start max-lg:pl-4 max-lg:pt-6'>
                                        <div className='inline-block z-1'>
                                            <a className='text-[10px]' href="#">{data.tag.tag1}</a>
                                        </div>
                                        <div className='inline-block z-1'>
                                            <a className='text-[10px]' href="#">{data.tag.tag2}</a>
                                        </div>
                                    </div>
                                    <div className='absolute pt-[60px] w-[58%] pl-[60px] max-2xl:pl-[40px] max-xl:w-[68%] max-xl:pt-[48px] max-xl:pl-[24px] max-lg:static max-lg:w-full max-lg:pl-4 max-lg:pt-4'>
                                        <h2 className='text-[40px] font-medium max-2xl:text-[28px] txt-mitr leading-[1.4] max-lg:text-[26px]'>{data.textContent}</h2>
                                    </div>
                                </div>
                                <div className='h-full'>
                                    <img className='h-full w-full object-cover' src={data.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* <div className='absolute right-0 top-1/2 w-full h-full'>
                    <div class="swiper-button-prev" ></div>
                    <div class="swiper-button-next"></div>
                </div> */}
            </Swiper>
        </div>
    )
}

export default SlideShow