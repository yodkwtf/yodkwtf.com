import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavForPages } from '../components';
import aboutSmallImg from '../images/about/about-img-small.jpg';
import { links } from '../data/data';

const Links = () => {
  return (
    <>
      <Helmet>
        <title>Durgesh | Links</title>
        <meta
          name="description"
          content="All the various social and other necessary links to find me and my work online. It has my portfolio website, my youtube channel, my latest work, my social media links, and my resume."
        />
      </Helmet>

      <div className="page links-page">
        {/* navbar */}
        <NavForPages />

        <section className="section">
          <article className="links-info">
            <div className="links-page-img">
              <img
                src={aboutSmallImg}
                alt="Durgesh"
                className="links-page-image"
              />
            </div>
            <h4>Durgesh</h4>
            <p>@yodkwtf</p>
          </article>

          <article className="section-center links-page-center">
            <h4>Developer | YouTuber | Freelancer</h4>
            {links.map(({ id, title, text, icon, url }) => (
              <a
                href={url}
                className="btn links-page-btn"
                title={title}
                key={id}
              >
                {text} {icon}
              </a>
            ))}
          </article>
        </section>
      </div>
    </>
  );
};

export default Links;
