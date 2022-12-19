import React from "react";
import { Project } from "../Project/Project";
import { Project as ProjectType } from "../../types";

import "./ProjectSection.css";

export const ProjectSection = (props: {
  category: string;
  projects: ProjectType[];
}) => (
  <section
    className={`section project-section section-${props.category.toLowerCase()}`}
  >
    <div className="container">
      <h1 className="section__heading">{props.category}</h1>
      <div className="project-list">
        {props.projects.map((proj) => (
          <Project key={proj.name} project={proj} />
        ))}
      </div>
    </div>
  </section>
);
