import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="section-center">
        <SocialIcons />
        <p className="footer-text">
          copyright &copy; <span id="date">2021</span>. all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
