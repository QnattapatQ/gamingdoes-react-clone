import React from 'react'
import { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo_main.svg';
import SearchBar from './SearchBar';
import SocialList from './SocialList';
import './header.css';

const Header = () => {

    const [stickyNav, setStickyNav] = useState(false);

    const [scrollDetail, setScrollDetail] = useState({
        scrollDetail: window.scrollY
    })

    const [desktopSize, setDesktopSize] = useState({
        winWidth: window.innerWidth
    })

    const detechSize = () => {
        setDesktopSize({
            winWidth: window.innerWidth
        })
    }

    const resetScroll = () => {
        setScrollDetail({
            scrollDetail: window.scrollY
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', resetScroll);

        if(scrollDetail.scrollDetail >= 350) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }

        // if(desktopSize.winWidth < 1200) {
        //     if(scrollDetail.scrollDetail >= 320) {
        //         setStickyNav(true);
        //     } else {
        //         setStickyNav(false);
        //     }
        // } else if (desktopSize.winWidth <= 1040 && desktopSize.winWidth >= 1040) {
        //     if(scrollDetail.scrollDetail >= 299) {
        //         setStickyNav(true);
        //     } else {
        //         setStickyNav(false);
        //     }
        // }

    },[scrollDetail])

    useEffect(() => {
        window.addEventListener('resize', detechSize);

        return () => {
            window.removeEventListener('resize', detechSize);
        }
    }, [desktopSize]);



    return (
        <div className='sticky top-0 left-0 w-full z-[99] py-3'>
            <div className='relative z-20 h-full'>
                <div className={`${stickyNav ? 'bg-linear-blue fixed top-0 left-0 right-0 py-3' : 'py-4 absolute'} px-4 w-full`}>
                    <div className='max-w-[1332px] w-full mx-auto'>
                        <div className='text-2xl w-full flex items-center justify-between gap-4'>
                            <div className='w-[160px]'>
                                <a href="#">
                                    <img className={`${stickyNav ? 'w-[120px] max-4xl:w-[120px] max-3xl:w-[120px] max-2xl:w-[120px] max-xl:w-[120px]' : 'w-[160px]'} min-w-[75px] max-sm:w-[75px] max-md:w-[100px] max-lg:w-[120px] max-3xl:w-[130px] max-4xl:w-[140px] duration-300 ease-out`} src={Logo} alt="" />
                                </a>
                            </div>
                            <div className='max-2xl:hidden'>
                                <ul className='px-4'>
                                    <li className='flex duration-200 gap-8 max-3xl:gap-6'>
                                        <a className='uppercase text-white text-base font-medium' href="#">Latest</a>
                                        <a className='uppercase text-white text-base font-medium' href="#">News</a>
                                        <a className='uppercase text-white text-base font-medium' href="#">Read</a>
                                        <a className='uppercase text-white text-base font-medium' href="#">Watch</a>
                                        <a className='uppercase text-white text-base font-medium' href="#">About</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex items-center'>
                                <SearchBar/>
                                <SocialList/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header