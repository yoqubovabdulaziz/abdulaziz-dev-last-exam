import React, { memo } from 'react'
import "./Wishlist.scss"
import ProductCard from '../../components/product-card/ProductCard'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'
import { useEffect } from 'react'
import Empty from '../../components/empty/Empty'


const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist.value)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section id="wishlist">
                <div className="wishlist container">
                    <h2 className='wishlist__title'>
                        Избранные товары
                        <span>{wishlist.length}</span>
                    </h2>
                    {
                        wishlist.length ? <div className="wishlist__wrapper">
                            {
                                wishlist.map(el => (
                                    <ProductCard
                                        key={el.id}
                                        el={el}
                                        id={el.id}
                                        title={el.title}
                                        description={el.description}
                                        price={el.price}
                                        oldPrice={el.oldPrice}
                                        image={el.image}
                                        category={el.category}
                                    />))
                            }
                        </div> : <Empty />
                    }
                </div>
            </section>
        </>
    )
}

export default memo(Wishlist)