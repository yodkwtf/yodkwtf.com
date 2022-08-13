import React from 'react';
import { socialIcons } from '../data/utils';

const SocialIcons = () => {
  return (
    <>
      {socialIcons.map(({ id, url, icon, title }) => {
        return (
          <a
            href={url}
            key={id}
            className="social-icon"
            target="_blank"
            rel="noreferrer"
            title={title}
          >
            <img src={icon} alt={title} />
            &nbsp;<span>{title}</span>
          </a>
        );
      })}
    </>
  );
};

export default SocialIcons;
