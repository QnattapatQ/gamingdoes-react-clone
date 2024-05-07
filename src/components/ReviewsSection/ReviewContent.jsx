import React from 'react'
import { FaPlay } from "react-icons/fa";
import newsVideo from '../NewsVideoSection/news-video';
import TagInfo from '../TagInfo/TagInfo';
import ButtonBlue from '../ButtonBlue/ButtonBlue'
import imgReviews from '../../assets/images/thumb_review.jpg'
import newsDetails from '../News/news';

const ReviewContent = () => {
    return (
        <div className='font-prompt'>
            <div>
                <div>
                    <img src={imgReviews} alt="" />
                </div>
                <div className='mt-6 mb-6 pb-10'>
                    <a href="#" className='group/textblue'>
                        <div>
                            <div className='flex justify-between items-start w-full'>
                                <h2 className='text-[28px] max-2xl:text-[22px] font-semibold w-[80%] group-hover/textblue:text-main-blue'>พรีวิว Honkai: Star Rail (CBT2) การผจญภัยครั้งแรกของผู้บุกเบิกโดยมีมนุษยชาติเป็นเดิมพัน</h2>
                                <div className='text-white font-medium text-xs bg-main-blue px-2 py-1'>
                                    9.7
                                    <div className='relative'>
                                        <div className='bg-main-blue w-[8px] h-[8px] absolute skew-x-[40deg] -top-[20px] -left-[10px]'>
                                                                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-sm mt-2'>
                                    Honkai: Star Rail เป็นผลงานเกมกาชาล่าสุดของ HoYoverse ซึ่งเป็นเกมแรกของค่ายที่ สร้างแนว RPG Tactical ผลัดเทิร์น 
                                    แล้วเนื่องจากเนื้อหาเกมมีส่วนเกี่ยวข้องกับจักรวาล Honkai Impact 3rd รวมถึงพัฒนาโดยทีมผู้สร้างเดียวกับ 
                                    Genshin Impact ก็ทำให้เกมนี้ได้รับความ สนใจจากชาวเกมเมอร์หลายคน
                                </p>
                            </div>
                        </div>
                    </a>
                    <TagInfo/>
                </div>
                <div className=''>
                    {newsDetails.map((data, index) => (
                        <div className={`${ index + 1 === newsDetails.length ? 'border-b-0' : 'border-b-2'} grid grid-cols-[auto_auto] max-2xl:grid-cols-[180px_auto] max-lg:grid-cols-[200px_auto] border-dashed relative gap-6 w-full max-w-[960px] pb-6 mb-6`} key={index}>
                            <div className='basis-auto relative'>
                                <a href="#">
                                    <img className='w-full object-cover' src={data.img} alt="" />
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
            </div>
        </div>
    )
}

export default ReviewContent