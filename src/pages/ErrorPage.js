import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Head, NavForPages } from '../components';

const ErrorPage = () => {
  return (
    <>
      <Head title={'404 | Page Not Found'} />

      <section className="page">
        <NavForPages />
        <div className="error-page page-center">
          <div className="section-center ">
            <h2>OOPS! The page you're looking for doesn't exist 🙁</h2>
            <Link to="/" className="btn" title="Back to Homepage">
              back to home <FaHome className="fa" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
