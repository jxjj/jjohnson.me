import React from "react";
import "./ProjectHeader.css";

export const ProjectHeader = (props: { children: React.ReactNode }) => (
  <h1 className="project-header">{props.children}</h1>
);
