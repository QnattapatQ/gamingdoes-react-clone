import React from 'react'
import AdsSticky from '../AdsSticky/AdsSticky'
import ButtonBlue from '../ButtonBlue/ButtonBlue'
import NewsList from '../News/NewsList'
import ButtonTransition from '../ButtonTransition/ButtonTransition';
import img1 from '../../assets/images/thumb_read01.jpg';
import { FaPlay } from "react-icons/fa";
import TagInfo from '../TagInfo/TagInfo';

const NewsVideoSection = () => {
    return (
        <div className='bg-white border-b-2'>
            <div className='max-w-[1332px] mx-auto px-4'>
                <div className='grid grid-cols-[1fr_332px] max-2xl:grid-cols-[1fr_260px] max-xl:grid-cols-[1fr_186px] max-lg:grid-cols-[1fr] pl-[70px] max-2xl:pl-10 max-xl:px-5 max-md:px-2'>
                    <div className='border-r-2 max-lg:border-r-0 py-16 max-lg:pb-0'>
                        <div className='flex items-start justify-stretch max-xl:flex-col'>
                            <div className='w-full basis-auto pr-8 max-xl:pb-6'>
                                <div className='flex w-full justify-between items-center'>
                                    <h2 className='font-bold text-transparent uppercase text-4xl bg-main-blue-linear bg-clip-text'>Read</h2>
                                    <ButtonTransition textBtn={'Read More'}/>
                                </div>  
                                <div className='my-12'>
                                    <div className='grid grid-cols-2 gap-[60px] font-prompt'>
                                        <div className='col-span-2'>
                                            <div className='relative w-full'>
                                                <img src={img1} alt="" />
                                                <div className='absolute p-4 border-white rounded-full border right-5 bottom-5 flex items-center justify-center bg-white backdrop-filter backdrop-blur-sm bg-opacity-20'>
                                                    <FaPlay className='text-white'/>
                                                </div>
                                            </div>
                                            <div className='mt-6'>
                                                <h2 className='font-semibold text-3xl'>30 เซ็ตติ้งและธีมยอดนิยมในวิดีโอเกมส์</h2>
                                                <p className='mt-2'>ฉากหลังหรือ Setting จัดเป็นอีกหนึ่งหัวใจหลักของวิดีโอเกม เป็นแกนหลักในการเล่าเรื่องราว เป็นหัวใจสำคัญในการสร้างความน่าติดตาม ให้กับผู้เล่นที่ได้สัมผัส ซึ่งตัวฉากหลังนั้นก็มีหลากหลายแนวมีหลายรูปรวมไปถึงถูกนำมาผสมหรือดัดแปลงปรับเปลี่ยนเพื่อสร้างสรรค์ออกมา เป็นสุดยอดผลงานเกมที่เราได้เล่นกันซึ่งฉากหลังที่มีในวิดีโอเกมก็มีหลายรูปแบบหลายแนว ซึ่งจะรวมมาทั้งหมดก็อาจจะไม่ไหว</p>
                                            </div>
                                            <TagInfo/>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={img1} alt="" />
                                            </div>
                                            <div className='mt-4'>
                                                <h2 className='font-medium text-xl'>นักพัฒนาเกมบน Stadia ต่างก็ “ช็อค” กับข่าวปิด ตัวกะทันหัน เพราะ Google ไม่ได้แจ้งค่าย เกมไว้ล่วงหน้า</h2>
                                                <TagInfo/>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={img1} alt="" />
                                            </div>
                                            <div className='mt-4'>
                                                <h2 className='font-medium text-xl'>นักพัฒนาเกมบน Stadia ต่างก็ “ช็อค” กับข่าวปิด ตัวกะทันหัน เพราะ Google ไม่ได้แจ้งค่าย เกมไว้ล่วงหน้า</h2>
                                                <TagInfo/>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={img1} alt="" />
                                            </div>
                                            <div className='mt-4'>
                                                <h2 className='font-medium text-xl'>นักพัฒนาเกมบน Stadia ต่างก็ “ช็อค” กับข่าวปิด ตัวกะทันหัน เพราะ Google ไม่ได้แจ้งค่าย เกมไว้ล่วงหน้า</h2>
                                                <TagInfo/>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={img1} alt="" />
                                            </div>
                                            <div className='mt-4'>
                                                <h2 className='font-medium text-xl'>นักพัฒนาเกมบน Stadia ต่างก็ “ช็อค” กับข่าวปิด ตัวกะทันหัน เพราะ Google ไม่ได้แจ้งค่าย เกมไว้ล่วงหน้า</h2>
                                                <TagInfo/>
                                            </div>
                                        </div>
                                    </div>
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