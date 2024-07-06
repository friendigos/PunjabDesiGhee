'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import banner1 from '../public/images/ghee_photo/2.png'  

const MainCarousel1: React.FC = () => {
  return (
    <a href="/products">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="relative"
      >
        <SwiperSlide>
          <div className="w-full overflow-hidden">
            <img
              src="images/ghee_photo/001.png"
              className="w-full"
              alt="Full Width Image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full overflow-hidden">
            <img
              src="images/ghee_photo/4.png"
              className="w-full"
              alt="Full Width Image"
            />
          </div>
        </SwiperSlide>
        </Swiper>
      <style jsx>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          color: #daa407;
        }
      `}</style>
    </a>
  )
}

export default MainCarousel1
