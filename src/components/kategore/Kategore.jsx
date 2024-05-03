import "./Kategore.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/images/image 3.png"
import img2 from "../../assets/images/image 4.png"
import img3 from "../../assets/images/image 5.png"
// import img4 from "../../assets/images/image 6.png"  
import img5 from "../../assets/images/muzlatkich.png"
import img6 from "../../assets/images/image 7 (1).png"
import img7 from "../../assets/images/image 8 (1).png"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Ketegorem = () => {
  return (
    <>
      <div className='date_carad_sweper' >
        <p className="karusel_top_text" >Популярные категории</p>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            // clickable: true,
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >

          <SwiperSlide className="swiper_card" >
            <div className="swiper_img" > <img className="img1" src={img1} alt="" /><p className="appele" >Смартфоны</p></div>
          </SwiperSlide>


          <SwiperSlide className="swiper_card" >

            <div className="swiper_img" > <img className="img1" src={img2} alt="" /><p className="appele_one" >Стиральные
              машины</p></div>
          </SwiperSlide>
          <SwiperSlide className="swiper_card" >

            <div className="swiper_img" > <img className="img1" src={img3} alt="" /><p className="appele" >Пылесосы</p></div>
          </SwiperSlide>
          <SwiperSlide className="swiper_card" >

            <div className="swiper_img" > <img className="img2" src={img5} alt="" /><p className="appele" >Холодильники</p></div>
          </SwiperSlide>
          <SwiperSlide className="swiper_card" >

            <div className="swiper_img" > <img className="img2" src={img6} alt="" /><p className="appele" >Телевизоры</p></div>
          </SwiperSlide>
          <SwiperSlide className="swiper_card" >

            <div className="swiper_img" > <img className="img2" src={img7} alt="" /><p className="appele" >Микроволновые
              печи</p></div>
          </SwiperSlide>
          <SwiperSlide className="swiper_card" >

            <div className="swiper_img" > <img className="img2" src={img6} alt="" /><p className="appele" >Телевизоры</p></div>
          </SwiperSlide>
          <SwiperSlide className="swiper_card" >

            <div className="swiper_img" > <img className="img2" src={img5} alt="" /><p className="appele" >Холодильники</p></div>
          </SwiperSlide>
          <SwiperSlide className="swiper_card" >

            <div className="swiper_img" > <img className="img1" src={img1} alt="" /><p className="appele" >Смартфоны</p></div>
          </SwiperSlide>
          <SwiperSlide className="swiper_card" >

            <div className="swiper_img" > <img className="img2" src={img5} alt="" /><p className="appele" >Холодильники</p></div>
          </SwiperSlide>
        </Swiper>

      </div>

    </>
  )
}

export default Ketegorem