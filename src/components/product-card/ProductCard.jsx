import React, { memo } from 'react'
import "./ProductCard.scss"

import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";

import card from "../../assets/images/card.png"

const ProductCard = () => {

    return (
        <>
            <div className="card">
                <button className="card__like__btn">
                    <FaRegHeart />
                </button>
                <div className="card__frame">
                    <img src={card} alt="" />
                </div>
                <div className="card__content">
                    <h3 className="card__title">Встраиваемый светильник Novotech</h3>
                    <div className="card__bottom">
                        <div className="card__price__wrapper">
                            <del className='card__old__price'>7 000₽</del>
                            <p className="card__price">6 399₽</p>
                        </div>
                        <button className="card__cart__btn">
                            <FiShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ProductCard)