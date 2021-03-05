import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* sidebar-header */}
      <div className="sidebar-header">
        <Link to="/">
          <h5 className="logo">&#60;YODKWTF&#62;</h5>
        </Link>
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <hr />

      {/* sidebar-links */}
      <ul className="sidebar-links">
        <NavLinks />
      </ul>

      {/* sidebar-icons */}
      <div className="sidebar-icons">
        <h4>Follow to stay updated</h4>
        <div className="icons-container">
          <SocialIcons />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
