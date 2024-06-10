import React, { memo } from 'react'
import "./Login.scss"
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    // username: john32
    // password: 87654321

    const handleLogin = (e) => {
        e.preventDefault()

        if (username === "john32" && password === "87654321") {
            toast.success("Welcome to Admin")
            localStorage.setItem("token", "token")
            navigate("/admin")
        } else {
            toast.error("Wrong username or password")
            setUsername("")
            setPassword("")
            return
        }
    }
    return (
        <>
            <section id="login">
                <div className="container login">
                    <form onSubmit={handleLogin} className="login__box">
                        <h2 className="login__title">Login</h2>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password' />
                        <button className="login__btn">Login</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default memo(Login)