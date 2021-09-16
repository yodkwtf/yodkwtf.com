import React from 'react';
import ToggleTheme from './ToggleTheme';
import { AppContext } from '../context';
import Logo from './Logo';

export const NavForPages = () => {
  // function from context
  const { scrolled } = React.useContext(AppContext);

  // jsx
  return (
    <nav className={`${scrolled ? 'nav-fixed nav-2' : 'nav-2'}`}>
      <div className="nav-center">
        <Logo />
        <div></div>
        <ToggleTheme />
      </div>
    </nav>
  );
};
