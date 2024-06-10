import React from 'react'
import "./Blog.scss"

import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import { FiArrowRight } from 'react-icons/fi';
import Breadcrumb from '../../components/breadCrumb/BreadCrumb';

const Blog = () => {
    return (
        <section id="blog__page">
            <div className="container blog">
                <Breadcrumb />
                <h2 className="blog__title">
                    Блог
                </h2>
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
            </div>
        </section>
    )
}

export default Blog