import "./Main.css"
import React, { useRef, useState } from 'react';
import kiryuvish from "../../assets/images/keryuvish.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Main = () => {
  return (
    <>

    <div className="kiryuish_card" >
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>

          <div  >
            <img className="kiryuvish" src={kiryuvish} alt="" />
          </div >

        </SwiperSlide>

        <SwiperSlide><div>
          <img src={kiryuvish} alt="" />
        </div></SwiperSlide>
        <SwiperSlide><div>
          <img src={kiryuvish} alt="" />
        </div></SwiperSlide>
        <SwiperSlide><div>
          <img src={kiryuvish} alt="" />
        </div></SwiperSlide>
        <SwiperSlide><div>
          <img src={kiryuvish} alt="" />
        </div></SwiperSlide>
        <SwiperSlide><div>
          <img src={kiryuvish} alt="" />
        </div> </SwiperSlide>
        <SwiperSlide><div>
          <img src={kiryuvish} alt="" />
        </div> </SwiperSlide>
        <SwiperSlide><div>
          <img src={kiryuvish} alt="" />
        </div> </SwiperSlide>
        <SwiperSlide> <div>
          <img src={kiryuvish} alt="" />
        </div></SwiperSlide>
      </Swiper>
    </div>


    </>
  )
}

export default Main