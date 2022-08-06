import React from 'react';
import { Head, NavForPages } from '../components';
import { FaArrowRight } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      <Head
        title={'Durgesh Chaudhary - Full Stack Developer | Contact'}
        description={`Please find my contact details below. Find me on any of the socials mentioned or send me a direct message via the form below. Alternatively, you can also send me an email and I'll get back to you within 24 hours.`}
      />

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
              If you want to work with me please fill the form below and I'll
              get back to you within 24 hours.
              <br />
              Alternatively, you can also drop an email at{' '}
              <a href="mailto:48durgesh.kumar@gmail.com" title="Email Me">
                48durgesh.kumar@gmail.com
              </a>
            </p>
          </div>

          {/* form */}
          <div className="section-center">
            <form
              className="form"
              action="https://formspree.io/f/xvoveppv"
              method="POST"
            >
              <div className="form-center">
                {/* name  */}
                <article>
                  <label htmlFor="name">name</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    placeholder="John Doe"
                    required
                  />
                </article>
                {/* email */}
                <article>
                  <label htmlFor="email">e-mail</label>
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    name="Email"
                    placeholder="johndoe123@mail.com"
                    required
                  />
                </article>
                {/* text area */}
                <article>
                  <label htmlFor="message">how can I help?</label>
                  <br />
                  <textarea
                    name="Message"
                    className="form-control"
                    placeholder="We run a small startup and we want a website for the same..."
                    rows="8"
                    required
                  ></textarea>
                </article>
              </div>
              <div className="btn-container">
                <button className="btn submit-btn" type="submit">
                  submit <FaArrowRight className="fa" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
