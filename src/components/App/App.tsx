import React, { Component } from "react";
import { uniq } from "ramda";
import { ProjectSection } from "../ProjectSection/ProjectSection";
import { projects } from "../../data/projects";

import "./App.css";

const categories = uniq(projects.map((p) => p.category));

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
                  className="btn"
                >
                  Résumé
                </a>
              </p>
            </div>
          </div>
        </section>

        {categories.reverse().map((catName) => (
          <ProjectSection
            key={catName}
            category={catName}
            projects={projects.filter((p) => p.category === catName)}
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
                  I&rquo;m a Minneapolis-based educator and web developer,
                  currently at the{" "}
                  <a href="https://mcad.edu">
                    Minneapolis College of Art and Design
                  </a>
                  . There I explore the intersection of teaching and technology
                  as the Director of Online Learning. For almost 20 years,
                  I&rquo;ve been teaching students the magic of mathematics and
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
                  href="https://github.com/jxjj"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-github" />
                  <span className="sr-only">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:johnsojr@mcad.edu"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-envelope" />
                  <span className="sr-only">Email</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jjohnson-me"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-linkedin" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li>
                <a rel="me" href="https://techhub.social/@jxjj">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z" />
                  </svg>
                  <span className="sr-only">Mastodon</span>
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
