import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="brand">
          SAFARIBRO'S <span>SHIPPING</span>
        </h1>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Our Products</li>
        <li>Our Services</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
}

export default Navbar;
