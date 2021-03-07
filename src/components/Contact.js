import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
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
          <p>Have a project you'd like to discuss?</p>
          <Link to="/Contact" className="btn">
            send details <FaPaperPlane />
          </Link>
        </article>

        {/* icons */}
        <article className="social-icons" id="follow">
          <h4>Follow to stay updated</h4>
          <div className="social-icons-container">
            <SocialIcons />
          </div>
        </article>
      </div>
    </div>
  );
};
