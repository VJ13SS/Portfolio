import "./about.css";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <ul>
        <li>
          <h3>
            Name <span>:</span>{" "}
          </h3>
          <p>Viswajith S</p>
        </li>
        <li>
          <h3>
            Code Name <span>:</span>{" "}
          </h3>
          <p>VJ13SS</p>
        </li>
        <li>
          <h3>
            Location <span>:</span>{" "}
          </h3>
          <p>Althur,Palakkad,Kerala</p>
        </li>
        <li>
          <h3>
            Education <span>:</span>{" "}
          </h3>
          <p>BTech ECE (3rd Year , currently pursuing from NSSCE)</p>
        </li>
        <li>
          <h3>
            Domain <span>:</span>{" "}
          </h3>
          <p>Web Development</p>
        </li>
        <li>
          <h3>
            Sub Domain <span>:</span>{" "}
          </h3>
          <p>Machine Learning</p>
        </li>
        <li>
          <h3>
            LeetCode <span>:</span>{" "}
          </h3>
          <a href="#">LeetCode</a>
        </li>
        <li>
          <h3>
            GitHub<span>:</span>{" "}
          </h3>
          <a href="#">Github</a>
        </li>
      </ul>
      <p className="profile-summary">
        3rd Year Electronics And Communication Engineering Student passionate
        about Web Developement and Machine Learning.Practiced Building
        AI-Powered Applications and full-stack platforms.Completed 50+
        projects,demonstrating problem-solving skills , adaptability, and a
        strong passion,ability to develop impactful software solutins.Eager to
        contribute to innovative tech projects.
      </p>
      <p>Get My Resume Here!</p>
    </div>
  );
}
