import React from 'react';
import { navLinks } from '../data/utils';

const NavLinks = () => {
  return (
    <>
      {navLinks.map(({ id, url, text }) => {
        return (
          <li key={id}>
            <a href={url} className="link scroll-link">
              {text}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
