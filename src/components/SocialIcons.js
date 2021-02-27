import React from 'react';
import { socialIcons } from '../data/utils';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      {socialIcons.map(({ id, url, icon }) => {
        return (
          <a href={url} key={id} className="social-icon">
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
