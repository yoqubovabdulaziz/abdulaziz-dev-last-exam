import React, { memo } from 'react'
import "./EmptyCart.scss"
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";


const EmptyCart = () => {
    const navigate = useNavigate()
    return (
        <div className='empty__cart'>
            <h1 className="empty__title">Your cart is empty</h1>
            <button onClick={() => navigate("/")} className='back__home'>
                <FaArrowLeftLong />
                Back to Home
            </button>
        </div>
    )
}

export default memo(EmptyCart)