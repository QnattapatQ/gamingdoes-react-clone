import React from 'react'
import AdsSticky from '../AdsSticky/AdsSticky'
import ButtonBlue from '../ButtonBlue/ButtonBlue'
import ButtonTransition from '../ButtonTransition/ButtonTransition';
import ReviewContent from './ReviewContent';


const ReviewsSection = () => {

    const gameName = ['Overwatch 2', 'Hoyoverse', 'God of War', 'Activision Blizzard', 'Titanfall 2', 'Trombone Champ']

    return (
        <div className='bg-white border-b-2'>
            <div className='max-w-[1332px] mx-auto px-4'>
                <div className='grid grid-cols-[1fr_332px] max-2xl:grid-cols-[1fr_260px] max-xl:grid-cols-[1fr_186px] max-lg:grid-cols-[1fr] pl-[70px] max-2xl:pl-10 max-xl:px-5 max-md:px-2'>
                    <div className='border-r-2 max-lg:border-r-0 pt-16 max-lg:pb-0 max-md:pt-10'>
                        <div className='flex items-start justify-stretch max-xl:flex-col'>
                            <div className='w-full basis-auto max-lg:pr-0 max-xl:pb-6 max-lg:pb-0'>
                                <div className='flex pr-8 max-lg:pr-0 w-full justify-between items-center'>
                                    <h2 className='font-bold text-transparent uppercase text-4xl bg-main-blue-linear bg-clip-text max-md:text-3xl'>Reviews</h2>
                                    <ButtonTransition textBtn={'Read More'}/>
                                </div>
                                <div className='flex my-12 basis-auto max-xl:flex-col-reverse max-lg:mb-0'>
                                    <div className='max-w-[25%] max-xl:max-w-[100%] w-full basis-auto max-2xl:max-w-full max-xl:py-6 max-xl:mt-12 max-2xl:pr-6 max-lg:pr-0 max-md:mt-6'>
                                        <div className='bg-[#F2FAFF] py-6 relative max-lg:-mx-[auto]'>
                                            <div>
                                                <h2 className='uppercase px-6 font-bold text-lg first:text-[#121D76] text-nowrap line-clamp-1'>Top Chart</h2>
                                            </div>
                                            <div className='px-6'>
                                                {gameName.map((data, index) => (
                                                    <div className={`${index + 1 !== gameName.length ? 'border-b py-4' : 'pt-4'} relative z-[1]`} key={index}>
                                                        <a href="#" className='group/textblue'>
                                                            <div className='flex justify-between items-center gap-6 relative'>
                                                                <div className='line-clamp-1'>
                                                                    <p className='font-bold uppercase text-sm group-hover/textblue:text-main-blue'>{data}</p>
                                                                </div>
                                                                <div className='text-white font-medium text-xs bg-main-blue px-2 py-1'>
                                                                    9.7
                                                                    <div className='relative'>
                                                                        <div className='bg-main-blue w-[8px] h-[8px] absolute skew-x-[40deg] -top-[20px] -left-[10px] z-[-2]'>
                                                                                
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>  
                                    </div>  
                                    <div className='px-8 max-2xl:px-0 max-2xl:pr-6 max-lg:pr-0'>
                                        <ReviewContent/>
                                        <ButtonBlue textBtn={"More Reviews"}/>
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