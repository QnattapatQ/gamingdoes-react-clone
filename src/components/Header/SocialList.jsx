import React from 'react'
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa6";

const SocialList = () => {
    return (
        <div className='flex items-center justify-center gap-3'>
            <a className='text-white' href="#"><FaFacebook/></a>
            <a className='text-white' href="#"><FaYoutube/></a>
            <a className='text-white' href="#"><FaTiktok/></a>
            <a className='text-white' href="#"><FaInstagram/></a>
            <a className='text-white' href="#"><FaTwitter/></a>
            <a className='text-white' href="#"><FaDiscord/></a>
        </div>
    )
}

export default SocialList