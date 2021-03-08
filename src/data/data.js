import React from 'react';
import {
  SiHtml5,
  SiCss3,
  // SiSass,
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
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615112108/skills_portfolio/html_e3zuxs.webp',
    title: 'HTML',
    icon: <SiHtml5 />,
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400,w_400/v1615112107/skills_portfolio/css_eukzsu.webp',
    title: 'CSS',
    icon: <SiCss3 />,
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615112108/skills_portfolio/javascript_blwmub.webp',
    title: 'Javascript',
    icon: <SiJavascript />,
  },
  // {
  //   id: 4,
  //   image:
  //     'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_300/v1615112108/skills_portfolio/sass_fhymhd.webp',
  //   title: 'Sass',
  //   icon: <SiSass />,
  // },

  {
    id: 5,
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615112107/skills_portfolio/bootstrap_qvf7ze.webp',
    title: 'Bootstrap',
    icon: <SiBootstrap />,
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_200/v1615112108/skills_portfolio/jquery_r6e4mm.webp',
    title: 'jQuery',
    icon: <SiJquery />,
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615112108/skills_portfolio/react_pg9f18.webp',
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
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615112108/skills_portfolio/vscode_akfeuy.webp',
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
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615124006/projects/Screenshot_198_qpoicb.webp',
      title: 'titans digital',
      info: `A website for an online web agency that builts web and mobile apps. This is a single page website that I built from scratch in the early stages of my coding journey.`,
      tools: ['HTML', 'CSS', 'Javascript'],
      url: 'https://titansdigital.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/titans_digital-html-css',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055954/projects/furniture_world_aftlwz.webp',
      title: 'furniture world',
      info: `An E-Commerce website for a furniture company built with reactJS. This is a highly advanced site that uses netlify functions and has features like login/logout provided by auth0, payment handling by stripe and several built in filters to choose products from.`,
      tools: ['ReactJS', 'CSS', 'JSX', 'Netlify Functions'],
      url: 'https://furnitureworld-react-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/furniture_world-reactJS',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055956/projects/spotify_page_fz0ysv.webp',
      title: 'cloned spotify page',
      info: `One of the spotify webpage cloned from scratch using just HTML and CSS. This is part of my mini HTML/CSS projects series where I create designs without using javascript (or keep it bare minimum).`,
      tools: ['HTML', 'CSS'],
      url: 'https://spotifypage-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/html-css-mini_projects',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615179643/projects/Screenshot_215_mnm09e.webp',
      title: 'to do list app',
      info: `A to-do list app built with javascript that handles entry, editing and deletion of tasks. The tasks are also stored locally in the browser so one can visit them later.`,
      tools: ['HTML', 'CSS', 'Javascript'],
      url: 'https://todolist-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/to_do_list-vanillaJS',
    },
    {
      id: 5,
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615179643/projects/Screenshot_216_axlmtv.webp',
      title: 'quizfeed',
      info: `A quiz app built with reactJS that fetches questions from an API. There are multiple categories and difficulty levels for the user to choose his questions from. The app also has a dark mode.`,
      tools: ['ReactJS', 'CSS', 'JSX'],
      url: 'https://quizfeed-react-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/quizfeed-reactJS',
    },
  ],

  // all projects
  all_projects: [
    // TITANS DIGITAL
    {
      id: 1,
      title: 'titans digital',
      category: 'HTML & CSS',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615124006/projects/Screenshot_198_qpoicb.webp',
      url: 'https://titansdigital.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/titans_digital-html-css',
    },

    // FURNITURE WORLD
    {
      id: 2,
      title: 'furniture world',
      category: 'React',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055954/projects/furniture_world_aftlwz.webp',
      url: 'https://furnitureworld-react-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/furniture_world-reactJS',
    },

    // SPOTIFY PAGE
    {
      id: 3,
      title: 'spotify page clone',
      category: 'HTML & CSS',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615055956/projects/spotify_page_fz0ysv.webp',
      url: 'https://spotifypage-dk.netlify.app/',
      repo_url:
        'https://github.com/yodkwtf/html-css-mini_projects/tree/main/1)%20Spotify%20Page',
    },

    // TO DO LIST APP
    {
      id: 4,
      title: 'to do list app',
      category: 'Javascript',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615179643/projects/Screenshot_215_mnm09e.webp',
      url: 'https://todolist-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/to_do_list-vanillaJS',
    },

    // QUIZFEED
    {
      id: 5,
      title: 'quizfeed',
      category: 'React',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615179643/projects/Screenshot_216_axlmtv.webp',
      url: 'https://quizfeed-react-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/quizfeed-reactJS',
    },

    // CODING FR
    {
      id: 6,
      title: 'coding FR',
      category: 'HTML & CSS',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615160160/projects/Screenshot_205_x7j678.webp',
      url: 'https://codingfr.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/coding_fr-html-css',
    },

    // GET COCKTAILS
    {
      id: 7,
      title: 'get cocktails',
      category: 'React',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615179644/projects/Screenshot_214_kbicbs.webp',
      url: 'https://getcocktails-react-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/get_cocktails-reactJS',
    },

    // YOUNG AT ART
    {
      id: 8,
      title: 'young at art',
      category: 'jQuery',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615160160/projects/Screenshot_204_k8dj42.webp',
      url: 'https://youngatart.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/young_at_art-html-css',
    },

    // MULTIPLICATION TABLE
    {
      id: 9,
      title: 'multiplication table',
      category: 'Javascript',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615178217/projects/Screenshot_209_kquwqq.webp',
      url: 'https://multiplicationtables-dk.netlify.app/',
      repo_url:
        'https://github.com/yodkwtf/vanillaJS-mini_projects/tree/main/1)%20Multiplication%20Tables',
    },

    // COLOR GENERATOR
    {
      id: 10,
      title: 'color generator',
      category: 'React',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615160160/projects/Screenshot_201_t88bgn.webp',
      url: 'https://colorgenerator-react-dk.netlify.app/',
      repo_url:
        'https://github.com/yodkwtf/reactJS-mini_projects/tree/main/2)%20Color%20Generator',
    },

    // SAINTS OF SHOWS
    {
      id: 11,
      title: 'saints of shows',
      category: 'jQuery',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615160160/projects/Screenshot_206_pqwfmc.webp',
      url: 'https://saintsofshows.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/saints_of_shows-html-css',
    },

    // TEXT GENERATOR
    {
      id: 12,
      title: 'text generator',
      category: 'React',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615179634/projects/Screenshot_213_davpe6.webp',
      url: 'https://randomtextgenerator-react-dk.netlify.app/',
      repo_url:
        'https://github.com/yodkwtf/reactJS-mini_projects/tree/main/1)%20Random%20Text%20Generator',
    },

    // WEATHER APP
    {
      id: 13,
      title: 'weather app',
      category: 'Javascript',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615178217/projects/Screenshot_211_w5rhow.webp',
      url: 'https://weatherapp-dk.netlify.app/',
      repo_url:
        'https://github.com/yodkwtf/vanillaJS-mini_projects/tree/main/6)%20Weather%20App',
    },

    // REDUX WEBSITE
    {
      id: 14,
      title: 'redux website clone',
      category: 'HTML & CSS',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615160159/projects/Screenshot_199_nvi6xu.webp',
      url: 'https://reduxwebsite-dk.netlify.app/',
      repo_url:
        'https://github.com/yodkwtf/html-css-mini_projects/tree/main/2)%20Redux%20Website',
    },

    // COUNTDOWN TIMER
    {
      id: 15,
      title: 'countdown',
      category: 'Javascript',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615178217/projects/Screenshot_210_tidkb0.webp',
      url: 'https://countdowntimer-dk.netlify.app/',
      repo_url:
        'https://github.com/yodkwtf/vanillaJS-mini_projects/tree/main/5)%20Countdown%20Timer',
    },

    // MARKDOWN PREVIEW
    {
      id: 16,
      title: 'markdown preview',
      category: 'React',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615179076/projects/Screenshot_212_kbdggs.webp',
      url: 'https://markdownpreview-react-dk.netlify.app/',
      repo_url:
        'https://github.com/yodkwtf/reactJS-mini_projects/tree/main/3)%20Markdown%20Preview',
    },

    // PORTFOLIO V-1
    {
      id: 17,
      title: 'portfolio design',
      category: 'jQuery',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615177624/projects/Screenshot_207_biiko7.webp',
      url: 'https://portfolio-v1-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/portfolio-v1',
    },

    // PIG DICE GAME
    {
      id: 18,
      title: 'pig dice game',
      category: 'Javascript',
      image:
        'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,h_400/v1615177624/projects/Screenshot_208_jev8f4.webp',
      url: 'https://pigdicegame-dk.netlify.app/',
      repo_url: 'https://github.com/yodkwtf/pig_dice_game-vanillaJS',
    },
  ],
};
