import React from 'react'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import './Product.css';

const ChooseUs = () => {
    return (
        <>
            <div className="choose-us-block md:pt-20 pt-14">
                <div className="container flex max-lg:flex-col max-lg:gap-y-8 items-center justify-between">
                    <div className="bg-img lg:w-6/12 lg:pr-[45px] md:w-1/2 w-5/6"> 
                        <Image
                            src={'/images/ghee_photo/indian.png'}
                            width={500}
                            height={500}
                            alt='bg-img'
                            priority={true}
                            className='choose_us_image'
                        />
                    </div>
                    <div className="content lg:w-6/12 lg:pl-[45px]">
                        <div className="heading3">Why Choose Us?</div>
                        <div className="heading6 font-normal text-secondary mt-3 font_color">At Punjab Desi Ghee, we bring you the authentic taste of traditional ghee straight from the heart of Punjab. Crafted with care, our ghee is made using time-honored methods to ensure the highest quality and rich flavor.</div>
                        <div className="list-feature lg:mt-10 mt-6">
                            <div className="item flex items-center gap-5">
                                <Icon.PottedPlant size={40} weight='fill' className='text-green' />
                                <div className="text-content">
                                    <div className="heading6 heading_choose_us">Pure and Natural:</div>
                                    <div className="caption1 text-secondary mt-2 font_color">Free from preservatives and additives.</div>
                                </div>
                            </div>
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                            <Icon.HandsPraying size={40} weight='fill' className='text-green' />
                                <div className="text-content">
                                    <div className="heading6 heading_choose_us">Rich Tradition:</div>
                                    <div className="caption1 text-secondary mt-2 font_color"> Handcrafted using generations-old techniques.
</div>
                                </div>
                            </div>
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                            <Icon.Heartbeat size={40} weight='fill' className='text-green' />
                                <div className="text-content">
                                    <div className="heading6 heading_choose_us">Health Benefits: </div>
                                    <div className="caption1 text-secondary mt-2 font_color">Packed with vitamins and healthy fats.
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseUs