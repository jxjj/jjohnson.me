import React from "react";
import "./ProjectList.css";

export const ProjectList = (props: { children: React.ReactNode }) => (
  <div className="project-list">{props.children}</div>
);
