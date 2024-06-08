import React, { memo } from 'react'
import "./Login.scss"

const Login = () => {

    return (
        <>
            <section id="login">
                <div className="container login">
                    <form className="login__box">
                        <h2 className="login__title">Login</h2>
                        <input type="text" placeholder='username' />
                        <input type="text" placeholder='password' />
                        <button className="login__btn">Login</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default memo(Login)