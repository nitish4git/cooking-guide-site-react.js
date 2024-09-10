import React from 'react'
import '../Navigation-bar/Navbar.css'
import logo from '../../../assets/Navbar/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="nav">
            <ul>
                <li>
                    <img src={logo} alt="logo" />
                </li>
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/recipie">Recipie</NavLink></li>
                <li> <NavLink to="/blog">Blog</NavLink></li>
                <li> <NavLink to="/about">About</NavLink></li>
                <li> <NavLink to="/contact">Contact</NavLink></li>
               
                <li>
                 <a href="#"><button>Order Now</button></a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar