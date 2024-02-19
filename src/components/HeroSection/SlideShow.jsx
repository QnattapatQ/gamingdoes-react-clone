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
        <div className='h-full z-[20]'>
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
                            <div className='absolute bg-blue-linear inset-0'></div>
                            <div className='absolute pt-[60px] pl-[60px] w-[58%]'>
                                <h2 className='text-[40px] font-semibold'>{data.textContent}</h2>
                            </div>
                            <img className='h-full w-full' src={data.img} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SlideShow