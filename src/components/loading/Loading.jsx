import React, { memo } from 'react'
import "./Loading.scss"

const Loading = () => {
    return (
        <div className="loading__box">
            <div className='loader'></div>
        </div>
    )
}

export default memo(Loading)

