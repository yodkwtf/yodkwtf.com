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
      <meta name="title" content={metaData.title} />
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={metaData.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@yodkwtf" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={metaData.title} />
      <meta property="twitter:description" content={metaData.description} />
      <meta property="twitter:image" content={metaData.image} />
    </Helmet>
  );
};

export default Head;
