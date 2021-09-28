import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { NavForPages } from '../components';

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist..."
        />
      </Helmet>

      <section className="page">
        <NavForPages />
        <div className="error-page page-center">
          <div className="section-center ">
            <h2>OOPS! The page you're looking for doesn't exist 🙁</h2>
            <Link to="/" className="btn" title="Back to Homepage">
              back to home 🏡
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
