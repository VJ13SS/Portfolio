import { useState } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import "./index.css";
import Navlinks from "./components/sidebar/navlinks";
import Header from "./components/header/header";

export default function App() {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const toggleSidebar = () => {
    setDisplaySidebar((prev) => !prev);
    if (!displaySidebar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} />
      <Header />
      <About />
      <Projects />

      <Navlinks displaySidebar={displaySidebar} toggleSidebar={toggleSidebar} />
      <Contact />
    </div>
  );
}
