// importing recent projects images
import {
  furnitureWorld,
  portfolio,
  quizfeed,
  spotifyPage,
  toDoList,
} from '../images/projects';

// importing skills images
import {
  html,
  css,
  javascript,
  bootstrap,
  react,
  jquery,
  github,
  netlify,
} from '../images/skills';

// **************************
// recent projects
// **************************
export const projects = [
  {
    id: 1,
    image: furnitureWorld,
    title: 'furniture world',
    info: `An E-Commerce website for a furniture company built with reactJS. This is a highly advanced site that uses netlify functions and has features like login/logout provided by auth0, payment handling by stripe and several built in filters to choose products from.`,
    tools: ['ReactJS', 'CSS', 'JSX', 'Netlify Functions'],
    url: 'https://furnitureworld-react-dk.netlify.app/',
    repo_url: 'https://github.com/yodkwtf/furniture_world-reactJS',
  },
  {
    id: 2,
    image: portfolio,
    title: 'portfolio website',
    info: `The first ever portfolio website I built for myself. The design is inspired from multiple portfolio websites on the internet and the functionality heavily depends on jQuery which eventually made it very slow to use (one of the main reasons I ditched it).`,
    tools: ['HTML', 'CSS', 'Javascript', 'jQuery'],
    url: 'https://portfolio-v1-dk.netlify.app/',
    repo_url: 'https://github.com/yodkwtf/portfolio-v1',
  },
  {
    id: 3,
    image: quizfeed,
    title: 'quizfeed',
    info: `A quiz app built with reactJS that fetches questions from an API. There are multiple categories and difficulty levels for the user to choose his questions from. The app also has a dark mode.`,
    tools: ['ReactJS', 'CSS', 'JSX'],
    url: 'https://quizfeed-react-dk.netlify.app/',
    repo_url: 'https://github.com/yodkwtf/quizfeed-reactJS',
  },
  {
    id: 4,
    image: spotifyPage,
    title: 'cloned spotify page',
    info: `One of the spotify webpage cloned from scratch using just HTML and CSS. This is part of my mini HTML/CSS projects series where I create designs without using javascript (or keep it bare minimum).`,
    tools: ['HTML', 'CSS'],
    url: 'https://spotifypage-dk.netlify.app/',
    repo_url: 'https://github.com/yodkwtf/html-css-mini_projects',
  },
  {
    id: 5,
    image: toDoList,
    title: 'to do list app',
    info: `A to-do list app built with javascript that handles entry, editing and deletion of tasks. The tasks are also stored locally in the browser so one can visit them later.`,
    tools: ['HTML', 'CSS', 'Javascript'],
    url: 'https://todolist-dk.netlify.app/',
    repo_url: 'https://github.com/yodkwtf/to_do_list-vanillaJS',
  },
];

// **************************
// skills
// **************************
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
