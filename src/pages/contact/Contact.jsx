import React, { memo, useEffect } from 'react'
import "./Contact.scss"
import Breadcrumb from '../../components/breadCrumb/BreadCrumb'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section id="contact">
                <div className="container contact">
                    <Breadcrumb />
                    <div className="contact__header">
                        <h2 className="contact__title">Контакты</h2>
                        <div className="contact__header__right">
                            <p>8 (800) 890-46-56</p>
                            <p>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину</p>
                            <p>Телефоны</p>
                        </div>
                    </div>
                </div>
                <div className="container__1800 cotact__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.25298617416!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YI!5e0!3m2!1sru!2s!4v1717957871841!5m2!1sru!2s"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="contact__map__info">
                        <div className="contact__map__infp__box">
                            <h5>Адрес магазина</h5>
                            <p>г. Москва, Дмитровское шоссе д.100с2</p>
                        </div>
                        <div className="contact__map__infp__box">
                            <h5>Почта</h5>
                            <p>NORNLIGHT@mail.ru</p>
                        </div>
                        <div className="contact__map__infp__box">
                            <h5>Телефон</h5>
                            <p>8 (800) 890-46-56</p>
                        </div>
                        <div className="contact__map__infp__box">
                            <button>Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Contact)