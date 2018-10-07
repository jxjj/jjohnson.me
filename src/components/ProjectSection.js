import React from 'react';
import Project from './Project';

export default ({ category, projects }) => (
  <section className={`section section-${category.toLowerCase()}`}>
    <div className="container">
      <h1 className="section__heading">{category}</h1>
      <div className="project-list">
        {projects.map(proj => (
          <Project key={proj.name} project={proj} />
        ))}
      </div>
    </div>
  </section>
);
