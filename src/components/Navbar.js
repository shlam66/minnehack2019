import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
    <nav style={{backgroundColor: "#02B45B"}}>
        <ul>
            <li>
                <Link to="/">Main Page</Link>
            </li>
            <li>
                <Link to="/about/">Why Hemp</Link>
            </li>
            <li>
                <Link to="/contracts/">Contracts</Link>
            </li>
            <li>
                <Link to="/logging/">Logging</Link>
            </li>
            <li>
                <Link to="/data/">Data Sets</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar