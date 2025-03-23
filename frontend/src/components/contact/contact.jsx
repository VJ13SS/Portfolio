import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact.css";

export default function Contact() {
  //https://www.linkedin.com/in/viswajith-s-connect
  //https://github.com/VJ13SS
  //https://leetcode.com/u/Viswajith_s/
  return (
    <div className="contact" id="contact">
      <span>Feel Free To Connect</span>
      <div className="links">
        <a href="https://github.com/VJ13SS">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/viswajith-s-connect">
          <FaLinkedin size={25} />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&to=viswajith5749@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={25} />
        </a>
      </div>
      <span>Created By VJ 13 SS</span>
    </div>
  );
}
