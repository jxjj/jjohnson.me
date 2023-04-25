import React from "react";
import { projects } from "../../data/projects";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { AboutSection } from "../../components/AboutSection/AboutSection";
import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { Project } from "../../components/Project/Project";
import { FooterSection } from "../../components/FooterSection/FooterSection";
import { type Project as ProjectType } from "../../types";

const sortProjectsByDate = (a: ProjectType, b: ProjectType) => {
  // if no date, use today's date
  const aDate = a.date || new Date();
  const bDate = b.date || new Date();
  return bDate.getTime() - aDate.getTime();
};
const workProjects = projects
  .filter((p) => p.category === "Work")
  .sort(sortProjectsByDate);
const sideProjects = projects.filter((p) => p.category === "Side Projects");
const experiments = projects.filter((p) => p.category === "Experiments");

export const HomePage = () => (
  <div className="App">
    <HeroSection />

    {workProjects.length && (
      <ProjectSection>
        <ProjectHeader>Work</ProjectHeader>
        <ProjectList>
          {workProjects.map((proj) => (
            <Project key={proj.name} project={proj} />
          ))}
        </ProjectList>
      </ProjectSection>
    )}

    {sideProjects.length && (
      <ProjectSection>
        <ProjectHeader>Side Projects</ProjectHeader>
        <ProjectList>
          {sideProjects.map((proj) => (
            <Project key={proj.name} project={proj} />
          ))}
        </ProjectList>
      </ProjectSection>
    )}

    {experiments.length && (
      <ProjectSection>
        <ProjectHeader>Experiments</ProjectHeader>
        <ProjectList>
          {experiments.map((proj) => (
            <Project key={proj.name} project={proj} />
          ))}
        </ProjectList>
      </ProjectSection>
    )}

    <AboutSection />
    <FooterSection />
  </div>
);
