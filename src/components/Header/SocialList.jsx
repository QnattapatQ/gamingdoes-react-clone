import React, { useState } from 'react'
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa6";
import './header.css';
import { RxHamburgerMenu } from "react-icons/rx";
import MenuMobile from './MenuMobile';
import { SocialMenu } from './SocialMenu';

const SocialList = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <SocialMenu/>
            <div className='hidden max-2xl:block'>
                <RxHamburgerMenu className='text-white text-5xl cursor-pointer'/>
            </div>
            <MenuMobile/>
        </>
    )
}

export default SocialList