import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import aboutSmallImage from '../images/about/about-image-small.jpg';
import aboutBigImage from '../images/about/about-image.jpg';

export const About = () => {
  // jsx
  return (
    <section id="about" className="section about">
      <div className="section-title title-small">
        <h2>
          my <span>story</span>
        </h2>
        <div className="underline"></div>
      </div>

      <div className="section-center about-center">
        {/* about-img  */}
        <article className="about-img">
          {/* small image */}
          <div className="about-img-small">
            <img
              src={aboutSmallImage}
              alt="about"
              className="about-image-small"
            />
          </div>
          {/* big image */}
          <div className="about-img-big">
            <img src={aboutBigImage} alt="about" className="about-image-big" />
          </div>
        </article>

        {/* about-info */}
        <article className="about-info">
          <div className="section-title title-big">
            <h2>
              my <span>story</span>
            </h2>
            <div className="underline"></div>
          </div>
          <h4>front-end developer</h4>
          <p>
            My name is Durgesh but most people know me by my nickname Deekayy.
            I'm
            <span id="age">20</span> years old and currently pursuing B.Tech in
            Computer Science from The Northcap University, Gurgaon.
            <br />
            <br />I love coding as it gives me a challenge of learning something
            new everyday. My speciality is build<span id="dots">...</span>
            <span id="more-text">
              ing responsive websites using HTML, CSS and Javascript. I'm also
              very familiar with using frameworks and can work very well with
              ReactJS.
              <br />
              <br />
              When I'm not coding, I love to binge watch web shows and
              documentaries. I also enjoy sketching and painting. Although I'm
              not very good at it but it does help a bit in creating awesome
              designs for my websites.
            </span>
            <button id="toggle-text">
              read more <FaAngleDown />
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};
