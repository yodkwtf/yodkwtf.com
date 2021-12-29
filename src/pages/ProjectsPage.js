import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Loading, NavForPages, SingleProject } from '../components';
import Airtable from 'airtable-node';

// COMPONENT
const ProjectsPage = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [categories, setCategories] = useState();
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  const airtable = new Airtable({ apiKey: process.env.REACT_APP_API_KEY })
    .base(process.env.REACT_APP_BASE_ID)
    .table('projects');

  const fetchProjects = async () => {
    const { records } = await airtable.list();
    const projects = records.map((record) => {
      const { id } = record;
      const { title, stack, image, url, github } = record.fields;
      const imgUrl = image[0].url;

      return {
        id,
        title,
        imgUrl,
        github,
        url,
        stack,
      };
    });

    setAllProjects(projects);
    setCategories([
      'all',
      ...new Set(projects.map((project) => project.stack)),
    ]);
    setProjects(projects);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // UPDATE FILTER BTNS COLOR
  const updateFilterBtns = (e) => {
    document.querySelectorAll('.category-btn').forEach((btn) => {
      btn.classList.add('unactive');
    });
    e.target.classList.remove('unactive');
    e.target.classList.add('active');
  };

  // FILTER PROJECTS FUNCTION
  const filterProjects = (stack, e) => {
    updateFilterBtns(e);
    if (stack === 'all') {
      setProjects(allProjects);
    } else {
      const newProjects = allProjects.filter(
        (project) => project.stack === stack
      );
      setProjects(newProjects);
    }
  };

  // jsx
  return (
    <>
      <Helmet>
        <title>Durgesh | My Projects</title>
        <meta
          name="description"
          content="The list of a few of projects built by yodkwtf, aka, Durgesh. These are built with a variety of technology including html & css, javascript, reactjs, nodejs, bootstrap, gatsby, jQuery, etc. Take a look at the github profile for more info."
        />
      </Helmet>

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
              Since I've been creating projects for a while now, there are a lot
              of them. I decided to put some of my favourite ones here.
              <br />
              If you are interested in seeing all my projects then please
              consider following me on{' '}
              <a href="https://github.com/yodkwtf" title="My GitHub Profile">
                github
              </a>
              .
            </p>
          </div>

          {/* projects-center */}
          <div className="section-center projects-page-center">
            {loading ? (
              <Loading />
            ) : (
              <>
                <Categories
                  categories={categories}
                  filterProjects={filterProjects}
                />
                <Projects projects={projects} />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

// Category Btns Component
const Categories = ({ categories, filterProjects }) => {
  return (
    <div className="category-btn-container">
      {categories.map((category, i) => (
        <button
          className="category-btn btn"
          data-category={category}
          key={i}
          onClick={(e) => filterProjects(category, e)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// Projects Component
const Projects = ({ projects }) => {
  // sort by name
  projects = projects.sort((a, b) => a.title.localeCompare(b.title));

  // jsx
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <SingleProject {...project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectsPage;
