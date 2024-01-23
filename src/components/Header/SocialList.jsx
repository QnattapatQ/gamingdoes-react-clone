import React, { useState } from 'react'
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa6";
import './header.css';
import { RxHamburgerMenu } from "react-icons/rx";
import MenuMobile from './MenuMobile';

const SocialList = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <div className='social-wrapper flex items-center justify-center gap-3 max-2xl:hidden'>
                <a className='text-white inline-block w-full' href="#"><FaFacebook className='social-option'/></a>
                <a className='text-white inline-block w-full' href="#"><FaYoutube className='social-option'/></a>
                <a className='text-white inline-block w-full' href="#"><FaTiktok className='social-option'/></a>
                <a className='text-white inline-block w-full' href="#"><FaInstagram className='social-option'/></a>
                <a className='text-white inline-block w-full' href="#"><FaTwitter className='social-option'/></a>
                <a className='text-white inline-block w-full' href="#"><FaDiscord className='social-option'/></a>
            </div>
            <div className='hidden max-2xl:block'>
                <RxHamburgerMenu className='text-white text-5xl cursor-pointer'/>
            </div>
        </>
    )
}

export default SocialList