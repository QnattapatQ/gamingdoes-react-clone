import React from 'react'
import '../../App.css';
import { TrendingSwiper } from './TrendingSwiper';

const Trending = () => {

    return (
        <div className='bg-main-blue-linear pt-[170px] max-lg:pt-6 pb-[50px] max-lg:pb-6 -mt-[125px] max-lg:mt-0'>
            <div className='max-w-[1332px] mx-auto px-4 pl-[70px] max-2xl:pl-[40px] max-xl:pl-6 max-lg:pl-2 flex items-center justify-start gap-4 overflow-hidden'>
                <div className='px-4'>
                    <div className='flex items-center justify-center gap-4'>
                        <div>
                            <h2 className='text-white uppercase font-bold max-2xl:text-xs'>Trending</h2>
                        </div>
                        <TrendingSwiper/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending