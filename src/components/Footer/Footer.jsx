import React from 'react'
import { FaChevronUp } from "react-icons/fa6";
import logo from '../../assets/images/logo_main.svg'
import { SocialMenu } from '../Header/SocialMenu';
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa6";
import mario from '../../assets/images/mario_footer.gif';

const Footer = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='w-full flex justify-center items-center py-[60px] max-xl:py-12'>
                <a href="#topads" className='group/chevron relative'>
                    <div className='w-full flex flex-col items-center'>
                        <FaChevronUp className='text-main-blue text-lg duration-200 absolute -top-1 group-hover/chevron:-top-[6px]'/>
                        <p className='uppercase text-main-blue font-semibold pt-4'>Back to top</p>
                    </div>
                </a>
            </div>
            <div className='bg-main-blue-linear max-lg:bg-sup-blue-linear py-[50px]'>
                <div className='max-w-[1332px] mx-auto px-4'>
                    <div className='px-[70px] max-2xl:px-10 max-xl:px-6'>
                        <div className='block w-[110px]'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='py-[50px] flex items-start justify-between max-lg:items-end border-b border-white'>
                            <div>
                                <ul className='flex gap-8 max-2xl:gap-6 items-center max-xl:grid max-xl:grid-cols-2 max-lg:grid-cols-1'>
                                    <li>
                                        <a className='uppercase text-white text-[28px] max-3xl:text-[24px] max-2xl:text-[22px] font-medium' href="#">About</a>
                                    </li>
                                    <li>
                                        <a className='uppercase text-white text-[28px] max-3xl:text-[24px] max-2xl:text-[22px] font-medium' href="#">Advertise</a>
                                    </li>
                                    <li>
                                        <a className='uppercase text-white text-[28px] max-3xl:text-[24px] max-2xl:text-[22px] font-medium' href="#">Careers</a>
                                    </li>
                                    <li>
                                        <a className='uppercase text-white text-[28px] max-3xl:text-[24px] max-2xl:text-[22px] font-medium' href="#">Contact</a>
                                    </li>
                                    <li>
                                        <a className='uppercase text-white text-[28px] max-3xl:text-[24px] max-2xl:text-[22px] font-medium' href="#">Support</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='text-white uppercase font-medium text-sm mb-1 max-lg:text-end'>Contact Us</h2>
                                <a className='text-gray-400 hover:text-white font-medium' href="#">
                                    gene@gamingdose.com
                                </a>
                            </div>
                        </div>
                        <div className='pt-8 flex items-center justify-between'>
                            <div className='flex gap-10 max-lg:flex-col max-lg:gap-2'>
                                <a href="#" className='text-gray-300'>
                                    Terms & Privacy
                                </a>
                                <p className='text-gray-300'>
                                    © 2022 GamingDose.com
                                </p>
                            </div>
                            <div>
                                <div className='social-wrapper flex items-center justify-center gap-3'>
                                    <a className='text-white inline-block w-full' href="#"><FaFacebook className='social-option text-2xl'/></a>
                                    <a className='text-white inline-block w-full' href="#"><FaYoutube className='social-option text-2xl'/></a>
                                    <a className='text-white inline-block w-full' href="#"><FaTiktok className='social-option text-2xl'/></a>
                                    <a className='text-white inline-block w-full' href="#"><FaInstagram className='social-option text-2xl'/></a>
                                    <a className='text-white inline-block w-full' href="#"><FaTwitter className='social-option text-2xl'/></a>
                                    <a className='text-white inline-block w-full' href="#"><FaDiscord className='social-option text-2xl'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-[110px] w-full bg-red-500'>
                <img className='w-[50px] animate-mario-move' src={mario} alt="" />
            </div>
        </div>
    )
}

export default Footer