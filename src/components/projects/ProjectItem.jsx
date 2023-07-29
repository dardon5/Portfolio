import React from "react";
import "./projectItem.scss";

const ProjectItem = (props) => {
  const project = props.project;
  return (
    <div className="portfolio-item">
      <div className="logo-container">
        <img
          src={project.img}
          height={project.imgHeight}
          width={project.imgWidth}
          alt="Logo"
        />
      </div>

      <h1 className="title">{project.title}</h1>
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
      <div className="links-container">
        {project.github ? (
          <a
            href="https://github.com/dardon5/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/github-logo.png" alt="Github Logo" />
          </a>
        ) : (
          ""
        )}
        {project.liveDemo ? (
          <a href={project.link} target="_blank" rel="noreferrer">
            <img src="assets/go-to.png" alt="Live Demo" />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
