import React from 'react'
import 'swiper/css';
import SlideShow from './SlideShow';

const HeroSection = () => {
    return (
        <div className='bg-orange-500'>
            <div className='absolute text-white bottom-0 left-0 right-0 top-[500px]'>
                <div className='max-w-[1332px] w-full mx-auto h-full '>
                    <div className='grid grid-cols-[1fr_300px] gap-8 h-full'>
                        <div className='bg-purple-500 h-full overflow-hidden'>
                            <SlideShow/>
                        </div>
                        <div className='border-solid border-[0.5px] border-gray-400 bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-30 h-full p-[4.668%] flex flex-col gap-4'>
                            <div>
                                <a href="#">
                                    <img src="https://spicy-dev.com/preview/1dd/gamingdose/assets/images/ads_side01.jpg" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="https://spicy-dev.com/preview/1dd/gamingdose/assets/images/ads_side02.jpg" alt="" />
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