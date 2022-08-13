import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from '../context';
import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';
import ToggleTheme from './ToggleTheme';
import Logo from './Logo';

export const Sidebar = () => {
  // function from context
  const { isSidebarOpen, closeSidebar } = React.useContext(AppContext);

  // jsx
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      {/* sidebar-header */}
      <div className="sidebar-header">
        <div className="sidebar-header-col">
          <Logo />
          <ToggleTheme />
        </div>
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
        <h4>Social Links</h4>
        <div className="icons-container">
          <SocialIcons />
        </div>
      </div>
    </aside>
  );
};
