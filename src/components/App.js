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
          <div class="container">
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
          <div class="container">
            {projects.map(proj => (
              <Project key={proj.name} project={proj} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
