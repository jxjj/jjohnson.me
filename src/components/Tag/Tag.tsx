import React from "react";
import "./Tag.css";

export const Tag = (props: { children: React.ReactNode }) => {
  return <li className="tags_tag">{props.children}</li>;
};
