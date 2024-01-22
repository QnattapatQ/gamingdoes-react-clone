import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    return (
       <div className='flex items-center justify-center mr-4'>
            <div className='relative mr-4'>
                <input className='text-sm h-10 pr-10 pl-4 w-[275px] outline-none placeholder:text-sm placeholder:uppercase placeholder:tracking-widest' type="text" placeholder='Search' />
                <button className='absolute right-0 bottom-0 top-0 w-10 h-10 flex items-center justify-center rounded-full'><IoIosSearch/></button>
            </div>
            <a className='bg-main-blue h-10 text-white text-sm uppercase flex items-center font-medium justify-center px-6 tracking-[0.4px]' href="#">Support</a>
       </div>
    )
}

export default SearchBar