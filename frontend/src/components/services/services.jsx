import "./services.css";
import { FaCode } from "react-icons/fa";
export default function Services() {
  return (
    <div className="services" id="services">
      <h1>My Services</h1>
      <div className="my-services">
        <div className="service">
          <FaCode size={40} className="service-icon" />

          <h2>Website development</h2>
          <p>
            I build responsive,fast, and user friendly websites using
            technologies like React,Flask and more.Whether its a business
            site,portfolio or custom web app.I encure clear code and seamless
            usser experience.
          </p>
          <span>Lets create something great !</span>
          <h6>**check my <a href="#">LinkedIn </a>to see my works</h6>
        </div>
      </div>
    </div>
  );
}
