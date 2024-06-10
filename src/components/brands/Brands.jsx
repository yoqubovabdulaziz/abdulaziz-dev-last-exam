import React from 'react'
import "./Brands.scss"

import brand1 from "../../assets/images/brand1.png"
import brand2 from "../../assets/images/brand2.png"
import brand3 from "../../assets/images/brand3.png"
import { memo } from 'react'

const Brands = () => {



    return (
        <section id="brands">
            <div className="container brands">
                <h2 className="brands__title">Только проверенные бренды</h2>
                <div className="brands__marquee">
                    <div className="marquee__content">
                        <img src={brand1} alt="" />
                        <img src={brand2} alt="" />
                        <img src={brand3} alt="" />
                        <img src={brand1} alt="" />
                        <img src={brand1} alt="" />
                        <img src={brand2} alt="" />
                        <img src={brand3} alt="" />
                        <img src={brand1} alt="" />
                        <img src={brand2} alt="" />
                        <img src={brand3} alt="" />
                        <img src={brand1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Brands)