import React, { Component } from 'react';
import { uniq } from 'ramda';
import Project from './Project';
import projects from '../data/projects';

import './App.css';

const categories = uniq(projects.map(p => p.category));

const ProjectSection = ({ category, projects }) => (
  <section className={`section section-${category.toLowerCase()}`}>
    <div className="container">
      <h1 className="section__heading">{category}</h1>
      <div className="project-list">
        {projects.map(proj => (
          <Project key={proj.name} project={proj} />
        ))}
      </div>
    </div>
  </section>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-bar">
          <div className="container">
            <h1 className="app-bar__name">James Johnson</h1>
          </div>
        </header>

        <section className="section section-hero">
          <div className="container">
            <img
              className="section-hero__image"
              src="/img/headshot-jj-blue-hept.png"
              alt="James Johnson. Very code. Such wow."
            />
            <div className="section-hero__text">
              <h2>Hello, I’m James</h2>
              <p>I make things on the web</p>
            </div>
          </div>
        </section>

        {categories.reverse().map(catName => (
          <ProjectSection
            category={catName}
            projects={projects.filter(p => p.category === catName)}
          />
        ))}

        <section className="section section-about">
          <div className="container">
            <h1 className="section__heading">About Me</h1>

            <p>
              I'm a Minneapolis-based educator and web developer, currently at
              the{' '}
              <a href="https://mcad.edu">
                Minneapolis College of Art and Design
              </a>
              . There, I explore the intersection of education and technology as
              the Director of Online Learning, and teach students the magic of
              mathematics and programming through a fusion of play, problem
              solving, and collaboration as Adjunct Faculty.
            </p>

            <p>
              I hold a masters degree in education from the University of
              Minnesota, and undergraduate degrees in mathematics and computer
              science.
            </p>

            <p>
              Occasionally, I do freelance or pro-bono web development for
              non-profits, including: the Foundation Fighting Blindness,
              Forecast Public Art, and the Sustainable Design Blog.
            </p>
          </div>
        </section>

        <footer className="page-footer">
          <div className="container">
            <p>&copy; James Johnson {new Date().getFullYear()} </p>
            <ul className="social-media">
              <li>
                <a
                  href="mailto:james_johnson@mcad.edu"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-envelope" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.linkedin.com/pub/james-johnson/13/a66/233"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/geekydatamonkey"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
