import React from 'react'

const ButtonBlue = ({ textBtn }) => {
    return (
        <button className='w-full h-12 max-xl:h-[45px] text-white bg-main-blue px-6 font-bold hover:bg-[#0c51d4]'>{textBtn}</button>
    )
}

export default ButtonBlue