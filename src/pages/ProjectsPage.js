import React from 'react';
import { projects } from '../data/data';
import { FaGithub, FaLink } from 'react-icons/fa';
import { NavForPages } from '../components';

// get all projects from data
const { all_projects } = projects;

// COMPONENT
const ProjectsPage = () => {
  /**
   // **** get all unique categories
   * using map to get category of all items
   * using SET to filter out only unique ones
   * changing them into an array from object
   * adding 'all' btn and using spread operator
   */
  const categories = [
    'all',
    ...new Set(all_projects.map((project) => project.category)),
  ];

  // states
  const [projects, setProjects] = React.useState(all_projects);

  // FILTER PROJECTS FUNCTION
  const filterProjects = (category) => {
    // check if all btn is clicked
    if (category === 'all') {
      setProjects(all_projects);
    } else {
      // create new projects array of projects whose category matches clicked category
      const newProjects = all_projects.filter(
        (project) => project.category === category
      );
      setProjects(newProjects);
    }
  };

  // jsx
  return (
    <section className="page">
      {/* navbar */}
      <NavForPages />

      <div className="page-center projects-page">
        {/* title */}
        <div className="section-title page-title">
          <h2>
            my <span>projects</span>
          </h2>
          <div className="underline"></div>
          <p>
            {' '}
            Since I've been creating websites for a while now, there are a lot
            of them. So I decided to put some of my favourite ones here.
            <br />
            However, if you are interested in seeing all my projects then just
            follow me on <a href="https://github.com/yodkwtf">github</a>.
          </p>
        </div>

        {/* projects-center */}
        <div className="section-center projects-page-center">
          <Categories categories={categories} filterProjects={filterProjects} />
          <Projects projects={projects} />
        </div>
      </div>
    </section>
  );
};

// Category Btns Component
const Categories = ({ categories, filterProjects }) => {
  return (
    <div className="category-btn-container">
      {categories.map((category, i) => (
        <button
          className="category-btn btn"
          key={i}
          onClick={() => filterProjects(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// Projects Component
const Projects = ({ projects }) => {
  // jsx
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <SingleProject project={project} key={project.id} />
      ))}
    </div>
  );
};

// Single Project Component
const SingleProject = ({ project: { title, image, url, repo_url } }) => {
  return (
    <article className="single-project">
      <div className="single-project-img">
        <img src={image} alt={title} className="single-project-image" />
      </div>
      <div className="single-project-info">
        <h4 className="single-project-title">{title}</h4>
        <div className="single-project-footer">
          <a href={url} target="_blank" rel="noreferrer">
            <strong>
              <FaLink className="fa" /> <span>live</span>
            </strong>
          </a>
          <a href={repo_url} target="_blank" rel="noreferrer">
            <FaGithub className="fa" /> <span>code</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsPage;
