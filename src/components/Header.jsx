import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>React Router example</h1>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive, isPending }) =>
            isActive 
            ? "active"
            : isPending 
            ? "pending" 
            : ""}>Home</NavLink></li>
          <li>
            <NavLink to="/about" className={({ isActive, isPending }) =>
            isActive 
            ? "active"
            : isPending 
            ? "pending" 
            : ""}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive, isPending }) =>
            isActive 
            ? "active"
            : isPending 
            ? "pending" 
            : ""}>Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header