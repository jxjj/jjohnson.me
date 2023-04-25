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
            I&rsquo;m a Minneapolis-based web developer and designer, currently
            at the <a href="http://umn.edu">University of Minnesota</a>. There I
            work with amazing colleagues making web apps that help people learn.
            I hold a masters degree in education and undergraduate degrees in
            mathematics and computer science.
          </p>
          <p>
            Outside of work, I enjoy hiking, kayaking, traveling, gardening, and
            just chilling on the couch with my hubby watching SciFi and eating
            Fruit Loops.
          </p>
        </div>
      </div>
    </div>
  </section>
);
