import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import aboutSmallImage from '../images/about/about-image-small.jpg';
import aboutBigImage from '../images/about/about-image.jpg';

export const About = () => {
  // state
  const [readMore, setReadMore] = React.useState(false);
  const [age, setAge] = React.useState(20);

  React.useEffect(() => {
    setAge(
      Math.floor((new Date() - new Date('2001-08-04').getTime()) / 3.15576e10)
    );
  }, []);

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

        <article className="about-info">
          <div className="section-title title-big">
            <h2>
              my <span>story</span>
            </h2>
            <div className="underline"></div>
          </div>

          {/* about-info */}

          <h4>front-end developer</h4>
          <p>
            {/* text */}
            My name is Durgesh but most people know me by my nickname Deekayy.
            I'm <span>{age}</span> years old and currently pursuing B.Tech in
            Computer Science from The Northcap University, Gurgaon.
            <br />
            <br />I love coding as it gives me a challenge of learning something
            new everyday. My speciality is building
            {readMore ? (
              <>
                &nbsp;responsive websites using HTML, CSS and Javascript. I'm
                also very familiar with using frameworks and can work very well
                with ReactJS.
                <br />
                <br />
                When I'm not coding, I love to binge watch web shows and
                documentaries. I also enjoy sketching and painting. Although I'm
                not very good at it but it does help a bit in creating awesome
                designs for my websites.
              </>
            ) : (
              `...`
            )}
            {/* read more btn */}
            <button id="toggle-text" onClick={() => setReadMore(!readMore)}>
              {readMore ? (
                <>
                  &nbsp;show less <FaAngleUp />
                </>
              ) : (
                <>
                  read more <FaAngleDown />
                </>
              )}
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};
