import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <nav>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/passengers">All Passengers</Link>
            <Link className="link" to="/charts">Add Passenger</Link>
        </nav>
    )
}

export default Header