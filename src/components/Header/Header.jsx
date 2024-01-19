import React from 'react'
import TopBannerAds from './TopBanner'

const Header = () => {
    return (
        <div className='max-w-[1332px] w-full mx-auto'>
            <TopBannerAds/>
            <div className='bg-red-500'>GamingDose</div>
        </div>
    )
}

export default Header