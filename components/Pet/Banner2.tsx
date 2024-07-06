import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner2 = () => {
    return (
        <>
            <div className="banner-block md:mt-20 mt-10 relative ">
                <div className="bg-img w-full">
                    <Image
                        src={'/images/ghee_photo/Untitled-10.png'}
                        width={800}
                        height={800}
                        alt='bg-img'
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </>
    )
}

export default Banner2