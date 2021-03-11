import React from 'react';
import { FaEnvelope, FaThumbsUp } from 'react-icons/fa';
import heroImageLight from '../images/hero/hero-image-light.svg';
// import heroImageDark from '../images/hero/hero-image-dark.svg';
import heroImageDark2 from '../images/hero/hero-image-dark2.svg';
import { AppContext } from '../context';

export const Hero = () => {
  // function from context
  const { smoothScroll, theme } = React.useContext(AppContext);

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
              I'm a front-end developer based in Delhi, India. I create
              responsive websites and web apps to help people improve their
              internet surfing experiences.
            </p>
            <div className="hero-btn-container">
              <a
                href="mailto:48durgesh.kumar@gmail.com"
                className="btn hero-btn"
              >
                get in touch <FaEnvelope />
              </a>
              <a
                href="#follow"
                className="btn hero-btn"
                onClick={(e) => smoothScroll(e)}
              >
                follow me <FaThumbsUp />
              </a>
            </div>
          </article>

          {/* hero-image */}
          <article className="hero-img">
            <img
              src={theme === 'light' ? heroImageLight : heroImageDark2}
              alt="Hero"
              className="hero-image"
            />
          </article>
        </div>
      </div>
    </header>
  );
};
