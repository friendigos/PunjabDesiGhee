'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './Product.css';
import { ProductType } from '@/types/ProductType';
import * as Icon from "@phosphor-icons/react/dist/ssr";
// import { useCart } from '@/context/CartContext'
// import { useModalCartContext } from '@/context/ModalCartContext'
// import { useWishlist } from '@/context/WishlistContext'
// import { useModalWishlistContext } from '@/context/ModalWishlistContext'
// import { useCompare } from '@/context/CompareContext'
// import { useModalCompareContext } from '@/context/ModalCompareContext'
// import { useModalQuickviewContext } from '@/context/ModalQuickviewContext'
import { useRouter } from 'next/navigation'
import Marquee from 'react-fast-marquee'
// import Rate from '../Other/Rate'

interface ProductProps {
    data: ProductType
    type: string
}

const Product: React.FC<ProductProps> = ({ data, type }) => {
    const [activeColor, setActiveColor] = useState<string>('')
    const [activeSize, setActiveSize] = useState<string>('')
    const [openQuickShop, setOpenQuickShop] = useState<boolean>(false)
    // const { addToCart, updateCart, cartState } = useCart();
    // const { openModalCart } = useModalCartContext()
    // const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist();
    // const { openModalWishlist } = useModalWishlistContext()
    // const { addToCompare, removeFromCompare, compareState } = useCompare();
    // const { openModalCompare } = useModalCompareContext()
    // const { openQuickview } = useModalQuickviewContext()
    const router = useRouter()

    const handleActiveColor = (item: string) => {
        setActiveColor(item)
    }

    const handleActiveSize = (item: string) => {
        setActiveSize(item)
    }

    // const handleAddToCart = () => {
    //     if (!cartState.cartArray.find(item => item.id === data.id)) {
    //         addToCart({ ...data });
    //         updateCart(data.id, data.quantityPurchase, activeSize, activeColor)
    //     } else {
    //         updateCart(data.id, data.quantityPurchase, activeSize, activeColor)
    //     }
    //     openModalCart()
    // };

    // const handleAddToWishlist = () => {
    //     // if product existed in wishlit, remove from wishlist and set state to false
    //     if (wishlistState.wishlistArray.some(item => item.id === data.id)) {
    //         removeFromWishlist(data.id);
    //     } else {
    //         // else, add to wishlist and set state to true
    //         addToWishlist(data);
    //     }
    //     openModalWishlist();
    // };

    // const handleAddToCompare = () => {
    //     // if product existed in wishlit, remove from wishlist and set state to false
    //     if (compareState.compareArray.length < 3) {
    //         if (compareState.compareArray.some(item => item.id === data.id)) {
    //             removeFromCompare(data.id);
    //         } else {
    //             // else, add to wishlist and set state to true
    //             addToCompare(data);
    //         }
    //     } else {
    //         alert('Compare up to 3 products')
    //     }

    //     openModalCompare();
    // };

    // const handleQuickviewOpen = () => {
    //     openQuickview(data)
    // }

    // const handleDetailProduct = (productId: string) => {
    //     // redirect to shop with category selected
    //     router.push(`/product/default?id=${productId}`);
    // };

    let percentSale = Math.floor(100 - ((data.price / data.originPrice) * 100))
    let percentSold = Math.floor((data.sold / data.quantity) * 100)

    return (
        <>
           <Link href={`/product/${data.id}`} >
                <div className="product-item grid-type">
                    <div className="product-main cursor-pointer block">
                        <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                            
                            <div className="product-img w-full h-full aspect-[3/4]">
                                {activeColor ? (
                                    <>
                                        {
                                            <Image
                                                src={data.variation.find(item => item.color === activeColor)?.image ?? ''}
                                                width={500}
                                                height={500}
                                                alt={data.name}
                                                priority={true}
                                                className='w-full h-full object-cover duration-700'
                                            />
                                        }
                                    </>
                                ) : (
                                    <>
                                        {
                                            data.thumbImage.map((img, index) => (
                                                <Image
                                                    key={index}
                                                    src={img}
                                                    width={500}
                                                    height={500}
                                                    priority={true}
                                                    alt={data.name}
                                                    className='w-full h-full object-cover duration-700'
                                                />
                                            ))
                                        }
                                    </>
                                )}
                            </div>
                        
                        </div>
                        <div className="product-infor mt-4 lg:mb-7">
                            <div className="product-name text-title text-bold product_name">{data.name}</div>
                           

                            <div className="product-price-block flex items-center gap-2 flex-wrap relative z-[1]">
                                <div className="product-price text-title product_price">Rs.{data.price} /-</div>
                                {percentSale > 0 && (
                                    <>
                                        <div className="product-origin-price caption1 text-secondary2"><del>Rs.{data.originPrice} /-</del></div>
                                        <div className="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                                            -{percentSale}%
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div></Link>
            
        </>
    )
}

export default Product