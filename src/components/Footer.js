import React from 'react';
import react from '../images/skills/react.svg';
import airtable from '../images/skills/airtable.svg';

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
          Find an issue with this page?{' '}
          <a
            href="https://github.com/yodkwtf/yodkwtf.com"
            target="_blank"
            rel="noreferrer"
            title="Full Source Code"
          >
            Fix it on GitHub
          </a>
        </p>

        <p>Copyright &copy; {date}. All Rights Reserved.</p>

        <p className="footer-text-2">
          {' '}
          Created with
          <span className="footer-img-block">
            <img src={react} alt="react-js" className="footer-img" />{' '}
            <img src={airtable} alt="airtable" className="footer-img" />
          </span>
          {'  '}
          by{'  '}
          <a
            href="https://twitter.com/yodkwtf"
            target="_blank"
            rel="noreferrer"
            title="My Twitter Account"
          >
            Durgesh
          </a>
        </p>
      </div>
    </footer>
  );
};
