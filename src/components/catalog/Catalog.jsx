import React from 'react'
import "./Catalog.scss"

import { GoArrowRight } from "react-icons/go";

import { Link, NavLink } from 'react-router-dom'
import { CATALOG_DATA } from '../../static';

import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Catalog = () => {
    return (
        <>
            <section id="catalog">
                <div className="container catalog">
                    <div className="catalog__header">
                        <h2 className="catalog__title">Каталог</h2>
                        <Link className='catalog__header__link'>
                            Весь каталог
                            <GoArrowRight />
                        </Link>
                    </div>
                    <div className="catalog__wrapper">
                        {
                            CATALOG_DATA.map(el => (
                                <div key={el.id} className="home__catolog__card">
                                    <div className="home__catolog__context">
                                        <p className="home__catolog__title">{el.title}</p>
                                        <NavLink className="home__catolog__link">
                                            От 540₽
                                            <GoArrowRight />
                                        </NavLink>
                                    </div>
                                    <img src={el.image} alt="catolog1" className="home__catolog__img" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="catalog__res">
                        <Swiper
                            modules={[Pagination, A11y]}
                            spaceBetween={50}
                            slidesPerView={2}
                            pagination={{ clickable: true }}
                        >
                            {
                                CATALOG_DATA.map(el => (
                                    <SwiperSlide key={el.id}>
                                        <div className="home__catolog__card">
                                            <div className="home__catolog__context">
                                                <p className="home__catolog__title">{el.title}</p>
                                                <button className="home__catolog__link">
                                                    От 540₽{" "}
                                                    <GoArrowRight />
                                                </button>
                                            </div>
                                            <img src={el.image} alt="catolog1" className="home__catolog__img" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Catalog