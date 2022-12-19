import React from "react";
import { Project as ProjectType } from "../../types";
import "./Project.css";

const Icon = (props: { name: string; href: string }) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <i className={`fa fa-${props.name}`} />
  </a>
);

const withLink = (props: { text: string; url: string }) => (
  <a href={props.url}>{props.text}</a>
);

export const Project = (props: { project: ProjectType }) => {
  const { name, client, git, blurb, url, thumbnail } = props.project;
  return (
    <article className="project">
      <a href={url}>
        <img
          className="project__thumbnail"
          src={thumbnail}
          alt={`${name} Thumbnail`}
        />
      </a>
      <div className="project__info-container">
        {client && <h2 className="project__subheading">{client}</h2>}
        <h1 className="project__heading">
          {url ? withLink({ text: name, url }) : name}
        </h1>
        <div className="project__info-details">
          <p
            className="project__blurb"
            dangerouslySetInnerHTML={{ __html: blurb }}
          />
          {git && (
            <ul className="project__links">
              <li>
                <Icon name="github" href={git} />
              </li>
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
