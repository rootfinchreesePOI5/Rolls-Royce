import React, { useState, useEffect } from 'react';
import menubar from '../../assets/rolls-images/menu.svg';
import logo from '../../assets/rolls-images/logo.png';
import loc from '../../assets/rolls-images/loc.svg';
import infinity from '../../assets/rolls-images/infinity.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for overlay menu

  // Toggle overlay menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll position check
  function onscrollheader() {
    setIsScrolled(window.scrollY > 50);
  }

  useEffect(() => {
    window.addEventListener('scroll', onscrollheader);
    return () => {
      window.removeEventListener('scroll', onscrollheader);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className={isScrolled ? 'scrolled' : ''}>
        <nav className='navbar'>
          <div className='logo' onClick={toggleMenu}> {/* Added onClick for overlay menu */}
            <img src={menubar} alt="menu icon" />
          </div>
          {/* Display logo or infinity icon based on scroll state */}
          <img className='rolls' src={isScrolled ? infinity : logo} alt="logo" />
          <div className='location'>
            <div className='icon'>
              <img src={loc} alt="location icon" />
            </div>
            <div className='loc-name'>
              <p>Dubai</p>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="overlay-menu">
          <button className="close-btn" onClick={toggleMenu}>×</button>
          <ul className="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Models</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
