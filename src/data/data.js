import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiBootstrap,
  SiJquery,
  SiReact,
  SiGithub,
  SiNetlify,
  SiVisualstudiocode,
} from 'react-icons/si';

// **************************
// skills
// **************************
export const skills = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615110696/skills_portfolio/html_xh9koh.webp',
    title: 'HTML',
    icon: <SiHtml5 />,
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615110696/skills_portfolio/css_adhs9m.webp',
    title: 'CSS',
    icon: <SiCss3 />,
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615110696/skills_portfolio/javascript_kh6tqn.webp',
    title: 'Javascript',
    icon: <SiJavascript />,
  },
  {
    id: 4,
    // copyrighted
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615108807/skills_portfolio/sass_t0ctz1.webp',
    title: 'Sass',
    icon: <SiSass />,
  },

  {
    id: 5,
    // copyrighted
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615057425/skills_portfolio/bootstrap_z8nct3.webp',
    title: 'Bootstrap',
    icon: <SiBootstrap />,
  },
  {
    id: 6,
    // copyrighted
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615057425/skills_portfolio/jquery_n976ml.webp',
    title: 'jQuery',
    icon: <SiJquery />,
  },
  {
    id: 7,
    // copyrighted
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615057426/skills_portfolio/react_ug3rsk.webp',
    title: 'React JS',
    icon: <SiReact />,
  },
  {
    id: 8,
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615109122/skills_portfolio/github_kehram.webp',
    title: 'GitHub',
    icon: <SiGithub />,
  },
  {
    id: 9,
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615109895/skills_portfolio/netlify_x2su8j.webp',
    title: 'Netlify',
    icon: <SiNetlify />,
  },
  {
    id: 10,
    // copyrighted
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615108807/skills_portfolio/vscode_o0nxup.webp',
    title: 'VSCode',
    icon: <SiVisualstudiocode />,
  },
];

// **************************
//  projects
// **************************
export const projects = {
  // recent projects
  recent_projects: [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055954/projects/furniture_world_aftlwz.webp',
      title: 'furniture world',
      info: `An E-Commerce website for a furniture company built with reactJS. This is a highly advanced site that uses netlify functions and has features like login/logout provided by auth0, payment handling by stripe and several built in filters to choose products from.`,
      tools: ['ReactJS', 'CSS', 'JSX', 'Netlify Functions'],
      url: 'https://furnitureworld-react-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/furniture_world-reactJS',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055955/projects/portfolio_dtk70r.webp',
      title: 'portfolio website',
      info: `The first ever portfolio website I built for myself. The design is inspired from multiple portfolio websites on the internet and the functionality heavily depends on jQuery which eventually made it very slow to use (one of the main reasons I ditched it).`,
      tools: ['HTML', 'CSS', 'Javascript', 'jQuery'],
      url: 'https://portfolio-v1-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/portfolio-v1',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055955/projects/quizfeed_hgpnb7.webp',
      title: 'quizfeed',
      info: `A quiz app built with reactJS that fetches questions from an API. There are multiple categories and difficulty levels for the user to choose his questions from. The app also has a dark mode.`,
      tools: ['ReactJS', 'CSS', 'JSX'],
      url: 'https://quizfeed-react-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/quizfeed-reactJS',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055956/projects/spotify_page_fz0ysv.webp',
      title: 'cloned spotify page',
      info: `One of the spotify webpage cloned from scratch using just HTML and CSS. This is part of my mini HTML/CSS projects series where I create designs without using javascript (or keep it bare minimum).`,
      tools: ['HTML', 'CSS'],
      url: 'https://spotifypage-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/html-css-mini_projects',
    },
    {
      id: 5,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055956/projects/to_do_list_mdab4s.webp',
      title: 'to do list app',
      info: `A to-do list app built with javascript that handles entry, editing and deletion of tasks. The tasks are also stored locally in the browser so one can visit them later.`,
      tools: ['HTML', 'CSS', 'Javascript'],
      url: 'https://todolist-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/to_do_list-vanillaJS',
    },
  ],

  // all projects
  all_projects: [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055954/projects/furniture_world_aftlwz.webp',
      title: 'furniture world',
      url: 'https://furnitureworld-react-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/furniture_world-reactJS',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055955/projects/portfolio_dtk70r.webp',
      title: 'portfolio website',
      url: 'https://portfolio-v1-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/portfolio-v1',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055955/projects/quizfeed_hgpnb7.webp',
      title: 'quizfeed',
      url: 'https://quizfeed-react-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/quizfeed-reactJS',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055956/projects/spotify_page_fz0ysv.webp',
      title: 'cloned spotify page',
      url: 'https://spotifypage-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/html-css-mini_projects',
    },
    {
      id: 5,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055956/projects/to_do_list_mdab4s.webp',
      title: 'to do list app',
      url: 'https://todolist-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/to_do_list-vanillaJS',
    },
  ],
};
