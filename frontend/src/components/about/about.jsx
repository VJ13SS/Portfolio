import { useState } from "react";
import "./about.css";

export default function About() {
  const [category, setCategory] = useState("Education");
  return (
    <div className="about" id="about">
      
      <div className="logo">
        <img src="./profile.jpg" alt="" />
      </div>
      <div className="about-description">
      <h1>About Me</h1>
        <p className="profile-summary">
          I'm a 3rd Year Electronics And Communication Engineering Student
          passionate about Web Developement and Machine Learning.Practiced
          Building AI-Powered Applications and full-stack platforms.Completed
          50+ projects,demonstrating problem-solving skills , adaptability, and
          a strong passion,ability to develop impactful software solutins.Eager
          to contribute to innovative tech projects.
        </p>
        <h6>**Visit My <a href="https://www.linkedin.com/in/viswajith-s-connect">Linkedin</a> to see my works</h6>

        <a href="/Viswajith_S.pdf" download><button>Get My Resume</button></a>
        <div className="other-details">
          <div className="header">
            <h3
              onClick={() => setCategory("Education")}
              style={{}}
              className={category == "Education" ? "header-active" : ""}
            >
              Education
            </h3>
            <h3
              onClick={() => setCategory("Skills")}
              style={{}}
              className={category == "Skills" ? "header-active" : ""}
            >
              Skills
            </h3>
            <h3
              onClick={() => setCategory("Other's")}
              style={{}}
              className={category == "Other's" ? "header-active" : ""}
            >
              Other's
            </h3>
          </div>
          <div className="information">
            {category == "Education" ? (
              <div className="info">
                <p>
                  <span>Engineering</span>BTech ECE (3rd Year , currently
                  pursuing from NSSCE)
                </p>

                <p>
                  <span>Higher Secondary</span>BSS Gurukulam Higher Secondary
                  School, Alathur
                </p>

                <p>
                  <span>High School</span>BSS Gurukulam Higher Secondary School,
                  Alathur
                </p>
              </div>
            ) : category == "Skills" ? (
              <div className="info">
                <p>
                  <span>Frontend : </span>React , HTML , CSS , Javascript ,
                  TypeScript(Basics)
                </p>

                <p>
                  <span>Backend : </span>Flask , Node.js(Basics) , Express.js
                  (Basics)
                </p>

                <p>
                  <span>Databases :</span>SQL(basics) , MongoDB(Basics)
                </p>

                <p>
                  <span>Api Integration : </span>Stripe , OMDB API , Email JS
                </p>

                <p>
                  <span>Programming Languages : </span>Python , C++ , C
                </p>

                <p>
                  <span>Libraries : </span>Numpy , Pandas , Matplotlib ,
                  Scikitlearn
                </p>

                <p>
                  <span>Version Control :</span> GitHub
                </p>
                <p>
                  <span>Development Environments : </span>VS Code , Replit
                </p>
              </div>
            ) : (
              <div className="info">
                <p>
                  <span>Location</span>Althur , Palakkad , Kerala
                </p>

                <p>
                  <span>Code Name</span>VJ13SS
                </p>

                <p>
                  <span>Domain</span>Web Development
                </p>

                <p>
                  <span>Sub Domain</span>Machine Learning
                </p>
                <p>
                  <span>LeetCode</span> <a href="https://leetcode.com/u/Viswajith_s/">LeetCode</a>
                </p>

                <p>
                  {" "}
                  <span>GitHub</span>
                  <a href="https://github.com/VJ13SS">Github</a>
                </p>
                <p><span>LinkedIn</span> <a href= "https://www.linkedin.com/in/viswajith-s-connect">LinkedIn</a></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
