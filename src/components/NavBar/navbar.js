import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const sections = [
    'home',
    'about',
    'education',
    'projects',
    'certificates',
    'tools',
    'contact'
  ];

  const closeMenu = () => setShowMenu(false);

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
    const next = !lightMode;
    setLightMode(next);

    document.body.classList.toggle('light-theme', next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="logo"
        role="button"
        tabIndex={0}
        onClick={() => scroll.scrollToTop()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scroll.scrollToTop();
          }
        }}
      />

      {/* Desktop Menu */}
      <div className="desktopMenu">
        {sections.map((section) => (
          <Link
            key={section}
            activeClass="active"
            to={section}
            spy
            smooth
            offset={-70}
            duration={500}
            className="desktopMenuListItem"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Right Controls */}
      <div className="navControls">

        {/* Theme Toggle Only */}
        <button
          type="button"
          className="themeToggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {lightMode ? '😴' : '🌞'}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="mobMenu"
          onClick={() => setShowMenu(v => !v)}
          aria-label="Toggle mobile menu"
        >
          <img src={menu} alt="" />
        </button>

      </div>

      {/* Mobile Nav Menu */}
      {showMenu && (
        <div className="navMenu" role="menu">
          {sections.map((section) => (
            <Link
              key={section}
              activeClass="active"
              to={section}
              spy
              smooth
              offset={-70}
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
