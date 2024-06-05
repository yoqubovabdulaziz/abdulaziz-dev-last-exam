import React, { memo } from 'react'
import "./empty.scss"

const Empty = () => {
    return (
        <div className='empty'>
            <h1>Nothing Here</h1>
        </div>
    )
}

export default memo(Empty)