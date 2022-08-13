import React from 'react';
import { skills } from '../data/data';

export const Skills = () => {
  return (
    <>
      <div className="skills-title-container">
        <h3 className="skills-title">MY STACK</h3>
        <div className="skills-line"></div>
      </div>

      {/* skills-center */}
      <div className="skills-center">
        {skills.map(({ id, title, icon }) => {
          return (
            <article key={id} className="skill" title={title}>
              <img src={icon} alt={title} className="skill-icon" />
            </article>
          );
        })}
      </div>
    </>
  );
};
