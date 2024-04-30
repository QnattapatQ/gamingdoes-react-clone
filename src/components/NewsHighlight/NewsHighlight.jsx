import React from 'react'
import imgHighlight from '../../assets/images/banner-img-4.jpg'

const NewsHighlight = () => {
    return (
        <div className='h-[100vh] relative font-prompt'>
            <div className='w-full h-full'>
                <img className='w-full h-full object-cover' src={imgHighlight} alt="" />
            </div>
            <div className='absolute bottom-0 right-0 w-full py-10 backdrop-filter backdrop-blur-lg bg-opacity-30'>
                <div className='max-w-[1332px] mx-auto text-white px-[70px] relative'>
                    <div className='text-white font-medium absolute text-lg -top-[56px] bg-main-blue px-4 py-1'>
                        9.7
                        <div className='relative'>
                            <div className='bg-main-blue w-[30px] h-[25px] absolute skew-x-[40deg] -top-[33px] -left-[13px] -z-10'>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='max-w-[580px] w-full font-semibold text-3xl'>แนะนำ Trombone Champ เกมดนตรีฮา ๆ แสดงจิตวิญญาณ ผ่านเสียงทรอมโบนสุดปั่น</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsHighlight