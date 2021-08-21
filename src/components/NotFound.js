import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>Not found page</h1>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default NotFound
