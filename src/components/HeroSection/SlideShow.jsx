import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css/bundle'

const SlideShow = () => {
    return (
        <Swiper
            speed={1000}
            slidesPerView={1}
            loop={true}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}

export default SlideShow