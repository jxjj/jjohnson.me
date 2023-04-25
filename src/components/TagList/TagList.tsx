import React from "react";
import "./TagList.css";

export const TagList = (props: { children: React.ReactNode }) => {
  return <ul className="tags">{props.children}</ul>;
};
