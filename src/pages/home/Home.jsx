import React, { memo } from 'react'
import "./Home.scss"
import HeroBanner from '../../components/hero-banner/HeroBanner'
import Catalog from '../../components/catalog/Catalog'
import Norlight from '../../components/norlight/Norlight'
import Products from '../../components/products/Products'

const Home = () => {

    return (
        <>
            <HeroBanner />
            <Catalog />
            <Norlight />
            <Products />
        </>
    )
}

export default memo(Home)