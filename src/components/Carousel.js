import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
        <Swiper loop={true}
        spaceBetween={0}
        className="h-[50%]">
            <SwiperSlide >
                <img src={"../amazon_clone/images/carousel_1.jpg"}/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Carousel