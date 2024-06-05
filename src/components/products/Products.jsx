import React from 'react'
import "./Products.scss"

import { GoArrowRight } from "react-icons/go";

import { Link } from 'react-router-dom'
import ProductCard from '../product-card/ProductCard';

const Products = () => {
    return (
        <>
            <section id="products">
                <div className="container products">
                    <div className="products__header">
                        <h3 className="products__title">Популярные товары</h3>
                        <Link className='products__header__link'>
                            Все товары
                            <GoArrowRight />
                        </Link>
                    </div>
                    <ul className="products__categories">
                        <li className="products__categories__item">
                            <button className="products__categories__btn">
                                Светильники
                            </button>
                        </li>
                        <li className="products__categories__item">
                            <button className="products__categories__btn">
                                Люстры
                            </button>
                        </li>
                        <li className="products__categories__item">
                            <button className="products__categories__btn">
                                Лампы
                            </button>
                        </li>
                        <li className="products__categories__item">
                            <button className="products__categories__btn">
                                Настольные лампы
                            </button>
                        </li>
                        <li className="products__categories__item">
                            <button className="products__categories__btn">
                                Ночники
                            </button>
                        </li>
                        <li className="products__categories__item">
                            <button className="products__categories__btn">
                                Подстветка
                            </button>
                        </li>
                        <li className="products__categories__item">
                            <button className="products__categories__btn">
                                Уличное освещение
                            </button>
                        </li>
                        <li className="products__categories__item">
                            <button className="products__categories__btn">
                                Мебельные установки
                            </button>
                        </li>
                    </ul>
                    <div className="products__wrapper">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products