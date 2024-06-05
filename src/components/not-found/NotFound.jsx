import React, { memo, useEffect } from 'react'
import "./notfound.scss"
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='not__fount__box'>
            <h1 className='error_404'><span>404</span> ERROR</h1>
            <h2 className='not_found'>NOT FOUND</h2>
            <button onClick={() => navigate(-1)} className='back__btn'>
                <FaArrowLeft />
                Back
            </button>
        </div>
    )
}

export default memo(NotFound)