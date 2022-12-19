import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Github = () => <FontAwesomeIcon icon={faGithub} />;
export const LinkedIn = () => <FontAwesomeIcon icon={faLinkedin} />;
export const Email = () => <FontAwesomeIcon icon={faEnvelope} />;
export const Mastodon = () => <FontAwesomeIcon icon={faMastodon} />;
