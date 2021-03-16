import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLightbulb, FaLink } from 'react-icons/fa';
import { projects } from '../data/data';

export const Projects = () => {
  // get recent projects from projects
  const { recent_projects } = projects;

  // jsx
  return (
    <section className="section projects" id="projects">
      {/* title */}
      <div className="section-title">
        <h2>
          recent <span>projects</span>
        </h2>
        <div className="underline"></div>
      </div>

      {/* projects-center */}
      <div className="section-center projects-center">
        {recent_projects.map((project) => (
          <SingleProject key={project.id} {...project} />
        ))}
      </div>

      {/* all projects btn */}
      <div className="btn-container">
        <Link to="/Projects" className="btn">
          all projects <FaLightbulb />{' '}
        </Link>
      </div>
    </section>
  );
};

const SingleProject = ({ image, title, info, tools, url, repo_url }) => {
  // jsx
  return (
    <article className="project">
      {/* image */}
      <div className="project-img">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div>
        {/* info */}
        <div className="project-info">
          <h4 className="project-title">{title}</h4>
          <p className="project-text">{info}</p>
          <div className="project-tools">
            {tools.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
          </div>
        </div>
        {/* footer */}
        <div className="project-footer">
          <a href={url} target="_blank" rel="noreferrer">
            <strong>
              <FaLink className="fa" /> <span>live demo</span>
            </strong>
          </a>
          <a href={repo_url} target="_blank" rel="noreferrer">
            <FaGithub className="fa" /> <span>source code</span>
          </a>
        </div>
      </div>
    </article>
  );
};
