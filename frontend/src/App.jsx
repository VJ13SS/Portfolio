import { useEffect, useState } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Events from "./components/events/events";
import Milestones from "./components/milestones/milestones";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Projects from "./components/projects/projects";

import "./index.css";
import Services from "./components/services/services";
import Navlinks from "./components/sidebar/navlinks";

export default function App() {
  const [offset, setOffset] = useState(0); //to store how far the page has been scrolled

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY); //updates the offset

    window.addEventListener("scroll", handleScroll); // adds the event listener on scroll
    return () => window.removeEventListener("scroll", handleScroll); //cleanup , removes the event listener to prevent memory leaks
  }, []);

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
    <div
      className="app"
      style={{
        "--scroll-offset": `${offset * 0.5}px`, // Dynamic CSS variable this variable is used in index.css to adjust the background image position dynamically
        //0.5px is used to control the speed of the effect.It can be adusted accordingly
        overflowY: displaySidebar ? "hidden" : "",
      }}
    >
      <Navbar toggleSidebar={toggleSidebar} />
      <Profile />
      <About />
      <Projects />
      <Services />
      <Navlinks displaySidebar={displaySidebar} toggleSidebar={toggleSidebar} />
      <hr />
      <Contact />
    </div>
  );
}
