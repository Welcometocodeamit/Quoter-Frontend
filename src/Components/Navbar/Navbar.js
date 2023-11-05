import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbarmain'>
            <div>
                <li style={{listStyle:'none'}} className='rightnav'>
                    <Link to='/' className='list'><ul >Quoter</ul></Link>
                    <Link to='/about' className='list'><ul >About</ul></Link>
                </li>
            </div>
        </nav>
  )
}
