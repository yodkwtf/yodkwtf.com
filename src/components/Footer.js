import React from 'react';

export const Footer = () => {
  // states
  const [date, setDate] = React.useState(2021);

  // useEffect
  React.useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  // jsx
  return (
    <footer id="footer" className="footer">
      <div className="section-center">
        <p className="footer-text">
          &copy; <span>{date}</span> Yodkwtf. All rights reserved. Built with{' '}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            title="Reactjs - Official Website"
          >
            Reactjs
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
