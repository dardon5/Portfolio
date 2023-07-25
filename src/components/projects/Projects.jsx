import React from "react";
import "./projects.scss";
import ProjectItem from "./ProjectItem";
import { useState, useEffect } from "react";
import { featuredProject } from "../../data/projects";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(featuredProject);
    console.log(featuredProject);
  }, []);

  return (
    <div className="projects" id="projects">
      <div className="title-container">
        <h1 className="background-title">PORTFOLIO</h1>
        <h1 className="main-title">What I've Done</h1>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
