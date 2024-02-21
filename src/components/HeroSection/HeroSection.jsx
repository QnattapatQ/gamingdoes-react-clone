import React from 'react'
import 'swiper/css';
import SlideShow from './SlideShow';
import ResponsiveSize from '../../../public/ResponsiveSize';

const HeroSection = () => {
    return (
        <div className='relative'>
            <div className='block text-white h-full px-4 pt-[120px] max-xl:pt-[100px] max-lg:px-0'>
                <div className='max-w-[1332px] w-full mx-auto'>
                    <div className='grid grid-cols-[1fr_300px] gap-8 h-full max-2xl:grid-cols-[1fr_260px] max-2xl:gap-5 max-xl:grid-cols-[1fr_186px] max-xl:gap-3 max-lg:grid-cols-[1fr] max-lg:gap-0'>
                        <div className='h-full overflow-hidden'>
                            <SlideShow/>
                        </div>
                        <div className='border-solid border-[0.5px] border-gray-400 bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-30 h-full p-[4.668%] flex flex-col gap-4 max-lg:flex-row max-lg:p-4'>
                            <div className='h-full'>
                                <a href="#">
                                    <img className='h-full object-cover' src="https://spicy-dev.com/preview/1dd/gamingdose/assets/images/ads_side01.jpg" alt="" />
                                </a>
                            </div>
                            <div className='h-full'>
                                <a href="#">
                                    <img className='h-full object-cover' src="https://spicy-dev.com/preview/1dd/gamingdose/assets/images/ads_side02.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default HeroSection