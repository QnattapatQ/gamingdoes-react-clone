import React from 'react'

const TopBannerAds = () => {
    return (
        <div id='topads' className='max-w-[1332px] w-full mx-auto px-[86px] pt-12 max-2xl:px-14 max-2xl:pt-8 max-xl:px-10 max-lg:pt-4 max-md:px-4'>
            <div className='grid grid-cols-2 w-full mb-8 gap-4 p-4 border-solid border-[0.5px] border-gray-400 bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-30 max-lg:grid-cols-1'>
                <div>
                    <a href="#">
                        <img className='h-full w-full' src="https://spicy-dev.com/preview/1dd/gamingdose/assets/images/ads_header01.jpg" alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img className='h-full w-full' src="https://spicy-dev.com/preview/1dd/gamingdose/assets/images/ads_header02.jpg" alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img className='h-full w-full' src="https://spicy-dev.com/preview/1dd/gamingdose/assets/images/ads_header03.jpg" alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img className='h-full w-full' src="https://spicy-dev.com/preview/1dd/gamingdose/assets/images/ads_header04.jpg" alt="" />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default TopBannerAds