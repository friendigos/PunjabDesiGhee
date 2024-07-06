'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Product from './Product'
import { ProductType } from '@/types/ProductType'
import { motion } from 'framer-motion';
import './TabFeatures.css';

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const TabFeatures: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('All')

    const handleTabClick = (item: string) => {
        setActiveTab(item)
    }

    const getFilterData = () => {
        if (activeTab === 'All') {
            return data.filter((product) => (product.type === 'ghee'))
        }

        if (activeTab === 'Cow Ghee') {
            return data.filter((product) => (product.category === 'cow'))
        }

        if (activeTab === 'Buffalo Ghee') {
            return data.filter((product) => (product.category === 'buffalo'))
        }

        return data
    }

    const filteredProducts = getFilterData()

    return (
        <>
            <div className="tab-features-block style-underwear relative md:pt-10 pt-10 md:mt-10 mt-20px">
            <div className="heading3 text-center text-[#000] mb-[40px] pb-4 " style={{fontSize:"50px", fontWeight:"600", color:"006a4e !important"}}>Our Products</div>
                <div className="bg-img">
                    <Image
                        src={'/images/banner/bg-feature-pet1.png'}
                        width={3000}
                        height={2000}
                        alt='bg'
                        className='w-full max-lg:h-[400px] max-sm:h-[200px] object-cover absolute top-0 left-0 right-0 z-[-1]'
                    />
                </div>
                <div className="container">
                    <div className="heading flex flex-col items-center text-center">
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl box_categories">
                            {['All', 'Cow Ghee', 'Buffalo Ghee'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`text_color tab-item relative text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black ${activeTab === item ? 'active' : ''}`}
                                    onClick={() => handleTabClick(item)}
                                >
                                    {activeTab === item && (
                                        <motion.div layoutId='active-pill' style={{color:'yellow !important'}} className='absolute inset-0 rounded-2xl bg-black'></motion.div>
                                    )}
                                    <span className='relative heading5 z-[1]'>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="list-product hide-product-sold  grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        {filteredProducts.slice(start, limit).map((prd, index) => (
                            <Product key={prd.id} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabFeatures