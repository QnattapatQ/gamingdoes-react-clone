import React from 'react'
import NewsList from './NewsList'
import Editorial from './Editorial'
import AdsSticky from '../AdsSticky/AdsSticky'
import ButtonBlue from '../ButtonBlue/ButtonBlue'

const NewsSection = () => {
    return (
        <div className='bg-white border-b-2'>
            <div className='max-w-[1332px] mx-auto px-4'>
                <div className='grid grid-cols-[1fr_332px] max-2xl:grid-cols-[1fr_260px] max-xl:grid-cols-[1fr_186px] max-lg:grid-cols-[1fr] pl-[70px] max-2xl:pl-10 max-xl:px-5 max-md:px-2'>
                    <div className='border-r-2 max-lg:border-r-0 py-16 max-lg:pb-0'>
                        <div className='flex items-start justify-stretch max-xl:flex-col'>
                            <div className='w-[75%] max-xl:w-[100%] basis-auto pr-8 max-xl:pb-6'>
                                <div className=''>
                                    <h2 className='font-bold text-transparent uppercase text-4xl bg-main-blue-linear bg-clip-text w-fit'>NEWS</h2>
                                </div>  
                                <div className='my-12'>
                                    <NewsList/>
                                </div>
                                <ButtonBlue textBtn={"READ MORE"}/>
                            </div>
                            <div className='w-[25%] max-xl:w-[100%] basis-auto max-xl:pr-8 '>
                                <Editorial/>
                            </div>
                        </div>   
                    </div>
                    <AdsSticky/>
                </div>
            </div>
        </div>
    )
}

export default NewsSection