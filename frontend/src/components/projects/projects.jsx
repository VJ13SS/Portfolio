import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./projects.css";
import projectsInfo from "./projectsData";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects__details">
        {projectsInfo.map((project, indx) => (
          <div className="project" key={indx} style={{backgroundImage:`url(${project.image})`}}>
            <div className="project__overlay" >
              <h2>{project.name}</h2>
              <p>
                <FaQuoteLeft /> {project.description} <FaQuoteRight />
              </p>
              <h3><a href={project.link}>GitHub</a></h3>
            </div>
          </div>
        ))}
      </div>
      <span>Check My <a href="https://www.linkedin.com/in/viswajith-s-connect">LinkedIn</a> to see more..!</span>
    </div>
  );
}
