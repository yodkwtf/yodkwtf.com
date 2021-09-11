import React from 'react';
import aboutSmallImage from '../images/about/about-image-small.jpg';
import aboutBigImage from '../images/about/about-image.jpg';
import { Skills } from './Skills';

export const About = () => {
  // state
  const [age, setAge] = React.useState(20);

  React.useEffect(() => {
    setAge(
      Math.floor((new Date() - new Date('2001-08-04').getTime()) / 3.15576e10)
    );
  }, []);

  // jsx
  return (
    <section id="about" className="section about">
      <div className="section-title">
        <h2>
          <span>about</span> me
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

        <article className="about-info">
          <p>
            {/* text */}
            Hello Friend. <br />
            I'm Durgesh, a <span>{age}</span> year old web developer, currently
            trying to master full stack MERN development. I have a profound
            knowledge of HTML & CSS, Javascript, React, Nodejs, and Gatsby.
            <br />
            <br />
            I've built a lot of websites and web apps and currently, I'm working
            as a freelance web developer where I deliver highly optimized
            websites to my clients and help them scale their business digitally.
            I also run a youtube channel called{' '}
            <a
              href="https://youtube.com/c/yodkwtf"
              target="_blank"
              rel="noreferrer"
            >
              Yodkwtf Academy
            </a>{' '}
            where I teach web development to beginners.
            <br />
            <br />
            When I'm not coding, I love to binge watch pop culture stuff. I also
            love to play guitar and create sketches. Although I'm not very good
            at it but the creative mind does help me a bit in
          </p>

          {/* stack */}
          <Skills />
        </article>
      </div>
    </section>
  );
};
