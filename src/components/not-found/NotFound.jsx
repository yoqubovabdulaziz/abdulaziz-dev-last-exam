import React, { memo, useEffect } from 'react'
import "./notfound.scss"
import { useNavigate } from 'react-router-dom';


function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section id="not__found">
            <div className="container not__found">
                <h2 className="not__found__title">404</h2>
                <p className="not__found__description">Похоже, ничего не нашлось :(</p>
                <button onClick={() => navigate("/")} className="not__found__btn">
                    На главную
                </button>
            </div>
        </section>
    )
}

export default memo(NotFound)