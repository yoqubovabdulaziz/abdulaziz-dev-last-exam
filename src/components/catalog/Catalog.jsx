import React from 'react'
import "./Catalog.scss"

import { GoArrowRight } from "react-icons/go";

import { Link } from 'react-router-dom'
import { CATALOG_DATA } from '../../static';

const Catalog = () => {
    return (
        <>
            <section id="catalog">
                <div className="container catalog">
                    <div className="catalog__header">
                        <h3 className="catalog__title">Каталог</h3>
                        <Link className='catalog__header__link'>
                            Весь каталог
                            <GoArrowRight />
                        </Link>
                    </div>
                    <div className="catalog__wrapper">
                        {
                            CATALOG_DATA.map((el) => (
                                <div key={el.id} className="catalog__box">
                                    <div className="catalog__box__content">
                                        <p className="catalog__box__title">{el.title}</p>
                                        <Link className='catalog__box__link'>
                                            От 540₽
                                            <GoArrowRight />
                                        </Link>
                                    </div>
                                    <div className="catalog__box__frame">
                                        <img src={el.image} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Catalog