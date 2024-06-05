import React from 'react'
import "./HeroBanner.scss"
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import banner1 from "../../assets/images/hero-banner1.png";

const HeroBanner = () => {
    return (
        <>
            <section id="hero">
                <Swiper
                    loop={true}
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper hero container"
                >
                    <SwiperSlide className='hero__banner'>
                        <div className="hero__banner__content">
                            <h2 className="banner__title">
                                Скидка 15% <br /> на все подвесные светильники <br /> <span>до 5 февраля</span>
                            </h2>
                        </div>
                        <div className="hero__banner__frame">
                            <img src={banner1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hero__banner'>
                        <div className="hero__banner__content">
                            <h2 className="banner__title">
                                Скидка 15% <br /> на все подвесные светильники <br /> <span>до 5 февраля</span>
                            </h2>
                        </div>
                        <div className="hero__banner__frame">
                            <img src={banner1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hero__banner'>
                        <div className="hero__banner__content">
                            <h2 className="banner__title">
                                Скидка 15% <br /> на все подвесные светильники <br /> <span>до 5 февраля</span>
                            </h2>
                        </div>
                        <div className="hero__banner__frame">
                            <img src={banner1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hero__banner'>
                        <div className="hero__banner__content">
                            <h2 className="banner__title">
                                Скидка 15% <br /> на все подвесные светильники <br /> <span>до 5 февраля</span>
                            </h2>
                        </div>
                        <div className="hero__banner__frame">
                            <img src={banner1} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default HeroBanner