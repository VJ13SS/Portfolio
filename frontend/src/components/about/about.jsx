import { useState } from "react";
import "./about.css";
import {MdSchool} from 'react-icons/md'
import { education, skills, achievements, others } from "./aboutInfo";
import { FaChartLine, FaLightbulb, FaMedal, FaTools } from "react-icons/fa";

export default function About() {

  return (
    <div className="about" id="about">
      
      <div className="about__profile">
        <div className="logo">
          <img src="./profile.jpg" alt="" />
        </div>
        <div className="about__description">
          <h1>About Me</h1>
          <p className="about__summary">
          I'm a 4th Year Electronics And Communication Engineering Student
          passionate about Web Developement and Machine Learning.Practiced
          Building AI-Powered Applications and full-stack platforms.Completed
          50+ projects,demonstrating problem-solving skills , adaptability, and
          a strong passion,ability to develop impactful software solutins.Eager
          to contribute to innovative tech projects.
        </p>
        <a href="/VISWAJITH_S_RESUME.pdf" download>Get My Resume</a>
        </div>
        
      </div>
      <div className="about__details">
        <div className="about__card education">
          <h1>Education</h1>
          {education.map((institution,indx) => (
            <div className="about__card-item" key={indx}>
              <span><FaMedal /> {institution.type}</span>
              <span><MdSchool /> {institution.institute}</span>
            </div>
          ))}
        </div>
        <div className="about__card skills">
          <h1>Skills</h1>
          {skills.map((skill,indx) => (
            <div className="about__card-item" key={indx}>
              <span><FaTools />  {skill.type}</span>
              <span><FaMedal />  {skill.entities}</span>
            </div>
          ))}
        </div>
        <div className="about__card achievements">
          <h1>Achievements</h1>
          {achievements.map((achievement,indx) => (
            <div className="about__card-item" key={indx}>
              <span><FaMedal /> {achievement.type}</span>
              <span><FaLightbulb /> {achievement.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
