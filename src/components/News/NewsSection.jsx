import React from 'react'
import NewsList from './NewsList'

const NewsSection = () => {
    return (
        <div className='bg-white border-b-2'>
            <div className='max-w-[1332px] mx-auto'>
                <div className='grid grid-cols-[1fr_332px] px-[70px] max-2xl:px-10'>
                    <div className='border-r-2 py-16'>
                        <div className='flex items-start justify-stretch'>
                            <div className='w-[75%] basis-auto mr-8'>
                                <div className=''>
                                    <h2 className='font-bold text-transparent uppercase text-4xl bg-main-blue-linear bg-clip-text w-fit'>NEWS</h2>
                                </div>  
                                <div className='my-12'>
                                    <NewsList/>
                                </div>
                            </div>
                            <div className='w-[25%] basis-auto'>
                                asdasdasdasdasd
                            </div>
                        </div>   
                    </div>
                    <div className='py-16 bg-red-300'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSection