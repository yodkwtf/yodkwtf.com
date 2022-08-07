import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AppContext } from '../context';

const ToggleTheme = () => {
  // data from context
  const { theme, switchTheme } = React.useContext(AppContext);

  // jsx
  return (
    <span
      className="toggle-theme btn"
      onClick={switchTheme}
      title={
        theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'
      }
    >
      {theme === 'light' ? <FaMoon className="fa" /> : <FaSun className="fa" />}
    </span>
  );
};

export default ToggleTheme;
