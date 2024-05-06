import React from 'react'
import { FaPlay } from "react-icons/fa";
import newsVideo from '../NewsVideoSection/news-video';
import TagInfo from '../TagInfo/TagInfo';
import ButtonBlue from '../ButtonBlue/ButtonBlue'
import imgReviews from '../../assets/images/thumb_review.jpg'

const ReviewContent = () => {
    return (
        <div className='font-prompt'>
            <div>
                <div>
                    <img src={imgReviews} alt="" />
                </div>
                <div>
                    <h2 className='text-[28px] font-semibold w-[90%]'>พรีวิว Honkai: Star Rail (CBT2) การผจญภัยครั้งแรกของผู้บุกเบิกโดยมีมนุษยชาติเป็นเดิมพัน</h2>
                </div>
            </div>
        </div>
        // <div className='mb-12 grid grid-cols-2 max-lg:grid-cols-1 gap-[60px] max-2xl:gap-10 max-xl:gap-y-12 max-xl:gap-x-6 font-prompt'>
        //     {newsVideo.map((data, index) => (
        //         <div className={`${data.content !== '' ? 'col-span-2 max-lg:col-span-1' : ''}`} key={index}>
        //             <div className='relative w-full'>
        //                 <a href='#'>
        //                     <img className='w-full object-cover' src={data.img} alt="" />
        //                 </a>
        //             </div>
        //             <div className={`${data.content === '' ? 'mt-4' : 'mt-6'} group/topic line-clamp-3`}>
        //                 <a href='#'>
        //                     <h2 className={`${data.content === '' ? 'font-medium text-xl max-2xl:text-lg' : 'font-semibold text-3xl max-2xl:text-2xl'} group-hover/topic:text-main-blue`}>{data.newsTopic}</h2>
        //                     <p className={`${data.content === '' ? 'hidden' : 'block'} mt-2`}>{data.content}</p>
        //                 </a>
        //             </div>
        //             <TagInfo/>
        //         </div>
        //     ))}
        // </div>
    )
}

export default ReviewContent