import React, { Component } from 'react';
import './App.css';
import projects from '../data/projects';

const renderTags = tags =>
  Array.isArray(tags) ? tags.map((tag, i) => <li key={i}>{tag}</li>) : tags;

const Project = ({ project }) => {
  const { name, blurb, thumbnail, tags } = project;
  return (
    <article className="project">
      <h1 className="project__name">{name}</h1>
      <p className="project__blurb">{blurb}</p>
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
      <ul className="project__tags">{renderTags(tags)}</ul>
    </article>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>James Johnson</header>
        <section className="section section-projects">
          {projects.map(proj => (
            <Project key={proj.name} project={proj} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
