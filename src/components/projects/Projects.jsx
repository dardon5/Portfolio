import React from "react";
import "./projects.scss";
import { useState, useEffect, useRef } from "react";
import PortfolioList from "./PortfolioList";
import ProjectItem from "./ProjectItem";

import {
  frontEndPortfolio,
  backEndPortfolio,
  fullStackPortfolio,
} from "../../data/data";

export default function Projects() {
  const [selected, setSelected] = useState("fullStackPortfolio");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontEndPortfolio",
      title: "Frontend",
    },
    {
      id: "fullStackPortfolio",
      title: "Full-Stack",
    },
    {
      id: "backEndPortfolio",
      title: "Backend",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "fullStackPortfolio":
        setData(fullStackPortfolio);
        break;
      case "frontEndPortfolio":
        setData(frontEndPortfolio);
        break;
      case "backEndPortfolio":
        setData(backEndPortfolio);
        break;
      default:
        setData(fullStackPortfolio);
    }
  }, [selected, list]);

  return (
    <div className="projects" id="projects">
      <div className="title-container">
        <h1 className="background-title">PORTFOLIO</h1>
        <h1 className="main-title">What I've Done</h1>
      </div>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="portfolio-container">
        {data.map((d) => (
          <ProjectItem project={d} key={d.description} />
        ))}
      </div>
    </div>
  );
}
