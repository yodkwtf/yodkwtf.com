import React from 'react';

const Footer = () => {
  // states
  const [date, setDate] = React.useState(2021);

  React.useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  // jsx
  return (
    <footer id="footer" className="footer">
      <div className="section-center">
        <p className="footer-text">
          copyright &copy; <span>{date}</span>. all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
