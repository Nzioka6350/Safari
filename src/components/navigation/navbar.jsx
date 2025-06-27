import React from 'react'
import logo from '../../assets/Logo.png'
function navbar() {
  return (
    <div className="navbar">
        <img src={logo} alt='Logo'/>
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

export default navbar