import React from 'react';
import './Project.css';

const renderTags = tags =>
  Array.isArray(tags) ? (
    tags.map((tag, i) => <li key={i}>{tag}</li>)
  ) : (
    <li>{tags}</li>
  );

const LinkItem = ({ icon, href }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${icon}`} />
    </a>
  </li>
);

const ProjectLinks = ({ project }) => {
  const { url, git } = project;
  return (
    <ul className="project__links">
      {url && <LinkItem icon="external-link" href={url} />}
      {git && <LinkItem icon="github" href={git} />}
    </ul>
  );
};

const handleClick = e => {
  e.preventDefault();
  const el = e.target.closest('.project');
  el.classList.toggle('is-open');
  console.log(el.classList);
};

const Project = ({ project }) => {
  const { name, client, blurb, thumbnail, tags } = project;
  return (
    <article className="project" onClick={handleClick}>
      {thumbnail ? (
        <img
          className="project__thumbnail"
          src={thumbnail}
          alt={`${name} Thumbnail`}
        />
      ) : (
        <div className="project__thumbnail fallback">
          {name.substring(0, 1)}
        </div>
      )}
      <div className="project__info-container">
        {client && <h2 className="project__subheading">{client}</h2>}
        <h1 className="project__heading">{name}</h1>
        <div className="project__info-details">
          <ProjectLinks project={project} />
          <p
            className="project__blurb"
            dangerouslySetInnerHTML={{ __html: blurb }}
          />
          <ul className="project__tags">{renderTags(tags)}</ul>
        </div>
      </div>
    </article>
  );
};

export default Project;
