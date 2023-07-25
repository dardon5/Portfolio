import React from "react";
import "./experienceCard.scss";

export default function ExperienceCard(props) {
  return (
    <div className="experience-card">
      <div className="years-container">
        <p className="years">{props.item.years}</p>
      </div>
      <h1 className="title">{props.item.title}</h1>
      <h2 className="place">{props.item.place}</h2>
      <p className="information">{props.item.information}</p>
    </div>
  );
}
