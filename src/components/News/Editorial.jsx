import React from 'react'

const Editorial = () => {
    return (
        <div className='font-prompt bg-[#f2faff] max-xl:py-6 max-xl:pr-6'>
            <div className='pt-6'>
                <h2 className='text-[22px] text-main-blue font-bold uppercase text-center max-xl:text-start max-xl:pl-[15%] max-lg:pl-[17%]'>Editorial</h2>
            </div>
            <div className='pb-6 pl-4'>
                <div className='pt-6'>
                    <a className='flex hover:text-main-blue' href="#">
                        <div className='basis-[24%] max-xl:basis-[15%] text-center text-4xl font-semibold text-main-blue'>
                            1
                        </div>
                        <div className='basis-[76%] border-b-2 pb-4'>
                            <p className='line-clamp-3 pr-4 font-medium text-sm'>WatchGame : ทำไมหนังที่ดัดแปลงจากเกมจึงมักห่วย ?</p>
                        </div>
                    </a>
                </div>
                <div className='pt-6'>
                    <a className='flex hover:text-main-blue' href="#">
                        <div className='basis-[24%] max-xl:basis-[15%] text-center text-4xl font-semibold text-main-blue'>
                            2
                        </div>
                        <div className='basis-[76%] border-b-2 pb-4'>
                            <p className='line-clamp-3 pr-4 font-medium text-sm'>สรุปเนื้อเรื่องจักรวาลเกม Halo แบบสมบูรณ์</p>
                        </div>
                    </a>
                </div>
                <div className='pt-6'>
                    <a className='flex hover:text-main-blue' href="#">
                        <div className='basis-[24%] max-xl:basis-[15%] text-center text-4xl font-semibold text-main-blue'>
                            3
                        </div>
                        <div className='basis-[76%] border-b-2 pb-4'>
                            <p className='line-clamp-3 pr-4 font-medium text-sm'>อัพเดตภาพและคลิปจากกองถ่าย The Last Of Us ฉบับซีรีส์</p>
                        </div>
                    </a>
                </div>
                <div className='pt-6'>
                    <a className='flex hover:text-main-blue' href="#">
                        <div className='basis-[24%] max-xl:basis-[15%] text-center text-4xl font-semibold text-main-blue'>
                            4
                        </div>
                        <div className='basis-[76%]'>
                            <p className='line-clamp-3 pr-4 font-medium text-sm'>รีวิว Death Stranding Director’s Cut ส่งพัสดุกู้ประเทศสหรัฐฯ ฉบับอัปเกรดให้เกมดีกว่าเดิม</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Editorial