import "./projects.css";
import projectsInfo, { other_projects } from "./projectsData";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="my-projects">
        {projectsInfo.map((project, index) => {
          return (
            <div className="project" key={index}>
              <div className="project-img">image</div>
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span style={{ fontWeight: "bold" }}>
                  <span style={{ textDecoration: "underline" }}>
                    Tech Stack{" "}
                  </span>
                  : {project.techStack}
                </span>
                {project.links.map((link, index) => {
                  return (
                    <div className="links" key={index}>
                      <span>
                        <span style={{ textDecoration: "underline" }}>
                          Links{" "}
                        </span>{" "}
                        :{" "}
                      </span>
                      {Object.keys(link).map((key) => (
                        <span style={{ fontWeight: "bold" }}>
                          {key}
                          <a href="#">{link[key]}</a>
                        </span>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <h2>Other Projects</h2>
        <div className="other-projects">
          
          {other_projects.map((project, index) => {
            return (
              <div className="other-project">
                <p>{project.description}</p>
                {project.links.map((link, index) => {
                  return (
                    <div className="links" key={index}>
                      <span>
                        <span style={{ textDecoration: "underline" }}>
                          Links{" "}
                        </span>{" "}
                        :{" "}
                      </span>
                      {Object.keys(link).map((key) => (
                        <span style={{ fontWeight: "bold" }}>
                          {key}
                          <a href="#">{link[key]}</a>
                        </span>
                      ))}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
