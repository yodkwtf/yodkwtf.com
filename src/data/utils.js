import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

// **************************
// social icons
// **************************
export const socialIcons = [
  {
    id: 1,
    icon: <FaInstagram class="fa instagram" />,
    url: 'https://www.instagram.com/yodkwtf',
    title: 'instagram',
  },
  {
    id: 2,
    icon: <FaTwitter class="fa twitter" />,
    url: 'https://twitter.com/yodkwtf',
    title: 'twitter',
  },
  {
    id: 3,
    icon: <FaLinkedin class="fa linkedin" />,
    url: 'https://www.linkedin.com/in/durgesh-chaudhary-4516491b0/',
    title: 'linkedin',
  },
  {
    id: 4,
    icon: <FaGithub class="fa github" />,
    url: 'https://github.com/yodkwtf',
    title: 'github',
  },
];

// **************************
// nav links
// **************************
export const navLinks = [
  {
    id: 1,
    url: '#home',
    text: 'home',
  },
  {
    id: 2,
    url: '#about',
    text: 'about',
  },
  {
    id: 3,
    url: '#projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '#contact',
    text: 'contact',
  },
];
