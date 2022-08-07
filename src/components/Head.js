import React from 'react';
import seoConfig from '../data/seoCofig';
import { Helmet } from 'react-helmet-async';

const Head = ({ title, description, image }) => {
  const { defaultTitle, defaultDescription, siteUrl, defaultImage, keywords } =
    seoConfig;

  const metaData = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags  */}
      <title>{metaData.title}</title>
      <meta name="title" content={metaData.title} data-react-helmet="true" />
      <meta
        name="description"
        content={metaData.description}
        data-react-helmet="true"
      />
      <meta name="keywords" content={keywords} data-react-helmet="true" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" data-react-helmet="true" />
      <meta property="og:url" content={siteUrl} data-react-helmet="true" />
      <meta
        property="og:title"
        content={metaData.title}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content={metaData.description}
        data-react-helmet="true"
      />
      <meta
        property="og:image"
        content={metaData.image}
        data-react-helmet="true"
      />

      {/* Twitter */}
      <meta
        property="twitter:card"
        content="summary_large_image"
        data-react-helmet="true"
      />
      <meta
        name="twitter:creator"
        content="@yodkwtf"
        data-react-helmet="true"
      />
      <meta property="twitter:url" content={siteUrl} data-react-helmet="true" />
      <meta
        property="twitter:title"
        content={metaData.title}
        data-react-helmet="true"
      />
      <meta
        property="twitter:description"
        content={metaData.description}
        data-react-helmet="true"
      />
      <meta
        property="twitter:image"
        content={metaData.image}
        data-react-helmet="true"
      />
    </Helmet>
  );
};

export default Head;
