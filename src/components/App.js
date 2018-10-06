import React, { Component } from 'react';
import './App.css';
import Project from './Project';
import projects from '../data/projects';

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

        <section className="section section-projects">
          <div className="container">
            <h1 className="section__heading">Projects</h1>
            <div className="project-list">
              {projects.map(proj => (
                <Project key={proj.name} project={proj} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-about">
          <div className="container">
            <h1 className="section__heading">About Me</h1>
            <p>
              I'm a teacher, developer, and Director of Online Learning at the{' '}
              <a href="http://mcad.edu">
                Minneapolis College of Art and Design
              </a>
              .
            </p>

            <p>
              I'm a proud Minnesoohhtan with three destructive cats, a wonderful
              hubby, and an insatiable appetite for seriously good (or even
              moderately good) pizza.
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
