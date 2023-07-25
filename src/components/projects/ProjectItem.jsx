import React from "react";
import "./projectItem.scss";

const ProjectItem = (props) => {
  const project = props.project;
  return (
    <div className="portfolio-item">
      <img
        src="https://via.placeholder.com/300"
        alt="Project"
        className="project-image"
      />
      <p className="project-description">{project.description}</p>
      <div className="tag-container">
        <span
          className="tag"
          style={{ backgroundColor: project.skillColors[0] }}
        >
          {project.skills[0]}
        </span>
        <span
          className="tag"
          style={{ backgroundColor: project.skillColors[1] }}
        >
          {project.skills[1]}
        </span>
        <span
          className="tag"
          style={{ backgroundColor: project.skillColors[2] }}
        >
          {project.skills[2]}
        </span>
        <span
          className="tag"
          style={{ backgroundColor: project.skillColors[3] }}
        >
          {project.skills[3]}
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
