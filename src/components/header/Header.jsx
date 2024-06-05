import React, { memo } from 'react'
import "./Header.scss"

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { TbAntennaBars5 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

import logo from "../../assets/images/nav-logo.svg"

import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='header' id='header'>
                <div className="container sub__header">
                    <ul className="sub__header__list">
                        <li className="sub__header__item">
                            <NavLink
                                to="/about"
                                className="sub__header__link">
                                О компании
                            </NavLink>
                        </li>
                        <li className="sub__header__item">
                            <NavLink
                                to="/about"
                                className="sub__header__link">
                                Доставка и оплата
                            </NavLink>
                        </li>
                        <li className="sub__header__item">
                            <NavLink
                                to="/about"
                                className="sub__header__link">
                                Возврат
                            </NavLink>
                        </li>
                        <li className="sub__header__item">
                            <NavLink
                                to="/about"
                                className="sub__header__link">
                                Гарантии
                            </NavLink>
                        </li>
                        <li className="sub__header__item">
                            <NavLink
                                to="/about"
                                className="sub__header__link">
                                Контакты
                            </NavLink>
                        </li>
                        <li className="sub__header__item">
                            <NavLink
                                to="/about"
                                className="sub__header__link">
                                Блог
                            </NavLink>
                        </li>
                    </ul>
                    <div className="sub__header__contact__wrapper">
                        <p>8 (800) 890-46-56</p>
                        <p>Заказать звонок</p>
                    </div>
                </div>
                <nav className="nav container">
                    <NavLink className="nav__logo">
                        <img src={logo} alt="" />
                        <p>NORNLIGHT</p>
                    </NavLink>
                    <button className="nav__catalog__btn">
                        <HiOutlineMenuAlt1 />
                        <p>Каталог</p>
                    </button>
                    <div className="nav__search__box">
                        <input type="text" className="nav__search__inp" placeholder='Поиск по товарам' />
                        <button className="nav__search__btn">
                            <IoSearch />
                        </button>
                    </div>
                    <div className="nav__actions">
                        <NavLink className="nav__actions__item">
                            <FaRegHeart />
                            <p>Избранное</p>
                        </NavLink>
                        <NavLink className="nav__actions__item">
                            <TbAntennaBars5 />
                            <p>Сравнение</p>
                        </NavLink>
                        <NavLink className="nav__actions__item">
                            <FiShoppingCart />
                            <p>Корзина</p>
                        </NavLink>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default memo(Header)