import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const ButtonTransition = ({ textBtn, textColor }) => {
    return (
        <a href='#' className='uppercase group/chevron relative flex items-center justify-between'>
            <div className='mr-10 pl-3 cursor-pointer z-10'>
                <h2 className={`${textColor ? 'text-white' : ''} font-bold group-hover/chevron:text-white duration-200 uppercase`}>{textBtn}</h2>
            </div>
            <div className='group-hover/chevron:w-full h-[32px] w-[32px] flex items-center justify-end pr-[7px] cursor-pointer bg-main-blue rounded-full absolute right-0 duration-200 '>
                <FaChevronRight className='text-white'/>
            </div>
        </a>
    )
}

export default ButtonTransition