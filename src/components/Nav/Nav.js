import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <header>
        <nav>
            <ul className='Nav__links'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/services'>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav