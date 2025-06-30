import { useEffect, useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";

export default function Navbar({ toggleSidebar }) {
  const [category, setCategory] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      //clean up on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className={`nav-left ${scrolled ? "scrolled" : ""}`}>
        <h1>
          <span>VISW</span>A<span>JITH</span>.S{" "}
        </h1>
      </div>
      <FaBars onClick={toggleSidebar} className="display-sidebar" />
      <ul className={`${scrolled ? "scrolled" : ""}`}>
        <li className={category === "home" ? "is-active" : ""}>
          <a href="#home" onClick={() => setCategory("home")}>
            Home
          </a>
        </li>
        <li className={category === "about" ? "is-active" : ""}>
          <a href="#about" onClick={() => setCategory("about")}>
            About Me
          </a>
        </li>
        <li className={category === "projects" ? "is-active" : ""}>
          <a href="#projects" onClick={() => setCategory("projects")}>
            Projects
          </a>
        </li>
        <li className={category === "contact" ? "is-active" : ""}>
          <a href="#contact" onClick={() => setCategory("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
