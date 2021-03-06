import React from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { AppContext } from '../context';

const ToggleTheme = () => {
  // data from context
  const { theme, switchTheme } = React.useContext(AppContext);

  // jsx
  return (
    <span className="toggle-theme" onClick={switchTheme}>
      {theme === 'light' ? (
        <FaToggleOff className="fa" />
      ) : (
        <FaToggleOn className="fa" />
      )}
    </span>
  );
};

export default ToggleTheme;
