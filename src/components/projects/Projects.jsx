import React from "react";
import "./projects.scss";
import { useState, useEffect, useRef } from "react";
import PortfolioList from "./PortfolioList";

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

  // Use useRef to hold the interval ID
  const intervalRef = useRef(null);

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
    // Clear previous interval and set a new one to switch tabs every 5 seconds
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const currentIndex = list.findIndex((item) => item.id === selected);
      const nextIndex = (currentIndex + 1) % list.length;
      setSelected(list[nextIndex].id);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalRef.current);
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
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
