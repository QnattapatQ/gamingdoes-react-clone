import React from 'react'
import '../../App.css';
import { TrendingSwiper } from './TrendingSwiper';

const Trending = () => {

    return (
        <div className='bg-main-blue-linear pt-[170px] pb-[50px] -mt-[125px]'>
            <div className='max-w-[1332px] mx-auto pl-[70px] max-2xl:pl-[40px] max-xl:pl-6 flex items-center justify-start gap-4 overflow-hidden'>
                <div className='flex items-center justify-center gap-4'>
                    <div>
                        <h2 className='text-white uppercase font-bold max-2xl:text-xs'>Trending</h2>
                    </div>
                    <TrendingSwiper/>
                </div>
            </div>
        </div>
    )
}

export default Trending