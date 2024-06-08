import React, { memo } from 'react'
import "./Home.scss"
import HeroBanner from '../../components/hero-banner/HeroBanner'
import Catalog from '../../components/catalog/Catalog'
import Norlight from '../../components/norlight/Norlight'
import Products from '../../components/products/Products'
import { useGetProductQuery } from '../../context/productApi'
import { useState } from 'react'
import Loading from '../../components/loading/Loading'

const Home = () => {
    const [productLimit, setProductLimit] = useState(8)
    const { data, error, isLoading } = useGetProductQuery()

    return (
        <>
            {isLoading && <Loading />}
            <HeroBanner />
            <Catalog />
            <Norlight />
            <Products
                data={data?.slice(0, productLimit)}
                setProductLimit={setProductLimit}
            />
        </>
    )
}

export default memo(Home)