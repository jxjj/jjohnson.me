import React from "react";
import "./ProjectSection.css";

export const ProjectSection = (props: { children: React.ReactNode }) => (
  <section className="section project-section">
    <div className="container">{props.children}</div>
  </section>
);
