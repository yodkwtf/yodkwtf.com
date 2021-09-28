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
              I'm a freelance web developer based in Delhi, India. I create
              highly optimized responsive websites to help my clients scale
              their business digitally and help people improve their internet
              surfing experiences.
            </p>
            <div className="hero-btn-container">
              <a
                href="mailto:48durgesh.kumar@gmail.com"
                className="btn hero-btn"
                title="Email Me Now"
              >
                get in touch 📞
              </a>
              <a
                href="#projects"
                className="btn hero-btn"
                onClick={(e) => smoothScroll(e)}
                title="My Latest Works"
              >
                see my work 💻
              </a>
            </div>
          </article>

          {/* hero-image */}
          <article className="hero-img">
            <img
              src={heroImg}
              alt="Hero"
              className="hero-image"
              loading="lazy"
            />
          </article>
        </div>
      </div>
    </header>
  );
};
