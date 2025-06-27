import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
function Navbar() {
  return (
    <div className="navbar">
        <img src={logo} alt='Logo' className='logo'/>
        <h1>SAFARIBROS <span>SHIPPING</span></h1>
        <ul>
            <li>Home</li>
             <li>About</li>
              <li>Our Products</li>
               <li>Our Services</li>
                <li>Contacts</li>
        </ul>
    </div>
  )
}

export default Navbar