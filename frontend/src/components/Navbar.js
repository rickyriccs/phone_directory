import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="logo">DigiRiccs</a>
          <button className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          </button>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/blogs" className="nav-link">Blogs</a>
          <a href="/find-chemist" className="nav-link">Find Chemist</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
          <a href="/signin" className="nav-link signin-btn">Sign In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;