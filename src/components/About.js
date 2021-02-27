import React from 'react';
import aboutSmallImage from '../images/about/about-image-small.jpg';
import aboutBigImage from '../images/about/about-image.jpg';

export const About = () => {
  // jsx
  return (
    <section id="about" className="section about">
      <div className="section-title title-small">
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

        {/* about-info */}
        <article className="about-info">
          <div className="section-title title-big">
            <h2>
              <span>about</span> me
            </h2>
            <div className="underline"></div>
          </div>
          <h4>front-end developer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor
            suscipit incidunt, necessitatibus, amet illum laudantium veniam
            ipsum ab, sunt ducimus quis enim minima assumenda quod repellendus
            nostrum omnis quia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolorum, voluptatem saepe optio nostrum cupiditate impedit sequi
            nihil quam voluptatum.
          </p>
        </article>
      </div>
    </section>
  );
};
