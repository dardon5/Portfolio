import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1100,
      backSpeed: 100,
      strings: ["Full-Stack Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="top">
        <div className="wrapper">
          <h2 className="intro-text">Hello! I'm</h2>
          <h1 className="intro-text">Alejandro Dardon</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div className="image-container">
            {/* <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a> */}
            <img src="assets/react_logo.png" alt="React Logo" />
            <img src="assets/node_logo.png" alt="Node Logo" />
            <img src="assets/mongo_logo.png" alt="Mongo Logo" />
            <img src="assets/html_logo.png" alt="HTML Logo" />
            <img src="assets/css_logo.png" alt="CSS Logo" />
            <img src="assets/javascript_logo.png" alt="JavaScript Logo" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <h4 className="intro-text">
            Passionate about building functional full stack applications from
            start to finish. Based in Jacksonville, Florida.
          </h4>
        </div>
      </div>
      <div className="links-container">
        <a href="https://github.com/dardon5/" target="_blank" rel="noreferrer">
          <img src="assets/github-logo.png" alt="Github Logo" />
        </a>
        <a
          href="https://linkedin.com/in/alejandro-dardon-30b850195/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="assets/linkedin-logo.png" alt="Linkedin Logo" />
        </a>
        <a
          href="assets/resume.pdf"
          target="_blank"
          download={"Alejandro_Dardon_Resume.pdf"}
        >
          <img src="assets/resume-logo.png" alt="Resume Logo" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
