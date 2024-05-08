import React from 'react'
import newsDetails from './news.js'

const NewsList = () => {
    return (
            <div className=''>
                {newsDetails.map((data, index) => (
                    <div className={`${ index + 1 === newsDetails.length ? 'border-b-0' : 'border-b-2'} grid grid-cols-[auto_auto] border-dashed relative gap-6 w-full max-w-[960px] pb-6 mb-6`} key={index}>
                        <div className='basis-auto relative'>
                            <a href="#">
                                <img className='w-full h-full object-cover' src={data.img} alt="" />
                            </a>
                        </div>
                        <div className='flex flex-col h-full justify-between font-prompt'>
                            <a href="#">
                                <h2 className='text-xl max-2xl:text-lg font-semibold hover:text-main-blue line-clamp-3'>{data.topicNews}</h2>
                            </a>
                            <div className='flex items-center justify-start gap-4 mt-4'>
                                <div className='text-[10px] text-main-blue text-nowrap'>
                                    BY <a href="#">{data.ref}</a>
                                </div>
                                <div className='text-[10px] text-main-blue text-nowrap'>
                                    <a className='uppercase' href="#">{data.tag}</a>
                                </div>
                                <div className='text-[10px] text-gray-400 uppercase text-nowrap'>
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