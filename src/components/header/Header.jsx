import "./Header.css"
import { Link } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
function header() {
  return (
    <>

      <div className="header_contayner" >
        <header className="header">
          <div className="header_top">
            <Link to="/">LOGO</Link>
            <nav className="navbar_text" >
              <Link className="navbar_text_link">О нас</Link>
              <Link className="navbar_text_link">Магазины</Link>
              <Link className="navbar_text_link">Оплата и доставка</Link>
              <Link className="navbar_text_link">Статус заказа</Link>
              <Link className="navbar_text_link">Возврат</Link>
              <Link className="navbar_text_link">Контакты</Link>
            </nav>
            <div className="header_right_icons_card" >
              <p className="mackiva_text" ><FaLocationDot className="loction_icons" />Москва</p>
              <a className="header_call_gap" href="tel:+998930583871"> <p className="header_iconis_gap" ><IoCall className="call_text_icon_right" />+7 (812) 834-84-88</p></a>
            </div>
          </div>

          <div className="box_card_heard_left" >
            <div className="header_main">
              <button className="header_btn_left"> <IoMenu className="header_btn_menu_icons" /> Каталог</button>
              <form className="from_input_card" >
                <input className="header_input_cetir" type="text" placeholder="Поиск товара" required maxLength={50} />
                <button className="from_input_btn_left" ><CiSearch /></button>
              </form>

            </div>

            <div className="header_buttom">


              <div>
                <FaRegHeart className="icon_bottom" />
                <p className="icons_bottom_text_right" >Избранное</p>
              </div>
              <div>
                <PiShoppingCartThin className="icon_bottom" />
                <p className="icons_bottom_text_right" >Корзина</p>
              </div>
              <div>
                <CiUser className="icon_bottom" />
                <p className="icons_bottom_text_right" >Войти</p>
              </div>



            </div>

          </div>
          <div className="text_bottom_cettir_flex">

            <p className="text_gap_diss" >Смартфоны</p>
            <p className="text_gap_diss" >Стиральные машины</p>
            <p className="text_gap_diss" >Пылесосы</p>
            <p className="text_gap_diss" >Холодильники</p>
            <p className="text_gap_diss" >Телевизоры</p>
            <p className="text_gap_diss" >Микроволновые печи</p>
            <p className="text_gap_diss" >Наушники</p>
            <p className="text_gap_diss" >Электрочайники</p>
            <p className="text_gap_diss" >Вытяжки</p>


          </div>

        </header>


      </div>

    </>
  )
}

export default header