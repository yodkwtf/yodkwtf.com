import React from 'react';
import { Link } from 'react-router-dom';
import { NavForPages } from '../components';

const ErrorPage = () => {
  return (
    <section className="page">
      <NavForPages />
      <div className="error-page page-center">
        <div className="section-center ">
          <h2>OOPS! The page you're looking for doesn't exist :/</h2>
          <Link to="/" className="btn">
            back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
