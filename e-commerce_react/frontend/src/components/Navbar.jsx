import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
        <div className="left">
             <h2>Shopy</h2>
        </div>
        <div className='search'>
            <input type="text" />
        </div>
        <div className="right">
            <i className="ri-shopping-cart-fill "></i>
        </div>
    </nav>
  )
}

export default Navbar
