import React from 'react';
import aboutSmallImg from '../images/about/about-img-small.jpg';
import aboutBigImg from '../images/about/about-img.jpg';
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
        <article>
          {/* small image */}
          <div className="about-img-small">
            <img
              src={aboutSmallImg}
              alt="Durgesh"
              className="about-image-small"
              loading="lazy"
            />
          </div>
          {/* big image */}
          <div className="about-img-big">
            <img
              src={aboutBigImg}
              alt="Durgesh"
              className="about-image-big"
              loading="lazy"
            />
          </div>
        </article>

        <article className="about-info">
          <p>
            {/* text */}
            Hello Friend. <br />
            I'm <strong>Durgesh</strong>, a <span>{age}</span> year old
            self-taught web developer. I mainly work with the MERN stack but I
            have a profound knowledge of HTML & CSS, Javascript, Python, and
            Gatsby too.
            <br />
            <br />
            Currently I'm working as a <strong>
              freelance web developer
            </strong>{' '}
            where I deliver highly optimized websites to my clients and help
            them scale their businesses digitally. I also run a&nbsp;&nbsp;
            <a
              href="https://youtube.com/c/yodkwtf"
              target="_blank"
              rel="noreferrer"
              title="Yodkwtf Academy - My YouTube Channel"
            >
              YouTube channel
            </a>
            &nbsp; where I post web dev tutorials.
            <br />
            <br />
            When I'm not coding, I love to binge-watch pop culture stuff. I also
            love to play guitar and create sketches. Even though I'm not very
            good, it does help me to get creative designs for my sites.
          </p>

          {/* stack */}
          <Skills />
        </article>
      </div>
    </section>
  );
};
