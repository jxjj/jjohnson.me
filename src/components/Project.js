import React from 'react';
import './Project.css';

const renderTags = tags =>
  Array.isArray(tags) ? (
    tags.map((tag, i) => <li key={i}>{tag}</li>)
  ) : (
    <li>{tags}</li>
  );

const Project = ({ project }) => {
  const { name, client, url, blurb, thumbnail, tags } = project;
  return (
    <article className="project">
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
        <p className="project__link">{url}</p>
        <p
          className="project__blurb"
          dangerouslySetInnerHTML={{ __html: blurb }}
        />
        <ul className="project__tags">{renderTags(tags)}</ul>
      </div>
    </article>
  );
};

export default Project;
