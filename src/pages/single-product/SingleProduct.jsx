import React, { memo } from 'react'
import "./SingleProduct.scss"


const SingleProduct = () => {
    return (
        <>
            <section id="single__product">
                <div className="container single__product">
                    <h2>Single Product</h2>
                </div>
            </section>
        </>
    )
}

export default memo(SingleProduct)