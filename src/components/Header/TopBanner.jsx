import React from 'react'
import ResponsiveSize from '../../../public/ResponsiveSize'

const TopBannerAds = () => {
    return (
        <ResponsiveSize>
            <div className='grid grid-cols-2 w-full gap-4 p-4 bg-green-500 max-lg:grid-cols-1'>
                <div>
                    <a href="#">
                        <img className='h-full w-full' src="https://www.gamingdose.com/wp-content/uploads/2024/01/1120x250-2.jpg" alt="" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img className='h-full w-full' src="https://www.gamingdose.com/wp-content/uploads/2023/03/577x128-2-2.jpg" alt="" />
                    </a>
                </div>
            </div>
        </ResponsiveSize>
    )
}

export default TopBannerAds