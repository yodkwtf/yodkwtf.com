import React from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { FaChevronCircleDown } from 'react-icons/fa';
import { AppContext } from '../context';

const Navbar = () => {
  // function from context
  const { openSidebar } = React.useContext(AppContext);

  // jsx
  return (
    <nav id="nav">
      <div className="nav-center">
        {/* nav-header */}
        <div className="nav-header">
          <Link to="/">
            <h5 className="logo">&#60;YODKWTF&#62;</h5>
          </Link>
          <button className="nav-btn" onClick={openSidebar}>
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
