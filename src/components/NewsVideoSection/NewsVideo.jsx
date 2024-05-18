import React from 'react'
import { FaPlay } from "react-icons/fa";
import newsVideo from './news-video.js';
import TagInfo from '../TagInfo/TagInfo';

const NewsVideo = () => {
    return (
            <div className='my-12 max-md:mb-8'>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-[60px] max-2xl:gap-10 max-xl:gap-y-12 max-xl:gap-x-6 font-prompt'>
                    {newsVideo.map((data, index) => (
                        <div className={`${data.content !== '' ? 'col-span-2 max-lg:col-span-1' : ''}`} key={index}>
                            <div className='relative w-full'>
                                <a href='#'>
                                    <img className='w-full object-cover' src={data.img} alt="" />
                                    <div className='absolute p-4 border-white rounded-full border right-4 bottom-4 flex items-center justify-center bg-white backdrop-filter backdrop-blur-sm bg-opacity-20'>
                                        <FaPlay className='text-white'/>
                                    </div>
                                </a>
                            </div>
                            <div className={`${data.content === '' ? 'mt-4' : 'mt-6'} group/topic line-clamp-3`}>
                                <a href='#'>
                                    <h2 className={`${data.content === '' ? 'font-medium text-xl max-2xl:text-lg' : 'font-semibold text-3xl max-2xl:text-2xl'} group-hover/topic:text-main-blue`}>{data.newsTopic}</h2>
                                    <p className={`${data.content === '' ? 'hidden' : 'block'} mt-2`}>{data.content}</p>
                                </a>
                            </div>
                            <TagInfo/>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default NewsVideo