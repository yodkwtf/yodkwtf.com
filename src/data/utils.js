import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
// importing skills images
import html from '../images/skills/html.png';
import css from '../images/skills/css.png';
import javascript from '../images/skills/javascript.png';
import bootstrap from '../images/skills/bootstrap.png';
import react from '../images/skills/react.jpg';
import jquery from '../images/skills/jquery.png';
import github from '../images/skills/github.png';
import netlify from '../images/skills/netlify.png';

export const skills = [
  {
    id: 1,
    image: html,
    title: 'HTML',
  },
  {
    id: 2,
    image: css,
    title: 'CSS',
  },
  {
    id: 3,
    image: bootstrap,
    title: 'Bootstrap',
  },
  {
    id: 4,
    image: javascript,
    title: 'Javascript',
  },
  {
    id: 5,
    image: jquery,
    title: 'jQuery',
  },
  {
    id: 6,
    image: react,
    title: 'React JS',
  },
  {
    id: 7,
    image: github,
    title: 'GitHub',
  },
  {
    id: 8,
    image: netlify,
    title: 'Netlify Functions',
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/yodkwtf',
  },
  {
    id: 2,
    icon: <FaTwitter />,
    url: 'https://twitter.com/yodkwtf',
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/durgesh-chaudhary-4516491b0/',
  },
  {
    id: 4,
    icon: <FaGithub />,
    url: 'https://github.com/yodkwtf',
  },
];
