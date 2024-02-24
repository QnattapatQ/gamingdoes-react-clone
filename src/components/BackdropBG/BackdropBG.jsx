import React, { useEffect, useState } from 'react'
import HeroSection from '../HeroSection/HeroSection'
import slideContent from '../../../public/slide-content'
import firstBg from '../../assets/images/banner-img-1.jpg';

const BackdropBG = ({ currentIndex }) => {

    const [firstBG, setFirstBG] = useState(false);
    const [secondBG, setSecondBG] = useState(false);
    const [thirdBG, setThirdBG] = useState(false);
    const [fourthBG, setFourtBG] = useState(false);

    useEffect(() => {
        if(currentIndex === 0){
            setFirstBG(true);
            setFourtBG(false);
            setSecondBG(false);
            setThirdBG(false);
        } else if(currentIndex === 1) {
            setSecondBG(true);
            setFirstBG(false);
            setThirdBG(false);
            setFourtBG(false);
        } else if(currentIndex === 2) {
            setThirdBG(true);
            setFirstBG(false);
            setSecondBG(false);
            setFourtBG(false);
        } else {
            setFourtBG(true);
            setFirstBG(false);
            setSecondBG(false);
            setThirdBG(false);
        }
    }, [currentIndex]);

    return (
        <div className='absolute top-0 right-0 left-0 w-full h-[150vh] z-[-10] overflow-hidden bg-black'>
           <div className={`${firstBG ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute duration-500 ease bg-blur blur-[30px] h-full overflow-hidden outline-none scale-[1.05]`}>
                <img className='w-full h-full object-cover' src={slideContent[0].img} alt="" />
           </div>
           <div className={`${secondBG ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute duration-500 ease bg-blur blur-[30px] h-full overflow-hidden outline-none scale-[1.05]`}>
                <img className='w-full h-full object-cover' src={slideContent[1].img} alt="" />
           </div>
           <div className={`${thirdBG ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute duration-500 ease bg-blur blur-[30px] h-full overflow-hidden outline-none scale-[1.05]`}>
                <img className='w-full h-full object-cover' src={slideContent[2].img} alt="" />
           </div>
           <div className={`${fourthBG ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute duration-500 ease bg-blur blur-[30px] h-full overflow-hidden outline-none scale-[1.05]`}>
                <img className='w-full h-full object-cover' src={slideContent[3].img} alt="" />
           </div>
        </div>
    ) 
}

export default BackdropBG