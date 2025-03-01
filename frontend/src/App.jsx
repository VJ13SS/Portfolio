import About from "./components/about/about";
import Milestones from "./components/milestones/milestones";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Navlinks from "./components/sidebar/navlinks";
import Skills from "./components/skills/skills";
import './index.css'


export default function App(){
  return(
    <div className="app">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Milestones />
    </div>
  )
}