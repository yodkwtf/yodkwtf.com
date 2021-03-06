import React from 'react';
import { Link } from 'react-router-dom';
import { NavForPages } from '../components';

const ErrorPage = () => {
  return (
    <section className="page">
      <NavForPages />
      <div className="section section-center page-center error-page">
        <h1>OOPS! The page you're looking for doesn't exist :/</h1>
        <Link to="/" className="btn">
          back to home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
