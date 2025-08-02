import React from 'react';
import heroImg from '../images/hero/hero-img.svg';
import { AppContext } from '../context';
import { FaCode, FaEnvelope } from 'react-icons/fa';

export const Hero = () => {
  // function from context
  const { smoothScroll } = React.useContext(AppContext);

  // jsx
  return (
    <header id="home">
      <div className="banner">
        <div className="banner-container section-center">
          {/* hero-info */}
          <article className="hero-info">
            <h1 id="my-name">
              hey,<span> i'm durgesh</span>
            </h1>
            <p>
              A Full-Stack Developer with 2.5+ years of experience. Currently,
              I'm working as a <strong>Software Developer II</strong> at{' '}
              <strong>Konrad Group</strong>, where I specialize in developing
              highly optimized software solutions and web applications.
            </p>
            <div className="hero-btn-container">
              <a
                href="#projects"
                className="btn hero-btn"
                onClick={(e) => smoothScroll(e)}
                title="My Latest Works"
              >
                projects <FaCode className="fa" />
              </a>
              <a
                href="mailto:48durgesh.chaudhary@gmail.com"
                className="btn hero-btn"
                title="Email Me Now"
              >
                contact <FaEnvelope className="fa" />
              </a>
            </div>
          </article>

          {/* hero-image */}
          <article className="hero-img">
            <img src={heroImg} alt="Hero" className="hero-image" />
          </article>
        </div>
      </div>
    </header>
  );
};
