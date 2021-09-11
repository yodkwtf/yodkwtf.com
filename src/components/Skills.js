import React from 'react';
import { skills } from '../data/data';

export const Skills = () => {
  return (
    <>
      <h4 className="skills-title">MY STACK -</h4>

      {/* skills-center */}
      <div className="skills-center">
        {skills.map(({ id, title, icon }) => {
          return (
            <article key={id} className="skill" title={title}>
              <h3 className="skill-icon">{icon}</h3>
            </article>
          );
        })}
      </div>
    </>
  );
};
