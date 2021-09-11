import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Logo = () => {
  return (
    <Link to="/" className="logo" title="Homepage">
      <img src={logo} alt="yodkwtf" />
      <h5>YODKWTF</h5>
    </Link>
  );
};

export default Logo;
