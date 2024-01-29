import React from 'react'
import { IoMdClose } from "react-icons/io";
import Logo from '../../assets/images/logo_main.svg';
import './header.css';
import { SocialMenu } from './SocialMenu';

const MenuMobile = () => {
    return (
        <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)] '>
            <div className='relative w-full h-full'>
                <div className='bg-linear-soft-blue absolute right-0 top-0 bottom-0 w-[360px] px-10 py-20'>
                    <div className='group/close absolute duration-300 top-6 right-6 border-2 border-white rounded-full p-1 opacity-[0.9] cursor-pointer hover:opacity-100'>
                        <IoMdClose className='group-hover/close:rotate-90 duration-300 text-white text-[30px]'/>
                    </div>
                    <div>
                        <div className='w-[120px]'>
                            <img src={Logo} alt="" />
                        </div>
                        <ul className='text-[36px] flex flex-col gap-6 mt-8 font-medium'>
                            <li><a className='menu-expand-list relative uppercase text-white' href="#">Latest</a></li>
                            <li><a className='menu-expand-list relative uppercase text-white' href="#">News</a></li>
                            <li><a className='menu-expand-list relative uppercase text-white' href="#">Read</a></li>
                            <li><a className='menu-expand-list relative uppercase text-white' href="#">Watch</a></li>
                        </ul>
                        <ul className='text-[18px] flex flex-col mt-8 font-medium'>
                            <li><a className='menu-expand-list relative uppercase text-white' href="#">About</a></li>
                            <li><a className='menu-expand-list relative uppercase text-white' href="#">Advertise</a></li>
                            <li><a className='menu-expand-list relative uppercase text-white' href="#">Careers</a></li>
                            <li><a className='menu-expand-list relative uppercase text-white' href="#">Contact</a></li>
                        </ul>
                        <div>
                            <SocialMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuMobile