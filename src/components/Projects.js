import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaShareSquare,
  FaAngleDown,
  FaAngleUp,
} from 'react-icons/fa';
import Airtable from 'airtable-node';
import { Loading } from '.';

export const Projects = () => {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  const airtable = new Airtable({ apiKey: process.env.REACT_APP_API_KEY })
    .base(process.env.REACT_APP_BASE_ID)
    .table('recent-works');

  const fetchProjects = async () => {
    const { records } = await airtable.list();
    let projects = records.map((record) => {
      const { id } = record;
      const { title, desc, image, stack, url, github, isClientWork } =
        record.fields;
      const imgUrl = image[0].url;

      return {
        id,
        title,
        desc,
        imgUrl,
        stack,
        url,
        github,
        isClientWork,
      };
    });
    projects = projects.sort((a, b) => a.title.localeCompare(b.title));
    setProjects(projects);
    setLoading(false);
  };

  // useEffect
  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // jsx
  return (
    <section className="section projects" id="projects">
      {/* title */}
      <div className="section-title">
        <h2>
          latest <span>works</span>
        </h2>
        <div className="underline"></div>
      </div>

      {/* projects-center */}
      <div className="section-center projects-center">
        {loading ? (
          <Loading />
        ) : (
          <>
            {projects.map((project) => (
              <SingleProject key={project.id} {...project} />
            ))}
          </>
        )}
      </div>

      {/* all projects btn */}
      <div className="btn-container">
        <Link to="/projects" className="btn">
          view more <FaShareSquare className="fa" />
        </Link>
      </div>
    </section>
  );
};

const SingleProject = ({
  imgUrl,
  title,
  desc,
  stack,
  url,
  github,
  isClientWork,
}) => {
  const [showDesc, setShowDesc] = useState(false);

  // jsx
  return (
    <article className="project">
      {/* image */}
      <div className="project-img">
        <img
          src={imgUrl}
          alt={title}
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="project-details">
        {/* info */}
        <div className="project-info">
          <h4 className="project-title">{title}</h4>

          <button
            className="project-text-toggle"
            onClick={() => setShowDesc(!showDesc)}
          >
            Description{' '}
            {showDesc ? (
              <FaAngleUp className="fa" />
            ) : (
              <FaAngleDown className="fa" />
            )}
          </button>

          <p className={`project-text ${showDesc ? 'show-project-text' : ''}`}>
            {desc}
          </p>

          <div className="project-tools">
            {stack.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        {/* footer */}
        <div className="project-footer">
          <a href={url} target="_blank" rel="noreferrer" title="Live Site">
            <strong>
              <FaShareSquare className="fa" /> <span>live site</span>
            </strong>
          </a>
          <a href={github} target="_blank" rel="noreferrer" title="GitHub Code">
            <FaGithub className="fa" /> <span>source code</span>
          </a>
        </div>
      </div>
    </article>
  );
};
