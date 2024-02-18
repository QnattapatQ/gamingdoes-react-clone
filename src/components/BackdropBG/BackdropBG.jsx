import React from 'react'
import HeroSection from '../HeroSection/HeroSection'

const BackdropBG = () => {
    return (
        <div className='absolute top-0 right-0 left-0 w-full h-[150vh] z-[-1] overflow-hidden'>
            <div className='relative w-full h-full bg-green-600'>
                <HeroSection/>
            </div>
        </div>
    ) 
}

export default BackdropBG