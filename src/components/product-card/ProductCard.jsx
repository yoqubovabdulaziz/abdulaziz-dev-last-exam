import React, { memo } from 'react'
import "./ProductCard.scss"

import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";

import card from "../../assets/images/card.png"
import test from "../../assets/images/test.jpg"

const ProductCard = ({ id, title, description, price, oldPrice, image, category }) => {

    return (
        <>
            <div className="card">
                <button className="card__like__btn">
                    <FaRegHeart />
                </button>
                <div className="card__frame">
                    <img src={image} alt="" />
                </div>
                <div className="card__content">
                    <p className="card__category">{category}</p>
                    <h3 className="card__title">{title}</h3>
                    <div className="card__bottom">
                        <div className="card__price__wrapper">
                            <del className='card__old__price'>{oldPrice}₽</del>
                            <p className="card__price">{price}₽</p>
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