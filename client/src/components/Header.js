import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/passengers">All Passengers</Link>
            <Link to="/charts">Charts</Link>
        </nav>
    )
}

export default Header