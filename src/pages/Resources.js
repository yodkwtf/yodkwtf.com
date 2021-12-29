import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavForPages } from '../components';
import aboutSmallImg from '../images/about/about-img-small.jpg';
import Airtable from 'airtable-node';

const Resources = () => {
  // state
  const [resources, setResources] = useState([]);

  const airtable = new Airtable({ apiKey: process.env.REACT_APP_API_KEY })
    .base(process.env.REACT_APP_BASE_ID)
    .table('resources');

  const fetchResources = async () => {
    const { records } = await airtable.list();

    const resources = records.map((record) => {
      const { id } = record;
      const { text, icon, title, url, order, isLatest } = record.fields;
      const iconUrl = icon[0].url;

      return {
        id,
        text,
        title,
        url,
        iconUrl,
        order,
        isLatest,
      };
    });

    setResources(resources);
  };

  // useEffect
  useEffect(() => {
    fetchResources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // jsx
  return (
    <>
      <Helmet>
        <title>Durgesh Chaudhary // Links & Resources</title>
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
                loading="lazy"
              />
            </div>
            <h4>Durgesh</h4>
            <p>@yodkwtf</p>
          </article>

          <article className="section-center links-page-center">
            <h4>Developer | YouTuber | Freelancer</h4>

            {resources
              .sort((a, b) => a.order - b.order)
              .map(({ id, title, iconUrl, text, url, isLatest }) => (
                <a
                  href={url}
                  className={`btn links-page-btn  ${
                    isLatest ? 'latest-link' : ''
                  }`}
                  title={title}
                  key={id}
                >
                  {text}
                  <img src={iconUrl} alt="icon" />
                </a>
              ))}
          </article>
        </section>
      </div>
    </>
  );
};

export default Resources;
