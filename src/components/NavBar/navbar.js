import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => scroll.scrollToTop()}
        style={{ cursor: 'pointer' }}
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter') scroll.scrollToTop(); }}
        aria-label="Scroll to top"
      />

      {/* Desktop Menu */}
      <div className="desktopMenu">
        {['home', 'about', 'education', 'projects', 'tools', 'contact'].map((section) => (
          <Link
            key={section}
            activeClass="active"
            to={section}
            spy={true}
            smooth={true}
            offset={section === 'home' ? -100 : -50}
            duration={500}
            className="desktopMenuListItem"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>


      

      {/* Contact Button */}
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to contact section"
      >
        <img src={contactImg} alt="Contact" className="desktopMenuImg" />
        Contact Me
      </button>



      {/* Mobile Menu Icon */}
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
        style={{ cursor: 'pointer' }}
        aria-label="Toggle mobile menu"
      />

      {/* Mobile Nav Menu */}
      {showMenu && (
        <div className="navMenu" role="menu">
          {['home', 'about', 'education', 'projects', 'tools', 'contact'].map((section) => (
            <Link
              key={section}
              activeClass="active"
              to={section}
              spy={true}
              smooth={true}
              offset={section === 'home' ? -100 : -50}
              duration={500}
              className="listItem"
              onClick={closeMenu}
              role="menuitem"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
