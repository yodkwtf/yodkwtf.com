import React from 'react';
import ToggleTheme from './ToggleTheme';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';

export const NavForPages = () => {
  // function from context
  const { scrolled } = React.useContext(AppContext);

  // jsx
  return (
    <nav className={`${scrolled ? 'nav-fixed nav-2' : 'nav-2'}`}>
      <div className="nav-center">
        <Link to="/">
          <h5 className="logo">&#60;YODKWTF&#62;</h5>
        </Link>
        <div></div>
        <ToggleTheme />
      </div>
    </nav>
  );
};
