import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

export const Contact = () => {
  // jsx
  return (
    <div className="contact" id="contact">
      <div className="contact-center">
        {/* info */}
        <article className="contact-info">
          <h2>get in touch</h2>
          <p>
            Have a project you'd like to discuss? Just leave me a message and
            I'll get back to you within 24 hours.
          </p>
          <Link to="/contact" className="btn">
            send details <FaRocket className="fa" />
          </Link>
        </article>

        {/* icons */}
        <article className="social-icons" id="follow">
          <h4>Social Links</h4>
          <div className="social-icons-container">
            <SocialIcons />
          </div>
        </article>
      </div>
    </div>
  );
};
