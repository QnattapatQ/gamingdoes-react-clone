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

        if(desktopSize.winWidth >= 1100 && scrollDetail.scrollDetail >= 350) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 1099 && desktopSize.winWidth >= 992) && scrollDetail.scrollDetail >= 300) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 991 && desktopSize.winWidth >= 800) && scrollDetail.scrollDetail >= 275) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 799 && desktopSize.winWidth >= 769) && scrollDetail.scrollDetail >= 260) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 768 && desktopSize.winWidth >= 740) && scrollDetail.scrollDetail >= 670) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 739 && desktopSize.winWidth >= 700) && scrollDetail.scrollDetail >= 640) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 699 && desktopSize.winWidth >= 650) && scrollDetail.scrollDetail >= 600) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 649 && desktopSize.winWidth >= 620) && scrollDetail.scrollDetail >= 560) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 619 && desktopSize.winWidth >= 520) && scrollDetail.scrollDetail >= 530) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 519 && desktopSize.winWidth >= 490) && scrollDetail.scrollDetail >= 480) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 489 && desktopSize.winWidth >= 450) && scrollDetail.scrollDetail >= 450) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 449 && desktopSize.winWidth >= 400) && scrollDetail.scrollDetail >= 400) {
            setStickyNav(true);
        } else if ((desktopSize.winWidth <= 399 && desktopSize.winWidth >= 10) && scrollDetail.scrollDetail >= 350) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }

        // console.log(scrollDetail)
        // console.log(desktopSize.winWidth)

    },[scrollDetail, desktopSize.winWidth])

    useEffect(() => {
        window.addEventListener('resize', detechSize);

        return () => {
            window.removeEventListener('resize', detechSize);
        }
    }, [desktopSize]);



    return (
        <div className=''>
            <div className='relative z-20 h-full'>
                <div className={`${stickyNav ? 'bg-linear-blue fixed top-0 left-0 right-0 py-3 shadow-[0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]' : 'py-4 absolute'} px-4 w-full max-lg:border-b border-[rgba(255_255_255_/_15%)]`}>
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