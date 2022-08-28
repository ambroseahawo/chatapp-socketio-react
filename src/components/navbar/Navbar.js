import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () =>{
  return (
    <nav className="navbar">
      <Link className='navbar-logo' to='/'>SocketIo</Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/messages" className='nav-links'>Messages</Link>
            <button className='nav-links nav-btn'>Logout</button>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar