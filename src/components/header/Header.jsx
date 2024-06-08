import React, { memo, useRef, useState } from 'react'
import "./Header.scss"

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

import logo from "../../assets/images/nav-logo.svg"
import antena from "../../assets/images/antena.svg"

import { NavLink } from 'react-router-dom'
import { useGetProductQuery } from '../../context/productApi';

const Header = () => {
    const { data, error } = useGetProductQuery()
    const [menuToggle, setMenuToggle] = useState(false)
    const [navbarShrink, setNavbarShrink] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const inputRef = useRef(null);
    const [searchValue, setSearchValue] = useState("")

    const handleSearchClick = () => {
        setShowSearch(true);
        inputRef.current.focus();
    };

    const headerShrink = () => {
        if (window.scrollY > 0) {
            setNavbarShrink(true)
        } else {
            setNavbarShrink(false)
        }
    }
    window.addEventListener("scroll", headerShrink)

    let filteredData = data?.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase().trim()))

    return (
        <>
            <header className={`header ${navbarShrink ? "navbar__shrink" : ""}`} id='header'>
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
                <nav className={`nav container ${showSearch ? "hide__nav" : ""}`}>

                    <div className="nav__left__media">
                        <button
                            onClick={() => setMenuToggle(p => !p)}
                            className={`nav__toggle__btn ${menuToggle ? "changed__toggle__btn" : ""}`}>
                            <span className="toggle__top"></span>
                            <span className="toggle__center"></span>
                            <span className="toggle__bottom"></span>
                            <p>salom</p>
                        </button>
                        <NavLink className="nav__logo">
                            <img src={logo} alt="" />
                            <p>NORNLIGHT</p>
                        </NavLink>
                    </div>

                    <button className="nav__catalog__btn">
                        <HiOutlineMenuAlt1 />
                        <p>Каталог</p>
                    </button>

                    <div className="nav__search__box">
                        <input
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                            type="text"
                            className="nav__search__inp"
                            placeholder='Поиск по товарам'
                        />
                        {
                            searchValue ? <button onClick={() => setSearchValue("")} className='search__clear__btn'>
                                <IoCloseSharp />
                            </button> : <></>
                        }
                        <button className="nav__search__btn">
                            <IoSearch />
                        </button>
                        {
                            searchValue ? filteredData?.length ?
                                <div className="nav__search__content__box">
                                    {
                                        searchValue.trim() ? filteredData?.map(el => (
                                            <NavLink key={el.id} to={`/product/${el.id}`} className="nav__search__item">
                                                <p>{el.title}</p>
                                            </NavLink>
                                        )) : <></>
                                    }
                                </div> : <div className='nav__search__content__box search__nothing__found'>Afsuski hech narsa topilmadi</div> : <></>
                        }
                    </div>

                    <div className="nav__actions">

                        <div className={`nav__media__search__wrapper ${showSearch ? "show__search__media" : ""}`}>
                            <div className="nav__media__search__box">
                                <input
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    ref={inputRef}
                                    type="text"
                                    className="nav__media__search__inp"
                                />
                                <button onClick={handleSearchClick} className="nav__media__search__btn">
                                    <IoSearch />
                                </button>
                            </div>
                            <button onClick={() => {
                                setShowSearch(false)
                                setSearchValue("")
                            }} className="nav__media__cancel__btn">
                                Cancel
                            </button>

                            {/* NAV MEDI SEARCH CONTENT */}
                            {
                                searchValue ? filteredData?.length ?
                                    <div className="nav__media__search__content__box">
                                        {
                                            searchValue.trim() ? filteredData?.map(el => (
                                                <NavLink key={el.id} to={`/product/${el.id}`} className="nav__media__search__item">
                                                    <p>{el.title}</p>
                                                </NavLink>
                                            )) : <></>
                                        }
                                    </div> : <div className='nav__media__search__content__box search__nothing__found'>Afsuski hech narsa topilmadi</div> : <></>
                            }
                        </div>

                        <NavLink className="nav__actions__item">
                            <FaRegHeart />
                            <p>Избранное</p>
                        </NavLink>
                        <NavLink className="nav__actions__item nav__actions__antena">
                            <img src={antena} alt="" />
                            <p>Сравнение</p>
                        </NavLink>
                        <NavLink className="nav__actions__item">
                            <FiShoppingCart />
                            <p>Корзина</p>
                        </NavLink>
                    </div>
                </nav>
            </header>

            <ul className={`nav__toggle ${menuToggle ? "show__nav__toggle" : ""}`}>
                <li className='nav__toggle__item'>
                    <NavLink className="nav__toggle__link">О компании</NavLink>
                </li>
                <li className="nav__toggle__item">
                    <NavLink className="nav__toggle__link">Доставка и оплата</NavLink>
                </li>
                <li className="nav__toggle__item">
                    <NavLink className="nav__toggle__link">Возврат</NavLink>
                </li>
                <li className="nav__toggle__item">
                    <NavLink className="nav__toggle__link">Гарантии</NavLink>
                </li>
                <li className="nav__toggle__item">
                    <NavLink className="nav__toggle__link">Контакты</NavLink>
                </li>
                <li className="nav__toggle__item">
                    <NavLink className="nav__toggle__link nav__last__toggle__link">Блог</NavLink>
                </li>
                <li className="nav__toggle__item">
                    <button className="nav__toggle__catalog__btn">
                        <HiOutlineMenuAlt1 />
                        <p>Каталог</p>
                    </button>
                </li>
                <li className="nav__toggle__item">
                    <p>8 (800) 890-46-56</p>
                    <p>Заказать звонок</p>
                </li>
            </ul>
        </>
    )
}

export default memo(Header)