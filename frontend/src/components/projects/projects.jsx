import "./projects.css";
import projectsInfo, { other_projects } from "./projectsData";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="my-projects">
        {projectsInfo.map((project, index) => {
          return (
            <div className="project" key={index}>
              <div className="project-img">
                <img src={project.image} alt="" />
                <div className="project-details">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <span>*Other Mini Projects include FlappyBird,React Dasboard,Amazon Home Page Clone,etc</span>
      
   
    </div>
  );
}
