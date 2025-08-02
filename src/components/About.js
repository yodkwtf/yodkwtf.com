import React from 'react';
import aboutImg from '../images/about/about.jpg';
import { Skills } from './Skills';

export const About = () => {
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
          <div className="about-img">
            <img
              src={aboutImg}
              alt="Durgesh"
              className="about-image"
              loading="lazy"
            />
          </div>
        </article>

        <article className="about-info">
          <p>
            {/* text */}
            I'm <strong>Durgesh</strong>, a{' '}
            <strong> Full Stack Developer</strong> with over{' '}
            <strong>2.5 years of professional experience</strong> and a
            portfolio of <strong>120+ projects</strong>, including web apps,
            CRUD-based blogs, e-commerce platforms, landing pages, portfolio
            websites, and a dozen production-level client websites. I have
            extensive expertise in <strong>JavaScript</strong> and its
            frameworks—especially <strong>React.js</strong> and{' '}
            <strong>Node.js</strong>.
            <br />
            <br />
            Outside of work, I'm a massive movie geek—from thrillers to
            tearjerkers to “so-bad-they're-good” action flicks, I probably have
            a Letterboxd review for it. When I'm not bingeing films or arguing
            over IMDb ratings, you'll catch me watching cricket, cruising
            through Los Santos in GTA V, or missing open goals in Rocket League
            (blame lag, obviously). <br /> <br />
            If you ever want to talk tech, cricket stats, F**** C***, or whether
            Trevor from GTA is misunderstood—I'm your guy.
          </p>

          {/* stack */}
          <Skills />
        </article>
      </div>
    </section>
  );
};
