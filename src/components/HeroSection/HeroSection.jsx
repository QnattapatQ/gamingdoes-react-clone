import React from 'react'
import 'swiper/css';
import SlideShow from './SlideShow';

const HeroSection = () => {

    return (
        <div>
            <div className='absolute bg-blue-500 text-white bottom-0 left-0 right-0 top-[500px]'>
                <div className='max-w-[1332px] w-full mx-auto bg-indigo-500 h-full '>
                    <div className='grid grid-cols-[1fr_332px] gap-6 h-full'>
                        <div className='bg-purple-500 h-full'>
                            {/* <SlideShow/> */}
                        </div>
                        <div className='bg-purple-500 h-full'>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default HeroSection