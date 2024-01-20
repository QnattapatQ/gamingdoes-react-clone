import React from 'react'
import { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo_main.svg';

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
        <div className='p-4 w-full'>
            <div className={`${stickyNav ? 'fixed top-0 left-0 right-0' : ''} max-w-[1332px] w-full mx-auto`}>
                <div className='bg-red-500 p-2 text-2xl w-full flex items-center justify-between'>
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        <ul className='px-4'>
                            <li className='flex gap-8'>
                                <a className='uppercase text-white' href="#">Latest</a>
                                <a className='uppercase text-white' href="#">News</a>
                                <a className='uppercase text-white' href="#">Read</a>
                                <a className='uppercase text-white' href="#">Watch</a>
                                <a className='uppercase text-white' href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header