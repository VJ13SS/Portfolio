import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import "./contact.css";

export default function Contact() {
  //https://www.linkedin.com/in/viswajith-s-connect
  //https://github.com/VJ13SS
  //https://leetcode.com/u/Viswajith_s/
  return (
    <div className="contact" id="contact">
      <span>Connect Me</span>
      <div className="contact__links">
        <a href="https://github.com/VJ13SS">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/viswajith-s-connect">
          <FaLinkedin size={25} />
        </a>

        <a
          href="mailto:viswajith5749@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail size={25} />
        </a>
        <a href="#">
          {" "}
          <SiLeetcode size={25} />
        </a>
      </div>
      <span>VJ 13 SS</span>
    </div>
  );
}
