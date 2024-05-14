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

    useEffect(() => {
        if(currentIndexOfImage === 0 || currentIndexOfImage === 5){
            setFirstBG(true);
            setFourtBG(false);
            setSecondBG(false);
            setThirdBG(false);
            setFifthBG(false);
        } else if(currentIndexOfImage === 1 || currentIndexOfImage === 6) {
            setSecondBG(true);
            setFirstBG(false);
            setThirdBG(false);
            setFourtBG(false);
            setFifthBG(false);
        } else if(currentIndexOfImage === 2 || currentIndexOfImage === 7) {
            setThirdBG(true);
            setFirstBG(false);
            setSecondBG(false);
            setFourtBG(false);
            setFifthBG(false);
        } else if (currentIndexOfImage === 3 || currentIndexOfImage === 8) {
            setFourtBG(true);
            setFirstBG(false);
            setSecondBG(false);
            setThirdBG(false);
            setFifthBG(false);
        } else if (currentIndexOfImage === 4 || currentIndexOfImage === 9) {
            setFifthBG(true);
            setFourtBG(false);
            setFirstBG(false);
            setSecondBG(false);
            setThirdBG(false);
        }
        // console.log(currentIndexOfImage)
    }, [currentIndexOfImage]);

    return (
        <div className='relative overflow-hidden pt-16 pb-8'>
            <div className='absolute inset-0 w-full -z-10 bg-black flex'>
                <div className={`${firstBG ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute h-full w-full duration-500 ease bg-blur scale-[1.05] bg-blur blur-[35px]`}>
                    <img className='w-full h-full object-cover' src={watchData[0].img} alt="" />
                </div>
                <div className={`${secondBG ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute h-full w-full duration-500 ease bg-blur scale-[1.05] bg-blur blur-[35px]`}>
                    <img className='w-full h-full object-cover' src={watchData[1].img} alt="" />
                </div>
                <div className={`${thirdBG ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute h-full w-full duration-500 ease bg-blur scale-[1.05] bg-blur blur-[35px]`}>
                    <img className='w-full h-full object-cover' src={watchData[2].img} alt="" />
                </div>
                <div className={`${fourthBG ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute h-full w-full duration-500 ease bg-blur scale-[1.05] bg-blur blur-[35px]`}>
                    <img className='w-full h-full object-cover' src={watchData[3].img} alt="" />
                </div>
                <div className={`${fifthBG ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute h-full w-full duration-500 ease bg-blur scale-[1.05] bg-blur blur-[35px]`}>
                    <img className='w-full h-full object-cover' src={watchData[4].img} alt="" />
                </div>
            </div>
            <div className='max-w-[1332px] mx-auto px-4'>
                <div className='px-[70px]'>
                    <div>
                        <div className='flex max-lg:pr-0 w-full justify-between items-center'>
                            <h2 className='font-bold text-transparent uppercase text-4xl text-white'>Watch</h2>
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