import React from "react";
import * as Icons from "../../icons";
import "./FooterSection.css";

export const FooterSection = () => (
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
            <Icons.Github />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:johnsojr@mcad.edu"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icons.Email />
            <span className="sr-only">Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jjohnson-me"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icons.LinkedIn />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a rel="me" href="https://techhub.social/@jxjj">
            <Icons.Mastodon />
            <span className="sr-only">Mastodon</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
