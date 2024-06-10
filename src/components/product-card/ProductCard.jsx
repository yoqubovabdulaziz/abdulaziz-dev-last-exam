import React, { memo } from 'react'
import "./ProductCard.scss"

import { FiShoppingCart } from "react-icons/fi";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../context/cartSlice';
import { toggleToWishes } from '../../context/wishlistSlice';

const ProductCard = ({ id, title, price, oldPrice, image, category, el }) => {
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.wishlist.value)

    return (
        <>
            <div className="card">
                <button onClick={() => dispatch(toggleToWishes(el))} className="card__like__btn">
                    {
                        wishlist.some(el => el.id === id)
                            ? < FaHeart className='heart__liked' />
                            : < FaRegHeart />
                    }
                </button>
                <div className="card__frame">
                    <Link to={`/single-product/${id}`}>
                        <img src={image} alt="" />
                    </Link>
                </div>
                <div className="card__content">
                    <p className="card__category">{category}</p>
                    <h3 className="card__title">{title}</h3>
                    <div className="card__bottom">
                        <div className="card__price__wrapper">
                            <del className='card__old__price'>{oldPrice}₽</del>
                            <p className="card__price">{price}₽</p>
                        </div>
                        <button onClick={() => dispatch(addToCart(el))} className="card__cart__btn">
                            <FiShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ProductCard)