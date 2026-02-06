import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const closeMenu = () => setShowMenu(false);

  const sections = ['home', 'about', 'education', 'projects', 'certificates', 'tools', 'contact'];

  /* =========================
     LOAD SAVED THEME
  ========================= */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      setLightMode(true);
    }
  }, []);

  /* =========================
     TOGGLE THEME
  ========================= */
  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');

    const isLight = document.body.classList.contains('light-theme');
    setLightMode(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => scroll.scrollToTop()}
        style={{ cursor: 'pointer' }}
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter') scroll.scrollToTop(); }}
      />

      {/* Desktop Menu */}
      <div className="desktopMenu">
        {sections.map((section) => (
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

      {/* Right Controls */}
      <div className="navControls">

        {/* Theme Toggle */}
        <button
          className="themeToggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle light/dark mode"
        >
          {lightMode ? '😴' : '🌞'}
        </button>

        // {/* Contact Button */}
        // <button
        //   className="desktopMenuBtn"
        //   onClick={() => {
        //     document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        //   }}
        // >
        //   <img src={contactImg} alt="" className="desktopMenuImg" />
        //   Contact
        // </button>

        {/* Mobile Menu Icon */}
        <img
          src={menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Mobile Nav Menu */}
      {showMenu && (
        <div className="navMenu" role="menu">
          {sections.map((section) => (
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

