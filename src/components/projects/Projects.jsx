import "./projects.scss";
import { useEffect, useState } from "react";
import { featuredProject } from "../../data/projects";
import ProjectItemCard from "./ProjectItemCard";

const Projects = () => {
  const [selected] = useState("featured");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setProjects(featuredProject);
        break;
      default:
        setProjects(featuredProject);
    }
  }, [selected]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container">
        {projects.map((d) => (
          <ProjectItemCard item={d} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
