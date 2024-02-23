import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import slideContent from '../../../public/slide-content'
import firstBg from '../../assets/images/banner-img-1.jpg';

const BackdropBG = ({ currentIndex }) => {
    return (
        <div className='absolute top-0 right-0 left-0 w-full h-[150vh] z-[-10] overflow-hidden'>
           <div className='bg-blur blur-[30px] h-full overflow-hidden outline-none scale-[1.05]'>
                <img className='w-full h-full object-cover duration-300' src={slideContent[currentIndex].img} alt="" />
           </div>
        </div>
    ) 
}

export default BackdropBG