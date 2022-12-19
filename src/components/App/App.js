import React, { Component } from 'react';
import { uniq } from 'ramda';
import ProjectSection from '../ProjectSection/ProjectSection';
import projects from '../../data/projects';

import './App.css';

const categories = uniq(projects.map(p => p.category));

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
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/2RRQHb"
                  class="btn"
                >
                  Résumé
                </a>
              </p>
            </div>
          </div>
        </section>

        {categories.reverse().map(catName => (
          <ProjectSection
            key={catName}
            category={catName}
            projects={projects.filter(p => p.category === catName)}
          />
        ))}

        <section className="section section-about">
          <div className="container">
            <h1 className="section__heading">About Me</h1>

            <div className="section__contents">
              <img
                className="section-about__img"
                src="img/headshot-jj-beach_hex.png"
                alt="James in the Caribbean"
              />
              <div className="section-about__bio">
                <p>
                  I'm a Minneapolis-based educator and web developer, currently
                  at the{' '}
                  <a href="https://mcad.edu">
                    Minneapolis College of Art and Design
                  </a>
                  . There I explore the intersection of teaching and technology
                  as the Director of Online Learning. For almost 20 years, I've
                  been teaching students the magic of mathematics and
                  programming through a fusion of play, problem solving, and
                  collaboration.
                </p>

                <p>
                  I hold a masters degree in education from the University of
                  Minnesota, and undergraduate degrees in mathematics and
                  computer science.
                </p>

                <p>
                  Occasionally, I do freelance or pro-bono web development for
                  non-profits, including: the Foundation Fighting Blindness,
                  Forecast Public Art, and the Sustainable Design Blog.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="page-footer">
          <div className="container">
            <p>&copy; James Johnson {new Date().getFullYear()} </p>
            <ul className="social-media">
              <li>
                <a
                  href="mailto:johnsojr@mcad.edu"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-envelope" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jjohnson-me"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jxjj"
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
