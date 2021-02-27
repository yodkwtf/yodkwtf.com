import React from 'react';
import logo from '../images/logo.png';
import { FaChevronCircleDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="nav-center">
        {/* nav-header */}
        <div className="nav-header">
          <a href="#home" className="scroll-link">
            <img src={logo} alt="Logo" className="nav-logo" />
          </a>
          <button className="nav-btn">
            <FaChevronCircleDown />
          </button>
        </div>
        {/* nav-links */}
        <ul className="nav-links">
          <li>
            <a href="#about" className="scroll-link">
              about
            </a>
          </li>
          <li>
            <a href="#projects" className="scroll-link">
              projects
            </a>
          </li>
          <li>
            <a href="#contact" className="scroll-link">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
