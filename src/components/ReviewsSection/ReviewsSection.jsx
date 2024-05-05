import React from 'react'
import AdsSticky from '../AdsSticky/AdsSticky'
import ButtonBlue from '../ButtonBlue/ButtonBlue'
import ButtonTransition from '../ButtonTransition/ButtonTransition';
import ReviewContent from './ReviewContent';


const ReviewsSection = () => {
    return (
        <div className='bg-white border-b-2'>
            <div className='max-w-[1332px] mx-auto px-4'>
                <div className='grid grid-cols-[1fr_332px] max-2xl:grid-cols-[1fr_260px] max-xl:grid-cols-[1fr_186px] max-lg:grid-cols-[1fr] pl-[70px] max-2xl:pl-10 max-xl:px-5 max-md:px-2'>
                    <div className='border-r-2 max-lg:border-r-0 py-16 max-lg:pb-0'>
                        <div className='flex items-start justify-stretch max-xl:flex-col'>
                            <div className='w-full basis-auto max-lg:pr-0 max-xl:pb-6'>
                                <div className='flex pr-8 w-full justify-between items-center'>
                                    <h2 className='font-bold text-transparent uppercase text-4xl bg-main-blue-linear bg-clip-text'>Reviews</h2>
                                    <ButtonTransition textBtn={'Read More'}/>
                                </div>
                                <div className='flex my-12'>
                                    <div className='bg-green-500'>
                                        <div className='bg-[#F2FAFF] py-6'>
                                            <div>
                                                <h2 className='uppercase px-6 font-semibold text-lg first:text-[#121D76] text-nowrap'>Top Chart</h2>
                                            </div>
                                            <div>
                                                <div className='px-6'>
                                                    <a href="#">
                                                        <div className='pr-6 text-nowrap'>
                                                            <p>Overwatch 2</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>  
                                    <div className='px-8'>
                                        <ReviewContent/>
                                        <ButtonBlue textBtn={"READ MORE"}/>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <AdsSticky/>
                </div>
            </div>
        </div>
    )
}

export default ReviewsSection