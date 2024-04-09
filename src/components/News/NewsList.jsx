import React from 'react'

const NewsList = () => {
    return (
        <div>
            <div>
                <div className='flex justify-start items-start relative gap-6 w-full max-w-[960px] pb-6 mb-6'>
                    <div className='basis-auto'>
                        <a href="#">
                            <img src="https://spicy-dev.com/preview/1dd/gamingdose/assets/images/thumb_news01.jpg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <h2 className='text-xl font-semibold hover:text-main-blue'>Overwatch 2 เตรียมเปิดให้เล่นแบบ Free-to-play ในวันที่ 5 ตุลาคมนี้ เวลา 02:00 น.</h2>
                        </a>
                        <div className='flex items-center justify-start gap-4 mt-4'>
                            <div className='text-[10px] text-main-blue'>
                                BY <a href="#">KMUTT</a>
                            </div>
                            <div className='text-[10px] text-main-blue'>
                                <a href="#">NEWS</a>
                            </div>
                            <div className='text-[10px] text-gray-400'>
                                1 MINUTE AGO
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsList