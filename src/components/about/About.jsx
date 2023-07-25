import React from "react";
import "./about.scss";

const About = () => {
  const downloadResume = () => {
    const resumeUrl = "../../../assets/resume.pdf"; // Update the path to your resume
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Alejandro_Dardon_Resume.pdf"; // Set the desired name for the downloaded file
    link.click();
  };

  return (
    <div className="about" id="about">
      <div className="title-container">
        <h1 className="background-title">ABOUT ME</h1>
        <h1 className="main-title">Know Me More</h1>
      </div>
      <div className="information-container">
        <div className="left">
          <h1 className="name-title">
            I'm <span className="name">Alejandro Dardon,</span> a Full-Stack
            Developer
          </h1>
          <p className="first-paragraph">
            As a full-stack developer, I help potential clients build meaningful
            and comprehensive applications that precisely cater to their needs.
            By combining my expertise in front-end and back-end technologies, I
            ensure the seamless integration of user-friendly interfaces with
            robust functionalities, resulting in highly satisfying and efficient
            solutions.
          </p>
          <p className="second-paragraph">
            My ultimate joy is seeing clients' ideas come to life as fully
            functional applications. Timely delivery is a top priority for me,
            as it reflects my commitment to meeting their needs and ensuring
            their satisfaction.
          </p>
        </div>
        <div className="right">
          <p>
            <span>Name: </span>Alejandro Dardon
          </p>
          <p className="email">
            <span>Email: </span>alejandro_dardon@hotmail.com
          </p>
          <p>
            <span>Age: </span>23
          </p>
          <p>
            <span>Based: </span>Jacksonville, FL
          </p>
          <button className="download" onClick={downloadResume}>
            Download CV
          </button>
        </div>
      </div>
      <div className="statistics-container">
        <div className="statistic">
          <p className="number">1+</p>
          <p className="statistic-name">Years Experience</p>
        </div>
        <div className="statistic">
          <p className="number">10000+</p>
          <p className="statistic-name">Lines of Code Written</p>
        </div>
        <div className="statistic">
          <p className="number">6+</p>
          <p className="statistic-name">Applications Completed</p>
        </div>
        <div className="statistic">
          <p className="number">2</p>
          <p className="statistic-name">Certifications</p>
        </div>
      </div>
    </div>
  );
};

export default About;
