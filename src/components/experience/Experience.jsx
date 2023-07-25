import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./experience.scss";
import { useEffect, useState } from "react";
import { experience } from "../../data/experience";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experience);
  }, []);

  return (
    <div className="experience" id="experience">
      <div className="title-container">
        <h1 className="background-title">EXPERIENCE</h1>
        <h1 className="main-title">Where I've Learned</h1>
      </div>
      <div className="information-container">
        {experiences.map((item) => (
          <ExperienceCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
