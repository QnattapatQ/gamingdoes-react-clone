import React from 'react'
import { IoMdClose } from "react-icons/io";
import Logo from '../../assets/images/logo_main.svg';
import './header.css';
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa6";
import { useState, useEffect } from 'react';

const MenuMobile = ({ openMenu, setOpenMenu }) => {

    const [desktopSize, setDesktopSize] = useState({
        winWidth: window.innerWidth
    })

    const detechSize = () => {
        setDesktopSize({
            winWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detechSize);


        if(desktopSize.winWidth >= 1200){
            setOpenMenu(false);
        }

        return () => {
            window.removeEventListener('resize', detechSize);
        }

    },[desktopSize]);

    return (
        <div className={`${openMenu ? 'visible opacity-100' : 'opacity-0 invisible'} duration-300 fixed inset-0 bg-[rgba(0,0,0,0.5)]`} onClick={() => {setOpenMenu(!openMenu)}}>
            <div className='relative w-full h-full'>
                <div className={`${openMenu ? 'translate-x-[0%]' : 'translate-x-[100%] duration-300'} duration-300 bg-linear-soft-blue absolute right-0 top-0 bottom-0 w-[360px] px-10 py-20 max-md:w-full`}>
                    <div className='group/close absolute duration-300 top-6 right-6 border-2 border-white rounded-full p-1 opacity-[0.9] cursor-pointer hover:opacity-100'
                        onClick={() => {setOpenMenu(!openMenu)}}
                    >
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
                            <li><a className='menu-expand-list-2 relative uppercase text-white text-sm' href="#">About</a></li>
                            <li><a className='menu-expand-list-2 relative uppercase text-white text-sm' href="#">Advertise</a></li>
                            <li><a className='menu-expand-list-2 relative uppercase text-white text-sm' href="#">Careers</a></li>
                            <li><a className='menu-expand-list-2 relative uppercase text-white text-sm' href="#">Contact</a></li>
                        </ul>
                        <div className='mt-12'>
                            <a className='duration-200 text-gray-300 hover:text-white text-base' href="#">gene@gamingdose.com</a>
                            <div className='social-wrapper flex items-center justify-center gap-3 w-[220px] mt-6'>
                                <a className='text-white inline-block w-full' href="#"><FaFacebook className='social-option text-[30px]'/></a>
                                <a className='text-white inline-block w-full' href="#"><FaYoutube className='social-option text-[30px]'/></a>
                                <a className='text-white inline-block w-full' href="#"><FaTiktok className='social-option text-[30px]'/></a>
                                <a className='text-white inline-block w-full' href="#"><FaInstagram className='social-option text-[30px]'/></a>
                                <a className='text-white inline-block w-full' href="#"><FaTwitter className='social-option text-[30px]'/></a>
                                <a className='text-white inline-block w-full' href="#"><FaDiscord className='social-option text-[30px]'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuMobile