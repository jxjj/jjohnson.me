import React from "react";
import "./AboutSection.css";

export const AboutSection = () => (
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
            I&rsquo;m a Minneapolis-based educator and web developer, currently
            at the{" "}
            <a href="https://mcad.edu">Minneapolis College of Art and Design</a>
            . There I explore the intersection of teaching and technology as the
            Director of Online Learning. For almost 20 years, I&rsquo;ve been
            teaching students the magic of mathematics and programming through a
            fusion of play, problem solving, and collaboration.
          </p>

          <p>
            I hold a masters degree in education from the University of
            Minnesota, and undergraduate degrees in mathematics and computer
            science.
          </p>

          <p>
            Occasionally, I do freelance or pro-bono web development for
            non-profits, including: the Foundation Fighting Blindness, Forecast
            Public Art, and the Sustainable Design Blog.
          </p>
        </div>
      </div>
    </div>
  </section>
);
