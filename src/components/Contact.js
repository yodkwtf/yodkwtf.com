import React from 'react';
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
            <strong>Have a project you'd like to discuss?</strong> Just leave me
            a message and I'll get back to you within 24 hours.
          </p>
          <Link to="/contact" className="btn">
            send details 🚀
          </Link>
        </article>

        {/* icons */}
        <article className="social-icons" id="follow">
          <h4>Connect With Me Now!</h4>
          <div className="social-icons-container">
            <SocialIcons />
          </div>
        </article>
      </div>
    </div>
  );
};
