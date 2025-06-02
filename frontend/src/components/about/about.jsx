import { useState } from "react";
import "./about.css";
import { education, skills, achievements, others } from "./aboutInfo";

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
        <h6>
          **Visit My{" "}
          <a href="https://www.linkedin.com/in/viswajith-s-connect">Linkedin</a>{" "}
          to see my works
        </h6>

        <a href="/VISWAJITH_S_RESUME.pdf" download>
          <button>Get My Resume</button>
        </a>
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
              onClick={() => setCategory("Achievements")}
              style={{}}
              className={category == "Achievements" ? "header-active" : ""}
            >
              Achievements
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
                {education.map((item, index) => {
                  return (
                    <p key={index}>
                      <span>{item.type}</span>
                      {item.institute}
                    </p>
                  );
                })}
              </div>
            ) : category == "Skills" ? (
              <div className="info">
                {skills.map((item, index) => {
                  return (
                    <p key={index}>
                      <span>{item.type}</span>
                      {item.entities}
                    </p>
                  );
                })}
              </div>
            ) : category === "Achievements" ? (
              <div className="info">
                {achievements.map((item, index) => {
                  return (
                    <p key={index}>
                      <span>{item.type}</span>
                      {item.description}
                    </p>
                  );
                })}
              </div>
            ) : (
              <div className="info">
                {others.map((item, index) => {
                  return (
                    <p key={index}>
                      <span>{item.type}</span>
                      {item.identifier}
                    </p>
                  );
                })}
                <p>
                  <span>LeetCode</span>{" "}
                  <a href="https://leetcode.com/u/Viswajith_s/">LeetCode</a>
                </p>

                <p>
                  {" "}
                  <span>GitHub</span>
                  <a href="https://github.com/VJ13SS">Github</a>
                </p>
                <p>
                  <span>LinkedIn</span>{" "}
                  <a href="https://www.linkedin.com/in/viswajith-s-connect">
                    LinkedIn
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
