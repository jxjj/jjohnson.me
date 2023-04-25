import React from "react";
import { Project as ProjectType } from "../../types";
import { Tag } from "../Tag/Tag";
import { TagList } from "../TagList/TagList";
import * as Icons from "../../icons";
import "./Project.css";

const withLink = (props: { text: string; url: string }) => (
  <a href={props.url}>{props.text}</a>
);

export const Project = (props: { project: ProjectType }) => {
  const { name, client, git, blurb, url, thumbnail, tags } = props.project;
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
          <p className="project__blurb">{blurb}</p>
          {tags?.length && (
            <TagList>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          )}

          {git && (
            <ul className="project__links">
              <li>
                <a href={git} target="_blank" rel="noopener noreferrer">
                  <Icons.Github /> Github
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
