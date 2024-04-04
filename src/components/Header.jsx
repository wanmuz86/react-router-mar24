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
            <li><NavLink to="/products" className={({ isActive, isPending }) =>
            isActive 
            ? "active"
            : isPending 
            ? "pending" 
            : ""}>Products</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header