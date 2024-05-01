import React from 'react'
import AdsSticky from '../AdsSticky/AdsSticky'
import ButtonBlue from '../ButtonBlue/ButtonBlue'
import NewsList from '../News/NewsList'
import { FaChevronRight } from "react-icons/fa";

const NewsVideoSection = () => {
    return (
        <div className='bg-white border-b-2'>
            <div className='max-w-[1332px] mx-auto px-4'>
                <div className='grid grid-cols-[1fr_332px] max-2xl:grid-cols-[1fr_260px] max-xl:grid-cols-[1fr_186px] max-lg:grid-cols-[1fr] pl-[70px] max-2xl:pl-10 max-xl:px-5 max-md:px-2'>
                    <div className='border-r-2 max-lg:border-r-0 py-16 max-lg:pb-0'>
                        <div className='flex items-start justify-stretch max-xl:flex-col'>
                            <div className='w-full basis-auto pr-8 max-xl:pb-6'>
                                <div className='flex w-full justify-between items-center'>
                                    <h2 className='font-bold text-transparent uppercase text-4xl bg-main-blue-linear bg-clip-text w-fit'>Read</h2>
                                    <div className='uppercase relative flex items-center justify-between group/read group-hover/chevron:w-full'>
                                        <div className=' bg-red-500 mr-10 cursor-pointer'>
                                            <h2 className='font-bold'>Read More</h2>
                                        </div>
                                        <div className='group/chevron h-[32px] w-[32px] flex items-center justify-end pr-[7px] cursor-pointer bg-main-blue rounded-full absolute right-0 duration-300 hover:w-full'>
                                            <FaChevronRight className='text-white'/>
                                        </div>
                                    </div>
                                </div>  
                                <div className='my-12'>
                                    <NewsList/>
                                </div>
                                <ButtonBlue textBtn={"READ MORE"}/>
                            </div>
                        </div>   
                    </div>
                    <AdsSticky/>
                </div>
            </div>
        </div>
    )
}

export default NewsVideoSection