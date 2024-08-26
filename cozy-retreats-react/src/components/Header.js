// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src="https://live.staticflickr.com/65535/53927669163_045dc389bf.jpg" alt="Your Cozy Retreats Logo" width="500" height="40" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cabin1">Cabin 1</Link></li>
          <li><Link to="/cabin2">Cabin 2</Link></li>
          <li><Link to="/cabin3">Cabin 3</Link></li>
          <li><Link to="/attractions">Things to check out in Nebraska City</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;