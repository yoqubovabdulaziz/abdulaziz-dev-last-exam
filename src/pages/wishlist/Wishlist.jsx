import React, { memo } from 'react'
import "./Wishlist.scss"


const Wishlist = () => {
    return (
        <>
            <section id="wishlist">
                <div className="wishlist container">
                    <h2>Wishlist</h2>
                </div>
            </section>
        </>
    )
}

export default memo(Wishlist)