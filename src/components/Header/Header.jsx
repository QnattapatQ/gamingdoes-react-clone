import React from 'react'
import { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo_main.svg';
import SearchBar from './SearchBar';
import SocialList from './SocialList';

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

        if(scrollDetail.scrollDetail >= 235) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }

    },[scrollDetail])

    return (
        <div className='relative'>
            <div className={`${stickyNav ? 'bg-gradient-to-l from-blue-900 to-blue-600 fixed top-0 left-0 right-0 py-3' : 'py-4'} px-4 w-full`}>
                <div className='max-w-[1332px] w-full mx-auto'>
                    <div className='text-2xl w-full flex items-center justify-between'>
                        <div>
                            <a href="#">
                                <img className={`${stickyNav ? 'w-[120px]' : 'w-[160px]'} duration-300 ease-out`} src={Logo} alt="" />
                            </a>
                        </div>
                        <div>
                            <ul className='px-4'>
                                <li className='flex gap-8'>
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