import React, { memo, useEffect } from 'react'
import "./SingleProduct.scss"

import { FaHeart, FaRegHeart } from "react-icons/fa6";

import socialIcon1 from "../../assets/images/single-icon1.png"
import socialIcon2 from "../../assets/images/single-icon2.png"
import socialIcon3 from "../../assets/images/single-icon3.png"
import socialIcon4 from "../../assets/images/single-icon4.png"
import socialIcon5 from "../../assets/images/single-icon5.png"

import Breadcrumb from '../../components/breadCrumb/BreadCrumb'
import { useParams } from 'react-router-dom'
import { useGetProductSingleQuery } from '../../context/productApi'
import Loading from '../../components/loading/Loading';
import { addToCart, decCart, incCart, removeFromCart } from '../../context/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from '../../context/wishlistSlice';


const SingleProduct = () => {
    const { id } = useParams()
    const { data: product, isLoading } = useGetProductSingleQuery(id)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const cart = useSelector(state => state.cart.value)
    const wishlist = useSelector(state => state.wishlist.value)
    const dispatch = useDispatch()

    let findCartProduct = cart?.find(pr => pr.id == +id)


    return (
        <>
            {isLoading && <Loading />}
            <section id="single__product">
                <div className="container single__product">
                    <Breadcrumb />

                    <div className="single__product__wrapper">

                        <div className="single__product__frames">
                            <img className='single__product__image' src={product?.image} alt="" />
                        </div>

                        <div className="single__product__content">
                            <h3 className="single__product__title">{product?.title}</h3>

                            <div className="single__product__info">
                                <div className="single__product__info__left">
                                    <p>Scott</p>
                                    <p>Артикул : 7655-188</p>
                                    <p>В наличии</p>
                                </div>
                                <div className="single__product__info__right">
                                    <img src={socialIcon1} alt="" />
                                    <img src={socialIcon2} alt="" />
                                    <img src={socialIcon3} alt="" />
                                    <img src={socialIcon4} alt="" />
                                    <img src={socialIcon5} alt="" />
                                </div>
                            </div>

                            <div className="single__product__price__wrapper">
                                <p className='single__product__price'>{product?.price}₽</p>
                                <s className='single__product__oldPrice'>{product?.oldPrice}₽</s>
                            </div>

                            <p className="single__product__description">{product?.description}</p>

                            <div className="single__product__actions__wrapper">
                                {
                                    findCartProduct ? <div className="single__product__count__box">
                                        <button onClick={() => {
                                            dispatch(decCart(findCartProduct))
                                            findCartProduct.quantity === 1 ? dispatch(removeFromCart(findCartProduct)) : <></>
                                        }}>-</button>
                                        <span>{findCartProduct?.quantity}</span>
                                        <button onClick={() => dispatch(incCart(findCartProduct))}>+</button>
                                    </div> :
                                        <button onClick={() => dispatch(addToCart(product))} className="single__product__cart__btn">
                                            В корзину
                                        </button>
                                }
                                <button onClick={() => dispatch(toggleToWishes(product))} className="single__product__wishlist__btn">
                                    {
                                        wishlist.some(el => el.id === id)
                                            ? < FaHeart className='heart__liked' />
                                            : < FaRegHeart />
                                    }
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="single__product__inform">
                        <h3 className="single__product__inform__title">Характеристика</h3>
                        <div className="single__product__inform__box">

                            <div className="single__product__inform__item">
                                <p>Цвет</p>
                                <p>Жёлтый</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Год</p>
                                <p>2016</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Диаметр колеса</p>
                                <p>27.5</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Материал рамы</p>
                                <p>Карбон</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Размер</p>
                                <p>L</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Страна</p>
                                <p>Швейцария</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Производитель</p>
                                <p>Scott</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Покрышки</p>
                                <p>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Рама</p>
                                <p>Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Подседельный Штырь</p>
                                <p>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Седло</p>
                                <p>Ritchey WCS Streem V3 Titanium rails</p>
                            </div>

                            <div className="single__product__inform__item">
                                <p>Вилка</p>
                                <p>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(SingleProduct)