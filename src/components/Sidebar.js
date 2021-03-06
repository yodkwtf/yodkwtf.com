import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from '../context';
import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';

export const Sidebar = () => {
  // function from context
  const { isSidebarOpen, closeSidebar } = React.useContext(AppContext);

  // jsx
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      {/* sidebar-header */}
      <div className="sidebar-header">
        <Link to="/">
          <h5 className="logo">&#60;YODKWTF&#62;</h5>
        </Link>
        <button className="close-btn" onClick={closeSidebar}>
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
