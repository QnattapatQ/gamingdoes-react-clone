import React from 'react'
import adsImg01 from '../../assets/images/ads_header01.jpg'
import adsImg02 from '../../assets/images/ads_img-02.jpg'

const AdsSticky = () => {
    return (
        <div>
            <div className='h-full relative py-16 pl-8 pr-[70px] max-2xl:pl-5 max-2xl:pr-10 max-lg:hidden'>
                <a href="#" className='sticky top-[100px] max-w-[220px] w-full'>
                    <img className='' src={adsImg01} alt="" />
                </a>
            </div>
            <div className='py-6 max-lg:block hidden'>
                <a href="#">
                    <img className='' src={adsImg02} alt="" />
                </a>
            </div>
        </div>
    )
}

export default AdsSticky