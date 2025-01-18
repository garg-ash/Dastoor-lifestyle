import React, { useState } from "react";
import "./Navbar.css";
import logo1 from "../Assets/logo-1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Closes the menu (used for both link click and cancel icon)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar transparent-navbar">
        {/* Logo Section */}
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo1} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className={`nav-hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ourproject" onClick={closeMenu}>
                Our Project
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
