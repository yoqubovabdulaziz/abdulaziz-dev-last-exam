import React from 'react';
import "./Blog.scss";

import { GoArrowRight } from 'react-icons/go';
import { FiArrowRight } from "react-icons/fi";

import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

import { NavLink } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const BlogComp = () => {
    return (
        <section id="blog">
            <div className="container blog">
                <div className="blog__header">
                    <h2 className="blog__title">Блог</h2>
                    <NavLink className="blog__header__link">
                        Перейти в блог
                        <GoArrowRight />
                    </NavLink>
                </div>
                <div className="blog__wrapper">
                    <div className="blog__card">
                        <div className="blog__card__frame">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="blog__card__content">
                            <div className="blog__card__content__top">
                                <h4 className="blog__card__title">
                                    Как правильно освещать дом снаружи?
                                </h4>
                                <FiArrowRight />
                            </div>
                            <p className="blog__card__date">01.01.2024</p>
                        </div>
                    </div>
                    <div className="blog__card">
                        <div className="blog__card__frame">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="blog__card__content">
                            <div className="blog__card__content__top">
                                <h4 className="blog__card__title">
                                    Как правильно освещать дом снаружи?
                                </h4>
                                <FiArrowRight />
                            </div>
                            <p className="blog__card__date">01.01.2024</p>
                        </div>
                    </div>
                    <div className="blog__card">
                        <div className="blog__card__frame">
                            <img src={blog3} alt="" />
                        </div>
                        <div className="blog__card__content">
                            <div className="blog__card__content__top">
                                <h4 className="blog__card__title">
                                    Как правильно освещать дом снаружи?
                                </h4>
                                <FiArrowRight />
                            </div>
                            <p className="blog__card__date">01.01.2024</p>
                        </div>
                    </div>
                </div>

                <Swiper
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper blog__wrapper__res">
                    <SwiperSlide className="blog__card">
                        <div className="blog__card__frame">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="blog__card__content">
                            <div className="blog__card__content__top">
                                <h4 className="blog__card__title">
                                    Как правильно освещать дом снаружи?
                                </h4>
                                <FiArrowRight />
                            </div>
                            <p className="blog__card__date">01.01.2024</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="blog__card">
                        <div className="blog__card__frame">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="blog__card__content">
                            <div className="blog__card__content__top">
                                <h4 className="blog__card__title">
                                    Как правильно освещать дом снаружи?
                                </h4>
                                <FiArrowRight />
                            </div>
                            <p className="blog__card__date">01.01.2024</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="blog__card">
                        <div className="blog__card__frame">
                            <img src={blog3} alt="" />
                        </div>
                        <div className="blog__card__content">
                            <div className="blog__card__content__top">
                                <h4 className="blog__card__title">
                                    Как правильно освещать дом снаружи?
                                </h4>
                                <FiArrowRight />
                            </div>
                            <p className="blog__card__date">01.01.2024</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default BlogComp;
