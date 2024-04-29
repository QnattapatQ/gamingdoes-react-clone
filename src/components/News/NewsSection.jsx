import React from 'react'
import NewsList from './NewsList'
import Editorial from './Editorial'
import adsImg01 from '../../assets/images/ads_header01.jpg'
import adsImg02 from '../../assets/images/ads_img-02.jpg'

const NewsSection = () => {
    return (
        <div className='bg-white border-b-2'>
            <div className='max-w-[1332px] mx-auto px-4'>
                <div className='grid grid-cols-[1fr_332px] max-2xl:grid-cols-[1fr_260px] max-xl:grid-cols-[1fr_186px] max-lg:grid-cols-[1fr] pl-[70px] max-2xl:pl-10 max-xl:px-5'>
                    <div className='border-r-2 max-lg:border-r-0 py-16 max-lg:pb-0'>
                        <div className='flex items-start justify-stretch max-xl:flex-col'>
                            <div className='w-[75%] max-xl:w-[100%] basis-auto pr-8'>
                                <div className=''>
                                    <h2 className='font-bold text-transparent uppercase text-4xl bg-main-blue-linear bg-clip-text w-fit'>NEWS</h2>
                                </div>  
                                <div className='my-12'>
                                    <NewsList/>
                                </div>
                            </div>
                            <div className='w-[25%] max-xl:w-[100%] basis-auto bg-red-500 py-6'>
                                <Editorial/>
                            </div>
                        </div>   
                    </div>
                    <div>
                        <div className='h-full relative py-16 pl-8 pr-[70px] max-2xl:pl-5 max-2xl:pr-10 max-lg:hidden'>
                            <a href="#" className='sticky top-[100px] max-w-[220px] w-full'>
                                <img className='' src={adsImg01} alt="" />
                            </a>
                        </div>
                        <div className='px-5 py-6 max-lg:block max-xl:hidden'>
                            <a href="#">
                                <img className='' src={adsImg02} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSection