import React from 'react'

const TagInfo = () => {
    return (
        <div className='flex items-center justify-start gap-4 mt-4'>
            <div className='text-[10px] text-main-blue text-nowrap'>
                BY <a href="#">KKMUTC</a>
            </div>
            <div className='text-[10px] text-main-blue text-nowrap'>
                <a className='uppercase' href="#">NEWS</a>
            </div>
            <div className='text-[10px] text-gray-400 uppercase text-nowrap'>
                1 Minute ago
            </div>
        </div>
    )
}

export default TagInfo