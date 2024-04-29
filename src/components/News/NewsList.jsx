import React from 'react'
import newsDetails from './news.js'

const NewsList = () => {
    return (
            <div>
                {newsDetails.map((data, index) => (
                    <div className='grid grid-cols-[auto_auto] relative gap-6 w-full max-w-[960px] pb-6 mb-6' key={index}>
                        <div className='basis-auto relative'>
                            <a href="#">
                                <img className='w-full object-cover' src={data.img} alt="" />
                            </a>
                        </div>
                        <div className='flex flex-col h-full justify-between'>
                            <a href="#">
                                <h2 className='text-xl max-2xl:text-lg font-semibold hover:text-main-blue line-clamp-3'>{data.topicNews}</h2>
                            </a>
                            <div className='flex items-center justify-start gap-4 mt-4'>
                                <div className='text-[10px] text-main-blue'>
                                    BY <a href="#">{data.ref}</a>
                                </div>
                                <div className='text-[10px] text-main-blue'>
                                    <a className='uppercase' href="#">{data.tag}</a>
                                </div>
                                <div className='text-[10px] text-gray-400 uppercase'>
                                    {data.time}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default NewsList