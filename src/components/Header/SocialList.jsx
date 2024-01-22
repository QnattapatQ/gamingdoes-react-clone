import React from 'react'
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa6";
import './header.css';

const SocialList = () => {
    return (
        <div className='social-wrapper flex items-center justify-center gap-3'>
            <a className='text-white inline-block' href="#"><FaFacebook className='social-option'/></a>
            <a className='text-white inline-block' href="#"><FaYoutube className='social-option'/></a>
            <a className='text-white inline-block' href="#"><FaTiktok className='social-option'/></a>
            <a className='text-white inline-block' href="#"><FaInstagram className='social-option'/></a>
            <a className='text-white inline-block' href="#"><FaTwitter className='social-option'/></a>
            <a className='text-white inline-block' href="#"><FaDiscord className='social-option'/></a>
        </div>
    )
}

export default SocialList