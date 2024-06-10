import React, { memo } from 'react'
import "./empty.scss"

const Empty = () => {
    return (
        <div className='empty'>
            <h1>Empty Wishlist :(</h1>
        </div>
    )
}

export default memo(Empty)