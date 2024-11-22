import React, { useState } from 'react';
import './Navbar.css';
import { BiMenu } from 'react-icons/bi';
import { TiTimes } from 'react-icons/ti';

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Saikiran Goud Tirumani</h2>
      </div>
      <div className={Mobile ? "nav-links active" : "nav-links"}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <button
        className="toggle"
        onClick={() => setMobile(!Mobile)}
        aria-label={Mobile ? "Close Menu" : "Open Menu"}
      >
        {Mobile ? <TiTimes className="icon" /> : <BiMenu className="icon" />}
      </button>
    </nav>
  );
};

export default Navbar;
