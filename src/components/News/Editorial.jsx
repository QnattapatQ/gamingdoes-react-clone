import React from 'react'

const Editorial = () => {
    return (
        <div className='font-prompt bg-[#f2faff] max-xl:py-6 max-lg:-mx-14 max-lg:mr-[-68px]'>
            <div className='pt-6'>
                <h2 className='text-[22px] text-main-blue font-bold uppercase text-center'>Editorial</h2>
            </div>
            <div className='pb-6'>
                <div className='pt-6'>
                    <a className='flex hover:text-main-blue' href="#">
                        <div className='basis-[24%] text-center text-4xl font-semibold text-main-blue'>
                            1
                        </div>
                        <div className='basis-[76%] border-b-2 pb-4'>
                            <p className='line-clamp-3 pr-4 font-medium text-sm'>WatchGame : ทำไมหนังที่ดัดแปลงจากเกมจึงมักห่วย ?</p>
                        </div>
                    </a>
                </div>
                <div className='pt-6'>
                    <a className='flex hover:text-main-blue' href="#">
                        <div className='basis-[24%] text-center text-4xl font-semibold text-main-blue'>
                            2
                        </div>
                        <div className='basis-[76%] border-b-2 pb-4'>
                            <p className='line-clamp-3 pr-4 font-medium text-sm'>สรุปเนื้อเรื่องจักรวาลเกม Halo แบบสมบูรณ์</p>
                        </div>
                    </a>
                </div>
                <div className='pt-6'>
                    <a className='flex hover:text-main-blue' href="#">
                        <div className='basis-[24%] text-center text-4xl font-semibold text-main-blue'>
                            3
                        </div>
                        <div className='basis-[76%] border-b-2 pb-4'>
                            <p className='line-clamp-3 pr-4 font-medium text-sm'>อัพเดตภาพและคลิปจากกองถ่าย The Last Of Us ฉบับซีรีส์</p>
                        </div>
                    </a>
                </div>
                <div className='pt-6'>
                    <a className='flex hover:text-main-blue' href="#">
                        <div className='basis-[24%] text-center text-4xl font-semibold text-main-blue'>
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