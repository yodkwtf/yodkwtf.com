import React from 'react';
import { Link } from 'react-router-dom';
import { NavForPages } from '../components';

const ContactPage = () => {
  return (
    <section className="page">
      {/* navbar */}
      <NavForPages />

      <div className="page-center contact-page">
        {/* title */}
        <div className="section-title page-title">
          <h2>
            <span>contact</span> me
          </h2>
          <div className="underline"></div>
          <p>
            {' '}
            If you want to work with me please fill the form below and I'll get
            back to you within 24 hours.
            <br />
            Alternatively, you can also send me an email on{' '}
            <a href="mailto:48durgesh.kumar@gmail.com">
              48durgesh.kumar@gmail.com
            </a>
          </p>
        </div>

        {/* form */}
        <div className="section-center">
          <form className="form">
            <div className="form-center">
              {/* name and email */}
              <article>
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="John Doe"
                />
                <label htmlFor="email">name</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  placeholder="johndoe123@mail.com"
                />
              </article>
              {/* text area */}
              <article>
                <label htmlFor="message">message</label>
                <textarea
                  name="Message"
                  className="form-control"
                  placeholder="I want a portfolio website"
                ></textarea>
              </article>
            </div>
            <button className="btn" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
