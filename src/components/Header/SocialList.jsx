import React, { useEffect, useState } from 'react'
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
            <div onClick={() => {setOpenMenu(!openMenu)}} className='hidden max-2xl:block'>
                <RxHamburgerMenu className='text-white text-5xl cursor-pointer max-sm:text-4xl max-lg:text-[40px]'/>
            </div>
            <div>
                <MenuMobile openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            </div>
        </>
    )
}

export default SocialList