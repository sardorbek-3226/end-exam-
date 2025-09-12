import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container navbar__list'>
      <div className='logo' style={{display:"flex", alignItems:"center", gap:"10px"}}>
        <img src="https://picsum.photos/50/50" alt="logo" style={{borderRadius:"50%"}}/>
        <h4 style={{fontSize:"2rem", font:"semiBold", }}>Healthy Recipe Finder</h4>
      </div>
      <ul className='nav' style={{display:"flex", alignItems:"center", gap:"4rem", font:"600", fontSize:"18px"}}>
        <li className='nav__link'><Link to="/">Home</Link></li>
        <li className='nav__link'><Link to="/about">About</Link></li>
        <li className='nav__link'><Link to="/receipes">Recipes</Link></li>
      </ul>
      <button className='btn button'>Browse recipes</button>
    </div>
    </div>
  )
}

export default Navbar
