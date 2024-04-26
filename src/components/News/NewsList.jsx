import React from 'react'
import newsDetails from './news.js'

const NewsList = () => {
    return (
        <div>
            <div>
                {newsDetails.map((data, index) => (
                    <div className='grid grid-cols-[230px_1fr] relative gap-6 w-full max-w-[960px] pb-6 mb-6' key={index}>
                        <div className='basis-auto relative'>
                            <a href="#">
                                <img className='w-full h-full object-cover' src={data.img} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <h2 className='text-xl font-semibold hover:text-main-blue'>{data.topicNews}</h2>
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
        </div>
    )
}

export default NewsList