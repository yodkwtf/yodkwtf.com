import React from 'react';
import heroImg from '../images/hero/hero-img.svg';
import { AppContext } from '../context';

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
              I'm a front-end developer based in Delhi, India. I create
              responsive websites and web apps to help people improve their
              internet surfing experiences.
            </p>
            <div className="hero-btn-container">
              <a
                href="mailto:48durgesh.kumar@gmail.com"
                className="btn hero-btn"
              >
                get in touch 📞
              </a>
              <a
                href="#follow"
                className="btn hero-btn"
                onClick={(e) => smoothScroll(e)}
              >
                follow me 📱
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
