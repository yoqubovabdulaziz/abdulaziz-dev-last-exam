import React, { memo, useState } from "react";
import "./Footer.scss";

import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

import logo from "../../assets/images/nav-logo.svg";
import payment from "../../assets/images/footer-payment.png"

import { NavLink, useLocation } from "react-router-dom";


const Footer = () => {
    const [activeBox, setActiveBox] = useState(null);

    const handleBoxClick = (i) => {
        setActiveBox(i === activeBox ? null : i);
    };

    let { pathname } = useLocation();
    if (pathname.includes("/admin")) {
        return <></>;
    }

    return (

        <>
            <footer id="footer">
                <div className="container footer">
                    <div className="footer__col col__1">
                        <NavLink to="/" className="footer__logo">
                            <img src={logo} alt="" />
                            <p>NORLIGHT</p>
                        </NavLink>
                        <p className="footer__phone__number">8 (800) 890-46-56</p>
                        <img className="footer__payment" src={payment} alt="" />
                        <p className="footer__description">Политика конфидециальности</p>
                        <p className="footer__description">Пользовательское соглашение</p>
                        <div className="footer__network__wrapper">
                            <div className="footer__network__box">
                                <FaInstagram />
                            </div>
                            <div className="footer__network__box">
                                <FaTelegramPlane />
                            </div>
                            <div className="footer__network__box">
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>

                    <ul className="footer__col col__2">
                        <li className="footer__item">
                            <h3 className="footer__col__title">Покупателям</h3>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                О компании
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Доставка и оплата
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Возврат
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Гарантии
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Контакты
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Блог
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="footer__col col__2">
                        <li className="footer__item">
                            <h3 className="footer__col__title">Товары</h3>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Люстры
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Светильники
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Бра
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Торшеры
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Комплектуюшие
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Настольные лампы
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="footer__col col__2">
                        <li className="footer__item">
                            <h3 className="footer__col__title">Покупателям</h3>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Споты
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Трековые светильники
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Уличные светильники
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Технические светильники
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/about" className="footer__link">
                                Светодиодные ленты
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </footer>

            <footer id="footer__res">
                <div className="footer__res">

                    <div onClick={() => handleBoxClick(0)} className={`footer__res__box ${activeBox === 0 ? "show__footer__content" : ""}`}>
                        <div className="footer__res__box__start">
                            <NavLink className="footer__res__logo">
                                <img src={logo} alt="NORLIGHT" />
                                <p>NORLIGHT</p>
                            </NavLink>
                            <button className="footer__res__box__down__btn">
                                <FaAngleDown className="down__icon" />
                            </button>
                        </div>

                        <div className="footer__res__box__content">
                            <p className="footer__res__phone__number">8 (800) 890-46-56</p>
                            <p className="footer__res__description">Политика конфиденциальности</p>
                            <p className="footer__res__description">Пользовательское соглашение</p>
                            <div className="footer__res__network__wrapper">
                                <div className="footer__res__network__box">
                                    <FaInstagram />
                                </div>
                                <div className="footer__res__network__box">
                                    <FaTelegramPlane />
                                </div>
                                <div className="footer__res__network__box">
                                    <FaFacebookF />
                                </div>
                            </div>
                            <img className="footer__res__payment" src={payment} alt="Payment Methods" />
                        </div>
                    </div>

                    <div onClick={() => handleBoxClick(1)} className={`footer__res__box ${activeBox === 1 ? "show__footer__content" : ""}`}>
                        <h3 className="footer__res__box__title">
                            Покупателям
                            <button className="footer__res__box__down__btn">
                                <FaAngleDown className="down__icon" />
                            </button>
                        </h3>

                        <ul className="footer__res__box__content">
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    О компании
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Доставка и оплата
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Возврат
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Гарантии
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Контакты
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Блог
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div onClick={() => handleBoxClick(2)} className={`footer__res__box ${activeBox === 2 ? "show__footer__content" : ""}`}>
                        <h3 className="footer__res__box__title">
                            Товары
                            <button className="footer__res__box__down__btn">
                                <FaAngleDown className="down__icon" />
                            </button>
                        </h3>

                        <ul className="footer__res__box__content">
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Люстры
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Светильники
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Бра
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Торшеры
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Комплектующие
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Настольные лампы
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div onClick={() => handleBoxClick(3)} className={`footer__res__box ${activeBox === 3 ? "show__footer__content" : ""}`}>
                        <h3 className="footer__res__box__title">
                            Покупателям
                            <button className="footer__res__box__down__btn">
                                <FaAngleDown className="down__icon" />
                            </button>
                        </h3>

                        <ul className="footer__res__box__content">
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Споты
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Трековые светильники
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Уличные светильники
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Технические светильники
                                </NavLink>
                            </li>
                            <li className="footer__res__item">
                                <NavLink to="/about" className="footer__res__link">
                                    Светодиодные ленты
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default memo(Footer);