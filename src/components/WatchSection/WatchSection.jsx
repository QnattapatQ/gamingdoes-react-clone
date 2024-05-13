import React, { useState, useEffect } from 'react'
import ButtonTransition from '../ButtonTransition/ButtonTransition';
import WatchSlide from './WatchSlide';
import watchData from './watchData.js';
import img1 from '../../assets/images/thumb_watch01.jpg';

const WatchSection = () => {

    const [currentIndexOfImage, setCurrentIndexOfImage] = useState(0);
    const [firstBG, setFirstBG] = useState(false);
    const [secondBG, setSecondBG] = useState(false);
    const [thirdBG, setThirdBG] = useState(false);
    const [fourthBG, setFourtBG] = useState(false);
    const [fifthBG, setFifthBG] = useState(false);

    return (
        <div className='relative overflow-hidden'>
            <div className='absolute inset-0 -z-10 bg-black'>
                <div className='duration-500 ease bg-blur blur-[40px] scale-[1.05]'>
                    <img className='w-full h-full object-cover' src={watchData[currentIndexOfImage].img} alt="" />
                </div>
            </div>
            <div className='max-w-[1332px] mx-auto px-4'>
                <div className='px-[70px]'>
                    <div className='pt-16 pb-8'>
                        <div className='flex max-lg:pr-0 w-full justify-between items-center'>
                            <h2 className='font-bold text-transparent uppercase text-4xl text-white'>Watchs</h2>
                            <ButtonTransition textBtn={'Watch More'} textColor={true}/>
                        </div>
                    </div>  
                </div>               
            </div>
            <div className='w-full'>
                <WatchSlide setCurrentIndexOfImage={setCurrentIndexOfImage}/>
            </div>
        </div>
    )
}

export default WatchSection