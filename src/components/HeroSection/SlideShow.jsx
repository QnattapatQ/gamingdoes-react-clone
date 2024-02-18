// Import Swiper React components
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'

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
                <SwiperSlide className='bg-green-500'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-green-400'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-green-300'>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-green-200'>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SlideShow