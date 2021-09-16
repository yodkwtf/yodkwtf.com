// icons
import {
  FaGlobe,
  FaYoutube,
  FaDownload,
  FaAward,
  FaGithub,
  FaLinkedin,
  FaCodepen,
} from 'react-icons/fa';

// skills
import html from '../images/skills/html.svg';
import css from '../images/skills/css.svg';
import javascript from '../images/skills/javascript.svg';
import restApi from '../images/skills/rest-api.svg';
import json from '../images/skills/json.svg';
import reactjs from '../images/skills/react.svg';
import styledComponents from '../images/skills/styled-components.svg';
import node from '../images/skills/node.svg';
import mongodb from '../images/skills/mongo.svg';
import gatsby from '../images/skills/gatsby.svg';
import graphql from '../images/skills/graphql.svg';
import github from '../images/skills/github.svg';
import git from '../images/skills/git.svg';
import figma from '../images/skills/figma.svg';

// ###########
// skills
// ###########

export const skills = [
  {
    id: 1,
    title: 'HTML',
    icon: html,
  },
  {
    id: 2,
    title: 'CSS',
    icon: css,
  },
  {
    id: 3,
    title: 'Javascript',
    icon: javascript,
  },
  {
    id: 4,
    title: 'Rest API',
    icon: restApi,
  },
  {
    id: 5,
    title: 'JSON',
    icon: json,
  },
  {
    id: 6,
    title: 'React',
    icon: reactjs,
  },
  {
    id: 7,
    title: 'styled-components',
    icon: styledComponents,
  },
  {
    id: 8,
    title: 'Nodejs',
    icon: node,
  },
  {
    id: 9,
    title: 'MongoDB',
    icon: mongodb,
  },
  {
    id: 10,
    title: 'Gatsby',
    icon: gatsby,
  },
  {
    id: 11,
    title: 'Graphql',
    icon: graphql,
  },
  {
    id: 12,
    title: 'Git',
    icon: git,
  },
  {
    id: 13,
    title: 'GitHub',
    icon: github,
  },
  {
    id: 14,
    title: 'Figma',
    icon: figma,
  },
];

// ###########
// links
// ###########
export const links = [
  {
    id: 1,
    title: 'yodkwtf.com | My Portfolio Website',
    text: 'Website',
    icon: <FaGlobe className="fa" />,
    url: '/',
  },

  {
    id: 2,
    title: 'Yodkwtf Academy | My YouTube Channel',
    text: 'YouTube',
    icon: <FaYoutube className="fa" />,
    url: 'https://youtube.com/c/yodkwtf',
  },

  {
    id: 3,
    title: 'Download My Resume',
    text: 'Resume/CV',
    icon: <FaDownload className="fa" />,
    url: 'https://youtube.com/c/yodkwtf',
  },

  {
    id: 4,
    title: `My Latest Client's Website`,
    text: 'Latest Work',
    icon: <FaAward className="fa" />,
    url: 'wedorenovation.in',
  },

  {
    id: 5,
    title: 'My Github Profile',
    text: 'GitHub',
    icon: <FaGithub className="fa" />,
    url: 'https://github.com/yodkwtf',
  },

  {
    id: 6,
    title: 'My LinkedIN Profile',
    text: 'LinkedIn',
    icon: <FaLinkedin className="fa" />,
    url: 'https://www.linkedin.com/in/durgesh-chaudhary',
  },

  {
    id: 7,
    title: 'My Codepen Profile',
    text: 'Codepen',
    icon: <FaCodepen className="fa" />,
    url: 'https://codepen.io/yodkwtf',
  },
];
