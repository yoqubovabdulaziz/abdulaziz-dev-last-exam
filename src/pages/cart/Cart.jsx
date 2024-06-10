import React, { memo, useEffect } from 'react';
import "./Cart.scss";
import Breadcrumb from '../../components/breadCrumb/BreadCrumb';

import { FaRegTrashCan } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";

import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decCart, incCart, removeFromCart } from '../../context/cartSlice';
import EmptyCart from '../../components/empty-cart/EmptyCart';
import { useState } from 'react';
import { toast } from 'react-toastify';

const BOT_TOKEN = "7043818007:AAFEvGO-268oUTpyXV0OouP8uIFOU3wPQY0"
const CHAT_ID = "-4202268939"

const Cart = () => {
    const [person, setPerson] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [textValue, setText] = useState("")

    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleOrder = (e) => {
        e.preventDefault()
        let text = "Buyurtma %0A%0A"
        text += `Ismi Familyasi: ${person} %0A`
        text += `Email: ${email} %0A`
        text += `Telefon: ${number} %0A`
        text += `Address: ${address} %0A%0A`
        text += `: ${text} %0A`


        let quantity = 1
        cart.forEach(el => {
            text += `<b>Maxsulot: ${quantity}</b> %0A%0A`
            text += `Nomi: ${el.title} %0A`
            text += `Miqdori: ${el.quantity} %0A`
            text += `Narxi: ${el.price} %0A%0A`
            quantity++
        })

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
        toast.success("Buyurtma qabul qilindi, tez orada siz bilan bog'lanamiz")
        dispatch(clearCart())
        window.scrollTo(0, 0)
    }

    return (
        <>
            {
                cart.length ? <section id="cart">
                    <div className="container cart">
                        <Breadcrumb />
                        <h2 className="cart__title">
                            Корзина
                            <span className="cart__title__length">{cart.length}</span>
                        </h2>

                        <div className="cart__table">

                            <div className="cart__table__header">
                                <p>Фото</p>
                                <p>Товары</p>
                                <p>Описание</p>
                                <p>Артикул</p>
                                <p>Количество</p>
                            </div>

                            <div className="cart__table__wrapper">
                                {
                                    cart?.map(el => (
                                        <div key={el.id} className="cart__table__item">
                                            <div className="cart__table__frame">
                                                <img src={el.image} className='cart__table__item__img' alt="" />
                                            </div>
                                            <div className="cart__table__first__col">
                                                <p className='cart__table__item__title'>{el.title}</p>
                                                <p className='cart__table__item__price'>
                                                    {el.price * el.quantity}₽
                                                </p>
                                            </div>
                                            <p className="cart__table__description">{el.description}</p>
                                            <p className="cart__table__articul">
                                                RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
                                            </p>
                                            <div className="cart__table__count__box">
                                                <button disabled={el.quantity === 1} onClick={() => dispatch(decCart(el))} className="cart__table__count__minus">-</button>
                                                <span className="cart__table__count__number">{el.quantity}</span>
                                                <button onClick={() => dispatch(incCart(el))} className="cart__table__count__plus">+</button>
                                            </div>
                                            <button onClick={() => dispatch(removeFromCart(el))} className="cart__table__delete__btn">
                                                <FaRegTrashCan />
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <form onSubmit={handleOrder} className="cart__form">
                            <div className="cart__order">
                                <h3 className="cart__form__title">Оформление</h3>
                                <div className="cart__order__header">
                                    <input
                                        required
                                        value={person}
                                        onChange={(e) => setPerson(e.target.value)}
                                        type="text"
                                        placeholder='ФИО'
                                    />
                                    <input
                                        required
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                        type="text"
                                        placeholder='телефон'
                                    />
                                    <input
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        placeholder='Электронная почта'
                                    />
                                </div>

                                <div className="cart__order__delivery">
                                    <h3 className="cart__form__title">Доставка</h3>
                                    <input
                                        required
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        type="text"
                                        placeholder='Адрес доставки'
                                    />
                                    <textarea
                                        required
                                        value={textValue}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder='Комментарий'
                                        name="" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>

                            <div className="cart__payment">
                                <h3 className="cart__form__title">Оплата</h3>
                                <div className="cart__payment__header">
                                    <div className="cart__payment__header__item">
                                        <p>Товары</p>
                                        <p>12 300₽</p>
                                    </div>
                                    <div className="cart__payment__header__item">
                                        <p>Доставка</p>
                                        <p>580₽</p>
                                    </div>
                                </div>
                                <p className="cart__payment__total__price">12 800₽</p>

                                <div className="cart__payment__bottom">
                                    <button type='submit' className="cart__payment__buy__btn">
                                        Купить
                                    </button>
                                    <p>
                                        <SiTicktick />
                                        Я согласен наобработку моих персональных данных
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                    : <EmptyCart />
            }

        </>
    );
};

export default memo(Cart);
