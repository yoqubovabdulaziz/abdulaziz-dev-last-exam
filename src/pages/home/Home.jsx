import React, { memo } from 'react'
import "./Home.scss"
import HeroBanner from '../../components/hero-banner/HeroBanner'
import Catalog from '../../components/catalog/Catalog'
import Norlight from '../../components/norlight/Norlight'
import Products from '../../components/products/Products'
import { useGetProductQuery } from '../../context/productApi'
import { useState } from 'react'
import Loading from '../../components/loading/Loading'
import Brands from '../../components/brands/Brands'
import BlogComp from '../../components/blog/Blog'

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
            <Brands />
            <BlogComp />
            <section id="production">
                <div className="container production">
                    <h2 className='production__title'>Производство <br /> светильников</h2>
                    <p className='production__description'>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /> <br /> Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                </div>
            </section>
        </>
    )
}

export default memo(Home)