import React from 'react';
import { skills } from '../data/data';

export const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="section-title">
        <h2>
          <span>languages & tools</span> i work with
        </h2>
        <div className="underline"></div>
      </div>

      {/* skills-center */}
      <div className="skills-center section-center">
        {skills.map(({ id, title, image, icon }) => {
          return (
            <article key={id} className="skill">
              <img src={image} alt={title} className="skill-image" />
              {/* <h1>{icon}</h1> */}
              <h4 className="skill-title">{title}</h4>
            </article>
          );
        })}
      </div>
    </section>
  );
};
