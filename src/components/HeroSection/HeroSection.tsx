import React from "react";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <section className="section section-hero">
      <div className="container">
        <img
          className="section-hero__image"
          src="/img/headshot-jj-blue-hept.png"
          alt="James Johnson. Very code. Such wow."
        />
        <div className="section-hero__text">
          <h2>
            <span className="section-hero__wave">👋</span> Hello! I&rsquo;m
            James
          </h2>
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
  );
};
