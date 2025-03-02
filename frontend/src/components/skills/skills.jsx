import "./skills.css";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills and Tech Sack</h1>
      <div className="skill-set">
        <h2>Web Development</h2>
        <ul>
          <li>
            <h3>
              Frontend <span>:</span>{" "}
            </h3>
            <p>React , HTML , CSS , Javascript , TypeScript(Basics)</p>
          </li>
          <li>
            <h3>
              Backend <span>:</span>{" "}
            </h3>
            <p>Flask , Node.js(Basics) , Express.js (Basics)</p>
          </li>
          <li>
            <h3>
              Databases <span>:</span>{" "}
            </h3>
            <p>SQL(basics) , MongoDB(Basics)</p>
          </li>
          <li>
            <h3>
              API Intergration <span>:</span>{" "}
            </h3>
            <p>Stripe , OMDB API , Email JS</p>
          </li>
        </ul>
      </div>
      <div className="skill-set">
        <h2>Programming & Machine Learning</h2>
        <ul>
          <li>
            <h3>
              Programming Languages <span>:</span>{" "}
            </h3>
            <p>Python , C++ , C</p>
          </li>
          <li>
            <h3>
              Libraries <span>:</span>{" "}
            </h3>
            <p>Numpy , Pandas , Matplotlib , Scikitlearn</p>
          </li>
        </ul>
      </div>
      <div className="skill-set">
        <h2>Tools & Platforms</h2>
        <ul>
        <li>
            <h3>
              Version Control <span>:</span>{" "}
            </h3>
            <p>GitHub</p>
          </li>
          <li>
            <h3>
              Development Environments <span>:</span>{" "}
            </h3>
            <p>VS Code , Replit</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
