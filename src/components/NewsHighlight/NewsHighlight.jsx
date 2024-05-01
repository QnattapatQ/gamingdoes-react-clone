import React from 'react'
import imgHighlight from '../../assets/images/banner-img-4.jpg'

const NewsHighlight = () => {
    return (
        <div className='h-[100vh] max-xl:h-[75vh] max-lg:h-[80vh] relative font-prompt'>
            <div className='w-full h-full'>
                <img className='w-full h-full object-cover' src={imgHighlight} alt="" />
            </div>
            <div className='absolute bottom-0 right-0 w-full py-10 backdrop-filter backdrop-blur-lg bg-opacity-30'>
                <div className='max-w-[1332px] mx-auto text-white px-[70px] max-2xl:px-10 max-xl:px-6 max-lg:px-4 relative'>
                    <div className='text-white font-medium absolute text-lg -top-[56px] bg-main-blue px-4 py-1'>
                        9.7
                        <div className='relative'>
                            <div className='bg-main-blue w-[30px] h-[25px] absolute skew-x-[40deg] -top-[33px] -left-[13px] -z-10'>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='max-w-[580px] w-full font-semibold text-3xl max-2xl:text-[22px]'>แนะนำ Trombone Champ เกมดนตรีฮา ๆ แสดงจิตวิญญาณ ผ่านเสียงทรอมโบนสุดปั่น</h2>
                    </div>
                    <div className='flex gap-4 mt-6 text-[10px]'>
                        <div>
                            BY
                            <a className='' href="#">KKMTC</a>
                        </div>
                        <div>
                            <span>SEP 28, 2022 AT 6:49 AM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsHighlight