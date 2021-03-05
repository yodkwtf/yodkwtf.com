import React from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { FaChevronCircleDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="nav-center">
        {/* nav-header */}
        <div className="nav-header">
          <Link to="/">
            <h5 className="logo">&#60;YODKWTF&#62;</h5>
          </Link>
          <button className="nav-btn">
            <FaChevronCircleDown />
          </button>
        </div>
        {/* nav-links */}
        <ul className="nav-links">
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
