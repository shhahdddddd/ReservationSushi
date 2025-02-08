import React from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css';  

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Tawa COO</Link> {/* Use Link instead of a */}
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>  {/* Link to Home */}
          <li><Link to="/menu">Menu</Link></li>  {/* Link to Menu */}
          <li><Link to="/reservation">Reservations</Link></li>  {/* Link to Reservations */}
          <li><Link to="/delievery">Delivery</Link></li>  {/* Link to Delivery */}
          <li><Link to="/contact">Contact</Link></li> 
           {/* Link to Footer */}
        
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
