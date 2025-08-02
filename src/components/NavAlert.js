import React from 'react';
import { Link } from 'react-router-dom';

export const NavAlert = () => {
  return (
    <section className="nav-alert">
      <span>
        🚀 Looking to hire a Software Developer? Please review{' '}
        <Link to="/links">my resume</Link> and projects. 🚀
      </span>
    </section>
  );
};
