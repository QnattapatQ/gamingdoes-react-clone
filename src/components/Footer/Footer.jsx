import React, { useEffect, useState , useRef } from 'react'
import { FaChevronUp } from "react-icons/fa6";
import logo from '../../assets/images/logo_main.svg'
import { SocialMenu } from '../Header/SocialMenu';
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa6";
import mario from '../../assets/images/mario_footer.gif';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Footer = () => {

    gsap.registerPlugin(useGSAP);

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

        gsap.fromTo('.mario', desktopSize.winWidth / 100 ,{x:-desktopSize.winWidth / 10},{x:(desktopSize.winWidth - (100 / 20)), repeat:-1 ,ease:'none'});

        // console.log(desktopSize.winWidth)

        return () => {
            window.removeEventListener('resize', detechSize);
        }
    }, [desktopSize.winWidth]);


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
                        <div className='py-[50px] flex items-start justify-between gap-4 max-lg:items-end max-md:flex-col max-md:items-start border-b border-white'>
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
                            <div className='max-md:mt-2'>
                                <h2 className='text-white uppercase font-medium text-sm mb-1 max-lg:text-end max-md:text-start'>Contact Us</h2>
                                <a className='text-gray-400 hover:text-white font-medium' href="#">
                                    gene@gamingdose.com
                                </a>
                            </div>
                        </div>
                        <div className='pt-8 flex items-center justify-between max-md:flex-col max-md:items-start'>
                            <div className='flex gap-10 max-lg:flex-col max-lg:gap-2'>
                                <a href="#" className='text-gray-300'>
                                    Terms & Privacy
                                </a>
                                <p className='text-gray-300'>
                                    © 2022 GamingDose.com
                                </p>
                            </div>
                            <div className='w-auto'>
                                <div className='social-wrapper flex items-center justify-center gap-3 max-md:pt-4'>
                                    <a className='text-white inline-block w-full' href="#"><FaFacebook className='social-option text-2xl max-sm:text-xl'/></a>
                                    <a className='text-white inline-block w-full' href="#"><FaYoutube className='social-option text-2xl max-sm:text-xl'/></a>
                                    <a className='text-white inline-block w-full' href="#"><FaTiktok className='social-option text-2xl max-sm:text-xl'/></a>
                                    <a className='text-white inline-block w-full' href="#"><FaInstagram className='social-option text-2xl max-sm:text-xl'/></a>
                                    <a className='text-white inline-block w-full' href="#"><FaTwitter className='social-option text-2xl max-sm:text-xl'/></a>
                                    <a className='text-white inline-block w-full' href="#"><FaDiscord className='social-option text-2xl max-sm:text-xl'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-[110px] max-xl:top-[86px] w-full'>
                <img className='mario w-[50px]' src={mario} alt="" />
            </div>
        </div>
    )
}

export default Footer