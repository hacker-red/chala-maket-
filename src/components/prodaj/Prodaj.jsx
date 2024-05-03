import "./Prodaj.css"

import galakse from "../../assets/images/Frame 1887.png"
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegHeart } from "react-icons/fa";
import { PiCellSignalFullBold } from "react-icons/pi";
import { LuBell } from "react-icons/lu";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const Prodaj = () => {
  return (
    <>


      <div className="prodaj_box_card_lingiz" >
        <div className="prodaj_card_swiper" >
          <p className="xareta_text" >Хиты продаж</p>
          <div className="btn_card_centir_gap" >
            <button className="prodaj_btn1">Все</button>
            <button className="prodaj_btn">Смартфоны</button>
            <button className="prodaj_btn">Стиральные машины</button>
            <button className="prodaj_btn">Пылесосы</button>
            <button className="prodaj_btn">Холодильники</button>
            <button className="prodaj_btn">Телевизоры</button>
            <button className="prodaj_btn">Микроволновые печи</button>
          </div>
        </div>



        <div className="">



          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper1"
          >
            <SwiperSlide className="tel_sweper_tecno4" >
              <div className="dgsgrh" >
                <p className="soon39" >-39%</p>
                <p className="tovar_text1" >Товар из рекламы</p>
              </div>
              <div>
                <div className="galakse" > <img src={galakse} alt="" /></div>

              </div>
              <div className="will_help">
                <p className="starsoot" ><IoIosStar />4.8</p>
                <p className="samatifon_text" >Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
                <p className="drell_soon_dell" >21 770 ₽ <del className="egreh">50085₽</del></p>
               <a href="https://ru.tecno-mobile.com/phones/product-detail/product/pova-4/"> <button className="karzenka_btn" >В корзину</button></a>
              </div>
              <div className="prodaj_icons_card">
              <FaRegHeart className="foryou_iconserr" />
              <PiCellSignalFullBold className="foryou_iconserr" />
              <LuBell className="foryou_iconserr" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tel_sweper_tecno4" >
              <div className="dgsgrh" >
                <p className="soon39" >-39%</p>
                <p className="tovar_text1" >Товар из рекламы</p>
              </div>
              <div>
                <div className="galakse" > <img src={galakse} alt="" /></div>

              </div>
              <div className="will_help">
                <p className="starsoot" ><IoIosStar />4.8</p>
                <p className="samatifon_text" >Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
                <p className="drell_soon_dell" >21 770 ₽ <del className="egreh">50085₽</del></p>
               <a href="https://ru.tecno-mobile.com/phones/product-detail/product/pova-4/"> <button className="karzenka_btn" >В корзину</button></a>
              </div>
              <div className="prodaj_icons_card">
              <FaRegHeart className="foryou_iconserr" />
              <PiCellSignalFullBold className="foryou_iconserr" />
              <LuBell className="foryou_iconserr" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tel_sweper_tecno4" >
              <div className="dgsgrh" >
                <p className="soon39" >-39%</p>
                <p className="tovar_text1" >Товар из рекламы</p>
              </div>
              <div>
                <div className="galakse" > <img src={galakse} alt="" /></div> </div>
              <div className="will_help">
                <p className="starsoot" ><IoIosStar />4.8</p>
                <p className="samatifon_text" >Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
                <p className="drell_soon_dell" >21 770 ₽ <del className="egreh">50085₽</del></p>
               <a href="https://ru.tecno-mobile.com/phones/product-detail/product/pova-4/"> <button className="karzenka_btn" >В корзину</button></a>
              </div>
              <div className="prodaj_icons_card">
              <FaRegHeart className="foryou_iconserr" />
              <PiCellSignalFullBold className="foryou_iconserr" />
              <LuBell className="foryou_iconserr" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tel_sweper_tecno4" >
              <div className="dgsgrh" >
                <p className="soon39" >-39%</p>
                <p className="tovar_text1" >Товар из рекламы</p>
              </div>
              <div>
                <div className="galakse" > <img src={galakse} alt="" /></div>

              </div>
              <div className="will_help">
                <p className="starsoot" ><IoIosStar />4.8</p>
                <p className="samatifon_text" >Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
                <p className="drell_soon_dell" >21 770 ₽ <del className="egreh">50085₽</del></p>
               <a href="https://ru.tecno-mobile.com/phones/product-detail/product/pova-4/"> <button className="karzenka_btn" >В корзину</button></a>
              </div>
              <div className="prodaj_icons_card">
              <FaRegHeart className="foryou_iconserr" />
              <PiCellSignalFullBold className="foryou_iconserr" />
              <LuBell className="foryou_iconserr" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tel_sweper_tecno4" >
              <div className="dgsgrh" >
                <p className="soon39" >-39%</p>
                <p className="tovar_text1" >Товар из рекламы</p>
              </div>
              <div>
                <div className="galakse" > <img src={galakse} alt="" /></div>

              </div>
              <div className="will_help">
                <p className="starsoot" ><IoIosStar />4.8</p>
                <p className="samatifon_text" >Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
                <p className="drell_soon_dell" >21 770 ₽ <del className="egreh">50085₽</del></p>
               <a href="https://ru.tecno-mobile.com/phones/product-detail/product/pova-4/"> <button className="karzenka_btn" >В корзину</button></a>
              </div>
              <div className="prodaj_icons_card">
              <FaRegHeart className="foryou_iconserr" />
              <PiCellSignalFullBold className="foryou_iconserr" />
              <LuBell className="foryou_iconserr" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tel_sweper_tecno4" >
              <div className="dgsgrh" >
                <p className="soon39" >-39%</p>
                <p className="tovar_text1" >Товар из рекламы</p>
              </div>
              <div>
                <div className="galakse" > <img src={galakse} alt="" /></div></div>
              <div className="will_help">
                <p className="starsoot" ><IoIosStar />4.8</p>
                <p className="samatifon_text" >Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
                <p className="drell_soon_dell" >21 770 ₽ <del className="egreh">50085₽</del></p>
               <a href="https://ru.tecno-mobile.com/phones/product-detail/product/pova-4/"> <button className="karzenka_btn" >В корзину</button></a>
              </div>
              <div className="prodaj_icons_card">
              <FaRegHeart className="foryou_iconserr" />
              <PiCellSignalFullBold className="foryou_iconserr" />
              <LuBell className="foryou_iconserr" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tel_sweper_tecno4" >
              <div className="dgsgrh" >
                <p className="soon39" >-39%</p>
                <p className="tovar_text1" >Товар из рекламы</p>
              </div>
              <div>
                <div className="galakse" > <img src={galakse} alt="" /></div>

              </div>
              <div className="will_help">
                <p className="starsoot" ><IoIosStar />4.8</p>
                <p className="samatifon_text" >Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
                <p className="drell_soon_dell" >21 770 ₽ <del className="egreh">50085₽</del></p>
               <a href="https://ru.tecno-mobile.com/phones/product-detail/product/pova-4/"> <button className="karzenka_btn" >В корзину</button></a>
              </div>
              <div className="prodaj_icons_card">
              <FaRegHeart className="foryou_iconserr" />
              <PiCellSignalFullBold className="foryou_iconserr" />
              <LuBell className="foryou_iconserr" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tel_sweper_tecno4" >
              <div className="dgsgrh" >
                <p className="soon39" >-39%</p>
                <p className="tovar_text1" >Товар из рекламы</p>
              </div>
              <div>
                <div className="galakse" > <img src={galakse} alt="" /></div>

              </div>
              <div className="will_help">
                <p className="starsoot" ><IoIosStar />4.8</p>
                <p className="samatifon_text" >Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
                <p className="drell_soon_dell" >21 770 ₽ <del className="egreh">50085₽</del></p>
               <a href="https://ru.tecno-mobile.com/phones/product-detail/product/pova-4/"> <button className="karzenka_btn" >В корзину</button></a>
              </div>
              <div className="prodaj_icons_card">
              <FaRegHeart className="foryou_iconserr" />
              <PiCellSignalFullBold className="foryou_iconserr" />
              <LuBell className="foryou_iconserr" />
              </div>
            </SwiperSlide>


          </Swiper>



        </div>




      </div>


    </>
  )
}

export default Prodaj