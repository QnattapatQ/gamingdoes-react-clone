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

    const resetScroll = () => {
        setScrollDetail({
            scrollDetail: window.scrollY
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', resetScroll);

        if(scrollDetail.scrollDetail >= 210) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }

    },[scrollDetail])

    return (
        <div className='relative'>
            <div className={`${stickyNav ? 'bg-linear-blue fixed top-0 left-0 right-0 py-3' : 'py-4'} px-4 w-full`}>
                <div className='max-w-[1332px] w-full mx-auto'>
                    <div className='text-2xl w-full flex items-center justify-between'>
                        <div className='w-[160px]'>
                            <a href="#">
                                <img className={`${stickyNav ? 'w-[120px] max-4xl:w-[120px] max-3xl:w-[120px] max-2xl:w-[120px] max-xl:w-[120px]' : 'w-[160px]'} min-w-[120px] max-lg:w-[120px] max-3xl:w-[130px] max-4xl:w-[140px] duration-300 ease-out`} src={Logo} alt="" />
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
    )
}

export default Header