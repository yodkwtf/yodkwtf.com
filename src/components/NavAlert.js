import React from 'react';
import { Link } from 'react-router-dom';

export const NavAlert = () => {
  return (
    <section className="nav-alert">
      <span>
        🔥 I just created an awesome Python Cheatsheet.{' '}
        <Link to="/links">Download now</Link> for free. 🔥
      </span>
    </section>
  );
};
