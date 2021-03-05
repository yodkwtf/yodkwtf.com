import React from 'react';
import { navLinks } from '../data/utils';
import { AppContext } from '../context';

const NavLinks = () => {
  // function from context
  const { smoothScroll } = React.useContext(AppContext);

  // jsx
  return (
    <>
      {navLinks.map(({ id, url, text }) => {
        return (
          <li key={id}>
            <a href={url} className="link" onClick={(e) => smoothScroll(e)}>
              {text}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
