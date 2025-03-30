import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logo_light} alt='logo-light' width={120} />
            <p className='text-sm text-white'>All rights reserved. Copyright @blogger</p>
            <div className='flex'>
                <Image src={assets.facebook_icon} alt='facebook-logo' width={40} />
                <Image src={assets.twitter_icon} alt='twitter-logo' width={40} />
                <Image src={assets.googleplus_icon} alt='googleplus-logo' width={40} />
            </div>
        </div>
    )
}

export default Footer