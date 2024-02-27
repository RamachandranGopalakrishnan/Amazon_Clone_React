import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"

const CarouselProduct = () => {
  return (
    <div className="bg-white m-3 ">
        <div className="text-2xl font-semibold p-3">The Best Sellers</div>
         <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}>
             {
                Array.from( {length:9},(_,i) =>
                <SwiperSlide>
                    <img src={`../amazon_clone/images/product_${i}_small.jpg`}/>
                </SwiperSlide>
                )
             }
        </Swiper>
    </div>
  )
}

export default CarouselProduct