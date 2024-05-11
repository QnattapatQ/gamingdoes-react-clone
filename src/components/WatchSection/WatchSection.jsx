import React from 'react'
import ButtonTransition from '../ButtonTransition/ButtonTransition';

const WatchSection = () => {
    return (
        <div className='bg-red-500 h-[500px]'>
            <div className='max-w-[1332px] mx-auto px-4'>
                <div className='px-[70px]'>
                    <div className='pt-16 pb-8'>
                        <div className='flex max-lg:pr-0 w-full justify-between items-center'>
                            <h2 className='font-bold text-transparent uppercase text-4xl text-white'>Watchs</h2>
                            <ButtonTransition textBtn={'Watch More'} textColor={true}/>
                        </div>
                        <div>
                            
                        </div>
                    </div>  
                </div>               
            </div>
        </div>
    )
}

export default WatchSection