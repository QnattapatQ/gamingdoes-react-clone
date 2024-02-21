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
                className='h-full'
            >
                {slideContent.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div className='w-full h-full relative'>
                            <div className='absolute bg-blue-linear inset-0 max-lg:hidden'></div>
                            <div className=''>
                                <div className='h-full'>
                                    <div className='absolute z-1 flex justify-center items-center gap-4 top-3 left-0 pl-[60px] max-2xl:pl-[40px]'>
                                        <div className='inline-block z-1'>
                                            <a className='text-[10px]' href="#">{data.tag.tag1}</a>
                                        </div>
                                        <div className='inline-block z-1'>
                                            <a className='text-[10px]' href="#">{data.tag.tag2}</a>
                                        </div>
                                    </div>
                                    <div className='absolute pt-[60px] pl-[60px] w-[58%] max-2xl:pl-[40px] max-lg:static max-lg:w-full'>
                                        <h2 className='text-[40px] font-semibold max-2xl:text-[28px]'>{data.textContent}</h2>
                                    </div>
                                </div>
                                <div className='w-full h-full'>
                                    <img className='h-full w-full object-cover' src={data.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SlideShow