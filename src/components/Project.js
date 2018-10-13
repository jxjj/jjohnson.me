import React from 'react';
import './Project.css';

const Icon = ({ name, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <i className={`fa fa-${name}`} />
  </a>
);

const withLink = ({ text, url }) => <a href={url}>{text}</a>;

const Project = ({ project }) => {
  const { name, client, git, blurb, url, thumbnail } = project;
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
